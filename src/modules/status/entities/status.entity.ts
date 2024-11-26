import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Status {
    @ApiProperty({ example: 1, description: 'ID único do status' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 100, description: 'Vida atual' })
    @Column('integer')
    health: number;

    @ApiProperty({ example: 100, description: 'Vida máxima' })
    @Column('integer')
    maxHealth: number;

    @ApiProperty({ example: 10, description: 'Recuperação de vida' })
    @Column('integer')
    healthRegen: number;

    @ApiProperty({ example: 100, description: 'Mana atual' })
    @Column('integer')
    mana: number;

    @ApiProperty({ example: 100, description: 'Mana máxima' })
    @Column('integer')
    maxMana: number;

    @ApiProperty({ example: 10, description: 'Recuperação de mana' })
    @Column('integer')
    manaRegen: number;

    @ApiProperty({ example: 10, description: 'Força atual' })
    @Column('integer')
    strength: number;

    @ApiProperty({ example: 10, description: 'Destreza máxima' })
    @Column('integer')
    dexterity: number;

    @ApiProperty({ example: 10, description: 'Sabedoria máxima' })
    @Column('integer')
    wisdom: number;

    @ApiProperty({ example: 10, description: 'Vida máxima' })
    @Column('integer')
    perception: number;

    @ApiProperty({ example: 10, description: 'Dano base' })
    @Column('integer')
    damage: number;

    @ApiProperty({ example: 10, description: 'Dano máximo' })
    @Column('integer')
    maxDamage: number;

    @ApiProperty({ example: 10, description: 'Velocidade de ataque' })
    @Column('integer')
    attackSpeed: number;

    @ApiProperty({ example: 10, description: 'Defesa corpo a corpo' })
    @Column('integer')
    meleeDefence: number;

    @ApiProperty({ example: 10, description: 'Defesa mágica' })
    @Column('integer')
    magicDefence: number;

    @ApiProperty({ example: 10, description: 'Evasão' })
    @Column('integer')
    evasion: number;

    @ApiProperty({ example: 10, description: 'Dano crítico (em %)' })
    @Column('integer')
    criticalDamage: number;

    @ApiProperty({ type: () => Character, description: 'Personagem associado ao status' })
    @OneToOne(() => Character)
    @JoinColumn()
    characters: Character;

}
