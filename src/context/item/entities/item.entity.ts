import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @ApiProperty({ example: 1, description: 'nome do Item' })
    @Column('varchar')
    name: string;

    @ApiProperty({ description: 'Tipo de item', enum: typeItemName, example: typeItemName.CONSUMABLE })
    @Column({ type: 'enum', enum: typeItemName, default: typeItemName.CONSUMABLE })
    type: typeItemName;

    @ApiProperty({ example: 1, description: 'Quantidade máxima do item' })
    @Column({ default: 1 })
    maxStack: number;

    @ApiProperty({ example: 'Força +1', description: 'Atributos especifico do item' })
    @Column({ type: 'json', nullable: true })
    attributes: Record<string, any>;
}
