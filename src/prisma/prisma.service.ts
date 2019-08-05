import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    require('dotenv').config();
    super({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: false,
    });
  }
}
