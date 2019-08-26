import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { User } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

@Resolver()
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Query('users')
  @UseGuards(JwtAuthGuard)
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Mutation('createUser')
  @UseGuards(JwtAuthGuard)
  async createUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.createUser(args, info);
  }

  @Mutation('updateUser')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.updateUser(args, info);
  }
}
