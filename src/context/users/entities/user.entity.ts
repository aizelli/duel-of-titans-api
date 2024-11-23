import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'src/context/characters/entities/character.entity';

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}

@Entity()
export class User {
    @ApiProperty({ example: 1, description: 'ID único do usuário' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ example: 'Nome Sobrenome', description: 'Nome do usuário' })
    @Column('varchar')
    name: string;

    @ApiProperty({ example: 'exemplo@email.com', description: 'Email do usuário' })
    @Column('varchar')
    email: string;

    @ApiProperty({ example: 'senhaSegura123', description: 'Senha do usuário' })
    @Column()
    password: string;

    @ApiProperty({
        description: 'Tipo de usuário',
        enum: UserRole,
        example: UserRole.USER,
    })
    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    type: UserRole;

    @ApiProperty({ type: () => [Character], description: 'Lista de personagens associados ao usuário' })
    @ManyToMany(() => Character, (character) => character.users, { cascade: true })
    @JoinTable() // Define a tabela intermediária
    characters: Character[];
}
