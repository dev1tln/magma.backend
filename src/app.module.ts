import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './modules/article/article.module';
import { InventaireModule } from './modules/inventaire/inventaire.module';
import { DetentionModule } from './modules/detention/detention.module';
import { UniteModule } from './modules/unite/unite.module';
import { UserModule } from './modules/user/user.module';
import { importSchema } from 'graphql-import';
import { AuthModule } from './modules/auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      typeDefs: importSchema('./src/schema.graphql'),
      context: ({ req }) => ({ req }),
      debug: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      uploads: {
        maxFileSize: 3000000, // 10 MB
        maxFiles: 1,
      },
    }),
    PrismaModule,
    ArticleModule,
    InventaireModule,
    DetentionModule,
    UniteModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }
