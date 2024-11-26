import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weapon {
    @ApiProperty({ example: 1, description: 'ID único do armamento' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Espada Longa', description: 'Nome do armamento' })
    @Column('varchar')
    name: string;

    @ApiProperty({ example: 50, description: 'Dano causado pelo armamento' })
    @Column('integer')
    damage: number;

    @ApiProperty({ example: 50, description: 'Dano máximo causado pelo armamento' })
    @Column('integer')
    maxDamage: number;

    @ApiProperty({ example: 50, description: 'Velocidade de ataque causado armamento' })
    @Column('decimal')
    attackSpeed: number;

    // @ApiProperty({ type: () => [Character], description: 'Lista de personagens associados ao armamento' })
    // @ManyToMany(() => Character, (character) => character.users, { cascade: true })
    // @JoinTable() // Define a tabela intermediária
    // characters: Character[];
}
