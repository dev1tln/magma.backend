import { AuthService } from './auth.service';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput } from './dto/login.input';

/**
 * Methodes d'authentification à l'API.
 */
@Resolver()
export class AuthResolver {
  constructor(private readonly auth: AuthService, private prismaService: PrismaService) { }

  /**
   * Methode pour se loger sur le webservice.
   * @param param username + password
   */
  @Mutation()
  async login(@Args('data') { username, password }: LoginInput) {

    const user = await this.prismaService.query.user({
      where: {
        identifiant: username,
      }
    });

    if (!user || user.password !== password) {
      throw new Error(`Aucun utilisateur avec l'identifiant: ${username}`);
    }
    return await this.auth.login(user);
  }
}
