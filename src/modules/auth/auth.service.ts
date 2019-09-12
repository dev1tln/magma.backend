import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  /**
   * Genere un token JWT
   * @param user
   */
  async login(user: any) {
    const payload = { username: user.identifiant, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
