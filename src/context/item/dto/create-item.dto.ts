import { ApiProperty } from "@nestjs/swagger";
import { typeItemName } from "../entities/item.entity";

export class CreateItemDto {
    @ApiProperty({ example: 'Poção de vida', description: 'Nome do Item' })
    name: string;

    @ApiProperty({ description: 'Tipo de item', enum: typeItemName, example: typeItemName.CONSUMABLE })
    type: typeItemName;

    @ApiProperty({ example: 99, description: 'Quantidade máxima do item' })
    maxStack: number;

    @ApiProperty({ example: 5, description: 'Valor padão de venda do item' })
    priceToSell: number;

    @ApiProperty({ example: '{"Vida": 5}', description: 'Atributos especifico do item' })
    attributes: Record<string, any>;
}
