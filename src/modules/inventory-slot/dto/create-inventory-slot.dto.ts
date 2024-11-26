import { ApiProperty } from "@nestjs/swagger";

export class CreateInventorySlotDto {
    @ApiProperty({ example: 1, description: 'Quantidade do item no slot do inventário' })
    quantity: number;

    @ApiProperty({ example: 1, description: 'ID do personagem associado' })
    charactersId: number;

}
