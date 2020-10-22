import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
//import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

/**
 * Methode CRUD Utilisateurs.
 */
@Resolver()
export class UsersResolver {
  constructor(private readonly prismaService: PrismaService) { }

  /**
   * GET User.
   */
  @Query()
  async user(@Args() args, @Info() info) {
    return await this.prismaService.query.user(args, info);
  }

  /**
   * GET Users.
   */
  @Query()
  //@UseGuards(JwtAuthGuard)
  async users(@Args() args, @Info() info) {
    return await this.prismaService.query.users(args, info);
  }

  /**
   * CREATE User.
   */
  @Mutation()
  //@UseGuards(JwtAuthGuard)
  async createUser(@Args() args, @Info() info) {
    return await this.prismaService.mutation.createUser(args, info);
  }

  /**
   * UPDATE User.
   */
  @Mutation()
  //@UseGuards(JwtAuthGuard)
  async updateUser(@Args() args, @Info() info) {
    return await this.prismaService.mutation.updateUser(args, info);
  }
}
