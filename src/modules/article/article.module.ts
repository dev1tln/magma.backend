import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesResolver } from './article.resolver';
import { PhotoController } from './photo.controler';

@Module({
  imports: [PrismaModule],
  controllers: [PhotoController],
  providers: [ArticlesResolver],
})
export class ArticleModule { }
