import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LocalisationsResolver } from './localisation.resolver';

@Module({
  imports: [PrismaModule],
  providers: [LocalisationsResolver],
})
export class LocalisationModule { }
