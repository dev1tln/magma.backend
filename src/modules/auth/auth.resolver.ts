import { AuthService } from './auth.service';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly auth: AuthService, private prisma: PrismaService) { }

  @Mutation('login')
  async login(@Args('data') { username, password }: LoginInput) {

    const user = await this.prisma.query.user({
      where: {
        identifiant: username,
      },
    });

    if (!user || user.password !== password) {
      throw new Error(`Aucun utilisateur avec l'identifiant: ${username}`);
    }

    return await this.auth.login(user);
  }
}
