import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {

  constructor() {
    const endpoint = process.env.PRISMA_ENDPOINT;
    console.log(`Your endpoint is ${endpoint}`); // undefined
    // il faut ajouter dotenv le 22/07/2019
    const dotenv = require('dotenv');
    dotenv.config();
    console.log(`Your endpoint is ${process.env.PRISMA_ENDPOINT}`); // affiche endpoint
    super({
<<<<<<< HEAD
      endpoint: 'http://192.168.99.100:4466',
=======
      endpoint: process.env.PRISMA_ENDPOINT,
>>>>>>> 333101b5671049c73ad5c070f7aeb299069cee66
      debug: false,
    });
  }
}
