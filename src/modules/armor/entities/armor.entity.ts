import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Armor {
    @ApiProperty({ example: 1, description: 'ID único da armadura' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Capacete de platina', description: 'Nome da armadura' })
    @Column('varchar')
    name: string;

    @ApiProperty({ example: 50, description: 'Possibilidade de bloqueio de golpes da armadura (em %)' })
    @Column('integer')
    block: number;

    @ApiProperty({ example: 50, description: 'Pontos de defesa base da armadura' })
    @Column('integer')
    defence: number;

    @ApiProperty({ example: 10, description: 'Pontos extras de defesa corpo a corpo da armadura' })
    @Column('integer')
    meleeDefence: number;

    @ApiProperty({ example: 10, description: 'pontos extras de defesa mágica da armadura' })
    @Column('integer')
    magicDefence: number;

    // @ApiProperty({ type: () => [Character], description: 'Lista de personagens associados a armadura' })
    // @ManyToMany(() => Character, (character) => character.users, { cascade: true })
    // @JoinTable() // Define a tabela intermediária
    // characters: Character[];
}
