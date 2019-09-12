import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { Prisma as PrismaClient } from './prisma-client';

import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class PrismaService extends Prisma {
  //temporaire
  prisma: PrismaClient;

  constructor() {
    super({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: false,
    },
    );

    // Tenporaire
    this.prisma = new PrismaClient({
      endpoint: process.env.PRISMA_ENDPOINT,
    });
  }
}
