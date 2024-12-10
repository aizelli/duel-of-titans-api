import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclui a senha antes de retornar o usuário
      return result;
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }

  async login(user: any) {
    const payload = { name: user.name, email: user.email, id: user.id, role: user.type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
