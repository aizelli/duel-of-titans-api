import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer')
    health: number;

    @Column('integer')
    maxHealth: number;

    @Column('integer')
    healthRegen: number;

    @Column('integer')
    mana: number;

    @Column('integer')
    maxMana: number;

    @Column('integer')
    manaRegen: number;

    //atributos
    @Column('integer')
    strength: number;

    @Column('integer')
    dexterity: number;

    @Column('integer')
    constitution: number;

    @Column('integer')
    intelligence: number;

    @Column('integer')
    wisdom: number;

    @Column('integer')
    charisma: number;

    @Column('integer')
    damage: number;

    @Column('integer')
    maxDamage: number;

    @Column('integer')
    attackSpeed: number;

    @Column('integer')
    meleeDefence: number;

    @Column('integer')
    magicDefence: number;

    @Column('integer')
    evasion: number;

    @Column('integer')
    criticalDamage: number;

    @OneToOne(() => Character, (character) => character)
    @JoinColumn()
    character: Character;

}
