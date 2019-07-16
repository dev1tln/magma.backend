import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesResolver } from './article.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ArticlesResolver],
})
export class ArticleModule { }
