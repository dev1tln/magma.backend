import { PrismaService } from 'src/prisma/prisma.service';
import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { Article } from 'src/graphql';
import { imageUpload } from './article.utils';

@Resolver()
export class ArticlesResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('article')
  async getArticle(@Args() args, @Info() info): Promise<Article> {
    return await this.prisma.query.article(args, info);
  }

  @Query('articles')
  async getArticles(@Args() args, @Info() info): Promise<Article[]> {
    return await this.prisma.query.articles(args, info);
  }

  @Mutation('createArticle')
  async createArticle(@Args() args, @Info() info): Promise<Article> {
    if (typeof args.data.picture !== 'undefined' || args.data.picture !== null) {
      const pictureUrl = await imageUpload(args.data.picture);
      delete args.picture;
      args.pictureUrl = pictureUrl;
    }
    return await this.prisma.mutation.createArticle(args, info);
  }

  @Mutation('updateArticle')
  async updateArticle(@Args() args, @Info() info): Promise<Article> {
    return await this.prisma.mutation.updateArticle(args, info);
  }
}
