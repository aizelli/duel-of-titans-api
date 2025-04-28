import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'src/modules/characters/entities/character.entity';

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

    @ApiProperty({ example: new Date(), description: 'Data de criação do usuário' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
    })
    createAt: Date;

    @ApiProperty({ example: new Date(), description: 'Data de atualização do usuário' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
        onUpdate: 'CURRENT_TIMESTAMP', // Atualiza automaticamente
    })
    updateAt: Date;

    @ApiProperty({ type: () => Character, description: 'Personagem associado ao usuário' })
    @OneToOne(() => Character, (character) => character.user, { cascade: true })
    character: Character;
}
