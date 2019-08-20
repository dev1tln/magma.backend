import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { Unite } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

@Resolver()
export class UnitesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('unite')
  @UseGuards(JwtAuthGuard)
  async getUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.query.unite(args, info);
  }

  @Query('unites')
  @UseGuards(JwtAuthGuard)
  async getUnites(@Args() args, @Info() info): Promise<Unite[]> {
    return await this.prisma.query.unites(args, info);
  }

  @Mutation('createUnite')
  @UseGuards(JwtAuthGuard)
  async createUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.mutation.createUnite(args, info);
  }

  @Mutation('updateUnite')
  @UseGuards(JwtAuthGuard)
  async updateUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.mutation.updateUnite(args, info);
  }
}
