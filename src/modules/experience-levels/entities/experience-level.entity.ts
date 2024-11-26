import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ExperienceLevel {
    @ApiProperty({ example: 1, description: 'ID único do nível de experiencia' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ example: 1, description: 'Indicador do level' })
    @Column('integer')
    level: number;

    @ApiProperty({ example: 1, description: 'Indicador do level' })
    @Column('integer')
    maxExperience: number;
}
