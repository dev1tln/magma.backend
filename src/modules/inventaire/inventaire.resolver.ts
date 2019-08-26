import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { Inventaire } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

@Resolver()
export class InventairesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('inventaire')
  async getInventaire(@Args() args, @Info() info): Promise<Inventaire> {
    return await this.prisma.query.inventaire(args, info);
  }

  @Query('inventaires')
  async getInventaires(@Args() args, @Info() info): Promise<Inventaire[]> {
    return await this.prisma.query.inventaires(args, info);
  }

  @Mutation('updateInventaire')
  async updateInventaire(@Args() args, @Info() info): Promise<Inventaire> {
    return await this.prisma.mutation.updateInventaire(args, info);
  }

  @Subscription('inventaire')
  onInventaireMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.inventaire(args, info);
  }
}
