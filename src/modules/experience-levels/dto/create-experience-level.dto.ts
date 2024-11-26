import { ApiProperty } from "@nestjs/swagger";

export class CreateExperienceLevelDto {
    @ApiProperty({ example: 1, description: 'Indicador do level' })
    level: number;

    maxExperience: number;
}
