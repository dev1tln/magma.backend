import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { Unite } from 'src/graphql';

@Resolver()
export class UnitesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('unite')
  async getUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.query.unite(args, info);
  }

  @Query('unites')
  async getUnites(@Args() args, @Info() info): Promise<Unite[]> {
    return await this.prisma.query.unites(args, info);
  }

  @Mutation('createUnite')
  async createUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.mutation.createUnite(args, info);
  }

  @Mutation('updateUnite')
  async updateUnite(@Args() args, @Info() info): Promise<Unite> {
    return await this.prisma.mutation.updateUnite(args, info);
  }
}
