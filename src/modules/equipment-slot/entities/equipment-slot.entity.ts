import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Item } from "src/modules/item/entities/item.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum typeEquipmentName {
    WEAPON = 'weapon',
    SHIELD = 'shield',
    ARMOR = 'armor'
}

@Entity()
export class EquipmentSlot {
    @ApiProperty({ example: 1, description: 'ID único do slot do equipamento' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: 'Tipo de equipamento', enum: typeEquipmentName, example: typeEquipmentName.ARMOR })
    @Column({ type: 'enum', enum: typeEquipmentName, default: typeEquipmentName.ARMOR })
    type: typeEquipmentName;

    @ApiProperty({ type: () => [Item], description: 'item relacionado ao inventário' })
    @ManyToOne(() => Item)
    Item: Item;

    @ApiProperty({ type: () => [Character], description: 'Personagme relacionado ao inventário' })
    @ManyToOne(() => Character, (character) => character.inventorySlots)
    characters: Character;
}
