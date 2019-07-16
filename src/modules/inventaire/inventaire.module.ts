import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InventairesResolver } from './inventaire.resolver';

@Module({
  imports: [PrismaModule],
  providers: [InventairesResolver],
})
export class InventaireModule { }
