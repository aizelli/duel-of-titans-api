import { ApiProperty } from "@nestjs/swagger";
import { InventorySlot } from "src/context/inventory-slot/entities/inventory-slot.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum typeItemName {
    CONSUMABLE = 'consumable',
    WEAPON = 'weapon',
    SHIELD = 'shield',
    ARMOR = 'armor'
}

@Entity()
export class Item {
    @ApiProperty({ example: 1, description: 'ID único do Item' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ example: 'Poção de vida', description: 'Nome do Item' })
    @Column('varchar')
    name: string;

    @ApiProperty({ description: 'Tipo de item', enum: typeItemName, example: typeItemName.CONSUMABLE })
    @Column({ type: 'enum', enum: typeItemName, default: typeItemName.CONSUMABLE })
    type: typeItemName;

    @ApiProperty({ example: 99, description: 'Quantidade máxima do item' })
    @Column({ default: 1 })
    maxStack: number;

    @ApiProperty({ example: 5, description: 'Valor padão de venda do item' })
    @Column({ default: 1 })
    priceToSell: number;

    @ApiProperty({ example: '{"Vida": 5}', description: 'Atributos especifico do item' })
    @Column({ type: 'json', nullable: true })
    attributes: Record<string, any>;

    @ManyToMany(() => InventorySlot, (inventorySlot) => inventorySlot.items)
    inventorySlots: InventorySlot[];
}
