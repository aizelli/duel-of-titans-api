import { ApiProperty } from "@nestjs/swagger";
import { typeItemName } from "../entities/item.entity";

export class CreateItemDto {
    @ApiProperty({ example: 1, description: 'nome do Item' })
    name: string;

    @ApiProperty({ description: 'Tipo de item', enum: typeItemName, example: typeItemName.CONSUMABLE })
    type: typeItemName;

    @ApiProperty({ example: 1, description: 'Quantidade máxima do item' })
    maxStack: number;

    @ApiProperty({ example: 'Força +1', description: 'Atributos especifico do item' })
    attributes: Record<string, any>;
}
