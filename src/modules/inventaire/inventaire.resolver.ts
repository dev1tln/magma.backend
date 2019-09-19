import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';
import { ArticleInventaireInput } from './dto/inventaire.input';
import { castArticleToEmbeded } from '../article/article.utils';

/**
 * Methode de CRUD des inventaires.
 */
@Resolver()
export class InventairesResolver {
  constructor(private readonly prismaService: PrismaService) { }

  /**
   * GET Inventaire.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async inventaire(@Args() args, @Info() info) {
    return await this.prismaService.query.inventaire(args, info);
  }

  /**
   * GET tableau d'inventaires.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async inventaires(@Args() args, @Info() info) {
    return await this.prismaService.query.inventaires(args, info);
  }

  /**
   * UPDATE Inventaire.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateInventaire(@Args() args, @Info() info) {
    return await this.prismaService.mutation.updateInventaire(args, info);
  }

  /**
   * CREATE Inventaire.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async createInventaire(@Args() args, @Info() info) {
    return await this.prismaService.mutation.createInventaire(args, info);
  }

  /**
   * Ajouter un article (Subdocument) dans un inventaire.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async ajouterArticle(@Args('data') { article, detention }: ArticleInventaireInput) {

    // je recupere le dernier inventaire et ses articles
    const inventaires = await this.prismaService.prisma.detention({
      id: detention,
    }).inventaires();

    const lastInventaire = inventaires.reduce((last, item) => last.dtecre > item.dtecre ? last : item);

    const articles = await this.prismaService.prisma.inventaire({
      id: lastInventaire.id,
    }).articles();


    // on recherche les info de l'article ajouté et on le cast en subdocument
    const articleScanne = await this.prismaService.prisma.article({
      id: article,
    });

    const articleEmbedded = castArticleToEmbeded(articleScanne);

    // controle si id existe
    if (articles.some(item => item.article_id === articleEmbedded.article_id)) {
      throw new Error('Article en doublon');
    }

    // on met à jour l'inventaire
    await this.prismaService.prisma.updateInventaire({
      where: { id: lastInventaire.id },
      data: {
        articles: {
          create: { ...articleEmbedded, detention: { connect: { id: detention } } },
        },
      },
    });
    return articleEmbedded;
  }
}
