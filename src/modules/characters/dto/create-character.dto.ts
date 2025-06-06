import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/modules/users/entities/user.entity";

export class CreateCharacterDto {
    @ApiProperty({ example: 'Home-Aranha', description: 'Nome do personagem' })
    name: string;

    // @ApiProperty({ example: 1, description: 'ID único do Imagem' })
    // imagem_id: number;

    // @ApiProperty({ example: 1, description: 'Level do personagem' })
    // level: number;

    // @ApiProperty({ example: 0, description: 'Total de experiencia do personagem' })
    // experience: number;

    // @ApiProperty({ example: 0, description: 'Total de pontos de experiência para o próximo level do personagem' })
    // experienceNextLevel: number;

    // @ApiProperty({ example: 3, description: 'Quantidade disponível de pontos de atributos' })
    // availableAttributePoints: number;

    // @ApiProperty({ example: 0, description: 'Total geral de pontos de atributos do personagem' })
    // totalAttributePoints: number;

    // @ApiProperty({ example: 100, description: 'Total de moedas do personagem' })
    // coins: number;

    // @ApiProperty({ example: new Date(), description: 'Data de criação do personagem' })
    // createAt: Date;

    // @ApiProperty({ example: new Date(), description: 'Data de atualização do personagem' })
    // updateAt: Date;

    @ApiProperty({ example: 1, description: 'Lista de IDs dos usuários associados ao personagem' })
    user: User;
}
