import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: false,
    });
  }
}
