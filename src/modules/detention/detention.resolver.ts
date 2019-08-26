import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';
import { Detention } from 'src/prisma/prisma.binding';

@Resolver()
export class DetentionResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('detention')
  async getLocalisation(@Args() args, @Info() info): Promise<Detention> {
    return await this.prisma.query.detention(args, info);
  }

  @Query('detentions')
  async getLocalisations(@Args() args, @Info() info): Promise<Detention[]> {
    return await this.prisma.query.detentions(args, info);
  }

  @Mutation('createDetention')
  async createDetention(@Args() args, @Info() info): Promise<Detention> {
    return await this.prisma.mutation.createDetention(args, info);
  }

  @Mutation('updateDetention')
  async updateDetention(@Args() args, @Info() info): Promise<Detention> {
    return await this.prisma.mutation.updateDetention(args, info);
  }
}
