import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { Article } from 'src/graphql';
import { imageUpload } from './article.utils';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwtauth.guard';

@Resolver()
export class ArticlesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('article')
  @UseGuards(JwtAuthGuard)
  async getArticle(@Args() args, @Info() info): Promise<Article> {
    return await this.prisma.query.article(args, info);
  }

  @Query('articles')
  @UseGuards(JwtAuthGuard)
  async getArticles(@Args() args, @Info() info): Promise<Article[]> {
    return await this.prisma.query.articles(args, info);
  }

  @Mutation('createArticle')
  @UseGuards(JwtAuthGuard)
  async createArticle(@Args() args, @Info() info): Promise<Article> {
    if (typeof args.data.picture !== 'undefined' || args.data.picture !== null) {
      const pictureUrl = await imageUpload(args.data.picture);
      delete args.picture;
      args.pictureUrl = pictureUrl;
    }
    return await this.prisma.mutation.createArticle(args, info);
  }

  @Mutation('updateArticle')
  @UseGuards(JwtAuthGuard)
  async updateArticle(@Args() args, @Info() info): Promise<Article> {
    return await this.prisma.mutation.updateArticle(args, info);
  }
}
