import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';
import { ArticleInventaireInput } from './dto/inventaire.input';
import { castArticleToEmbeded } from '../article/article.utils';
import { ArticleEmbedded } from 'src/graphql';

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
   * Ajouter un article (Subdocument) dans un inventaire.
   */
  @Mutation()
  async ajouterArticle(@Args('data') { articleId, inventaireId }: ArticleInventaireInput) {

    // // je recupere mes articles de mon inventaire
    const articles = await this.prismaService.prisma.inventaire({
      id: inventaireId,
    }).articles();

    const article = await this.prismaService.prisma.article({
      id: articleId,
    });

    const detention = await this.prismaService.prisma.article({
      id: articleId,
    }).detention();

    // on cast l'objet en article (subdocument)
    const articleEmbedded = castArticleToEmbeded(article);

    // controle si id existe
    if (articles.some(item => item.article_id === articleEmbedded.article_id)) {
      throw new Error('Article en doublon');
    }

    // on met à jour l'inventaire
    await this.prismaService.prisma.updateInventaire({
      where: { id: inventaireId },
      data: {
        articles: {
          create: { ...articleEmbedded, detention: { connect: { id: detention.id } } },
        },
      },
    });
    return articleEmbedded;
  }
}
