import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { User } from 'src/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('user')
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Query('users')
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Mutation('createUser')
  async createUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.createUser(args, info);
  }

  @Mutation('updateUser')
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.updateUser(args, info);
  }
}
