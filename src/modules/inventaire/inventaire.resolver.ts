import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { Inventaire } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

@Resolver()
export class InventairesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('inventaire')
  @UseGuards(JwtAuthGuard)
  async getInventaire(@Args() args, @Info() info): Promise<Inventaire> {
    return await this.prisma.query.inventaire(args, info);
  }

  @Query('inventaires')
  @UseGuards(JwtAuthGuard)
  async getInventaires(@Args() args, @Info() info): Promise<Inventaire[]> {
    return await this.prisma.query.inventaires(args, info);
  }

  @Mutation('updateInventaire')
  @UseGuards(JwtAuthGuard)
  async updateInventaire(@Args() args, @Info() info): Promise<Inventaire> {
    return await this.prisma.mutation.updateInventaire(args, info);
  }

  @Subscription('inventaire')
  @UseGuards(JwtAuthGuard)
  onInventaireMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.inventaire(args, info);
  }
}
