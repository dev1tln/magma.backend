import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DetentionResolver } from './detention.resolver';

@Module({
  imports: [PrismaModule],
  providers: [DetentionResolver],
})
export class DetentionModule { }
