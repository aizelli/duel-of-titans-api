import { ApiProperty } from "@nestjs/swagger";
import { InventorySlot } from "src/modules/inventory-slot/entities/inventory-slot.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { typeItemName, typeItemRarity } from "util/listas.enum";


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

    @ApiProperty({ description: 'Raridade do item', enum: typeItemRarity, example: typeItemRarity.SCRAP })
    @Column({ type: 'enum', enum: typeItemRarity, default: typeItemRarity.SCRAP })
    rarity: typeItemRarity;

    @ApiProperty({ example: 99, description: 'Quantidade máxima do item' })
    @Column({ default: 1 })
    maxStack: number;

    @ApiProperty({ example: 5, description: 'Valor padão de venda do item' })
    @Column({ default: 1 })
    priceToSell: number;

    @ApiProperty({ example: '{"Vida": 5}', description: 'Atributos especifico do item' })
    @Column({ type: 'json', nullable: true })
    attributes: Record<string, any>;
    
    @ApiProperty({ example: new Date(), description: 'Data de criação do item' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
    })
    createAt: Date;

    @ApiProperty({ example: new Date(), description: 'Data de atualização do item' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
        onUpdate: 'CURRENT_TIMESTAMP', // Atualiza automaticamente
    })
    updateAt: Date;

    @ManyToMany(() => InventorySlot, (inventorySlot) => inventorySlot.items)
    inventorySlots: InventorySlot[];
}
