import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UnitesResolver } from './unite.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UnitesResolver],
})
export class UniteModule { }
