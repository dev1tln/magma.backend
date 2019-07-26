import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { Localisation } from 'src/graphql';

@Resolver()
export class LocalisationsResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('localisation')
  async getLocalisation(@Args() args, @Info() info): Promise<Localisation> {
    return await this.prisma.query.localisation(args, info);
  }

  @Query('localisations')
  async getLocalisations(@Args() args, @Info() info): Promise<Localisation[]> {
    return await this.prisma.query.localisations(args, info);
  }

  @Mutation('createLocalisation')
  async createLocalisation(@Args() args, @Info() info): Promise<Localisation> {
    return await this.prisma.mutation.createLocalisation(args, info);
  }

  @Mutation('updateLocalisation')
  async updateLocalisation(@Args() args, @Info() info): Promise<Localisation> {
    return await this.prisma.mutation.updateLocalisation(args, info);
  }
}
