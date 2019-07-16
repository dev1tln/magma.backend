import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver],
})
export class UserModule { }
