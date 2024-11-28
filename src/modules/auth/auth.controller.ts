import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Auth') // Agrupa os endpoints no Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({
    description: 'Dados de login',
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
    },
  })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  @ApiBearerAuth() // Indica que o token JWT é necessário
  getProfile(@Request() req) {
    return req.user;
  }
}
