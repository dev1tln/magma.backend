import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Mutation, Info } from '@nestjs/graphql';
import { Article } from 'src/graphql';
import { imageUpload } from './article.utils';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwtauth.guard';

/**
 * Genere les methodes de CRUD propre aux articles
 */
@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly prismaService: PrismaService) { }

  /**
   * GET Article.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async article(@Args() args, @Info() info) {
    return await this.prismaService.query.article(args, info);
  }

  /**
   * GET tableau d'articles.
   */
  @Query()
  @UseGuards(JwtAuthGuard)
  async articles(@Args() args, @Info() info) {
    return await this.prismaService.query.articles(args);
  }

  /**
   * CREATE Article.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async createArticle(@Args() args, @Info() info) {
    if (typeof args.data.picture !== 'undefined' || args.data.picture !== null) {
      const pictureUrl = await imageUpload(args.data.picture);
      delete args.data.picture;
      args.data.pictureUrl = pictureUrl;
    }
    return await this.prismaService.mutation.createArticle(args, info);
  }

  /**
   * UPDATE Article.
   */
  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateArticle(@Args() args, @Info() info) {
    return await this.prismaService.mutation.updateArticle(args, info);
  }
}
