import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/context/users/entities/user.entity";

export class CreateCharacterDto {
    @ApiProperty({ example: 'Home-Aranha', description: 'Nome do personagem' })
    name: string;

    @ApiProperty({ example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...', description: 'Imagem do personagem (base64 ou URL)', })
    imagem: string;

    @ApiProperty({ example: 1, description: 'Level do personagem' })
    level: number;

    @ApiProperty({ example: 1, description: 'Total de experiencia do personagem' })
    experience: number;

    @ApiProperty({ example: 100, description: 'Total de moedas do personagem' })
    coins: number;

    // @ApiProperty({ type: () => [User], description: 'Lista de usuários associados ao personagem' })
    // users: User[];
    @ApiProperty({ type: [Number], description: 'Lista de IDs dos usuários associados ao personagem' })
    users: number[];
}
