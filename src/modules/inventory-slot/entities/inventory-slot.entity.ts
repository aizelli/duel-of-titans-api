import { ApiProperty } from "@nestjs/swagger";
import { Character } from "src/modules/characters/entities/character.entity";
import { Item } from "src/modules/item/entities/item.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InventorySlot {
    @ApiProperty({ example: 1, description: 'ID único do slot do inventário' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ example: 1, description: 'Quantidade do item no slot do inventário' })
    @Column({ type: 'integer', default: 1 })
    quantity: number;

    @ApiProperty({ type: () => [Character], description: 'Personagme relacionado ao inventário' })
    @ManyToOne(() => Character, (character) => character.inventorySlots)
    characters: Character;

    @ManyToMany(() => Item, (item) => item.inventorySlots)
    @JoinTable()
    items: Item[];

}
