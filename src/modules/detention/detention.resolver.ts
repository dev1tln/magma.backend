import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

/**
 * Méthode de CRUD pour gerer les détentions.
 */
@Resolver()
export class DetentionResolver {
  constructor(private readonly prismaService: PrismaService) { }

  /**
   * GET Detention.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async detention(@Args() args, @Info() info) {
    return await this.prismaService.query.detention(args, info);
  }

  /**
   * GET tableau de détentions.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async detentions(@Args() args, @Info() info) {
    return await this.prismaService.query.detentions(args, info);
  }

  /**
   * CREATE Détention.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async createDetention(@Args() args, @Info() info) {
    return await this.prismaService.mutation.createDetention(args, info);
  }

  /**
   * UPDATE Détention
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateDetention(@Args() args, @Info() info) {
    return await this.prismaService.mutation.updateDetention(args, info);
  }
}
