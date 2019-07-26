import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './modules/article/article.module';
import { InventaireModule } from './modules/inventaire/inventaire.module';
import { LocalisationModule } from './modules/localisation/localisation.module';
import { UniteModule } from './modules/unite/unite.module';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';
import { importSchema } from 'graphql-import';


@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      typeDefs: importSchema('./src/schema.graphql'),
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
    LocalisationModule,
    UniteModule,
    UserModule
  ],
})
export class AppModule { }
