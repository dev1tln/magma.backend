import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';

/**
 * Methode de CRUD pour les unites
 */
@Resolver()
export class UnitesResolver {
  constructor(private readonly prismaService: PrismaService) { }

  /**
   * GET Unite.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async unite(@Args() args, @Info() info) {
    return await this.prismaService.query.unite(args, info);
  }

  /**
   * GET tableau d'unité.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async unites(@Args() args, @Info() info) {
    return await this.prismaService.query.unites(args, info);
  }

  /**
   * CREATE Unite.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async createUnite(@Args() args, @Info() info) {
    return await this.prismaService.mutation.createUnite(args, info);
  }

  /**
   * UPDATE Unite.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateUnite(@Args() args, @Info() info) {
    return await this.prismaService.mutation.updateUnite(args, info);
  }
}
