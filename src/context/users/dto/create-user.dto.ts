import { UserRole } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Nome Sobrenome',
    })
    name: string;

    @ApiProperty({
        description: 'Email do usuário',
        example: 'exemplo@email.com',
    })
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'senhaSegura123',
    })
    password: string;

    @ApiProperty({
        description: 'Tipo de usuário',
        enum: UserRole,
        example: UserRole.USER,
    })
    type: UserRole;
}
