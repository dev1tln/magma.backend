import { PrismaService } from '../src/prisma/prisma.service';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaService();

async function main() {
  const unite = await prisma.mutation.createUnite({
    data: {
      cdeunt: '45299',
      libunt: 'GSBDD Toulon-Antenne Lamalgue',
      typuni: 'Autre Client Toulon',
    },
  });

  await prisma.mutation.createUnite({
    data: {
      cdeunt: '45230',
      libunt: 'GSBDD Rennes',
      typuni: 'Ecole des Transmissions',
    },
  });

  await prisma.mutation.createUser({
    data: {
      nom: process.env.NOM,
      prenom: process.env.PRENOM,
      identifiant: `${process.env.PRENOM}.${process.env.NOM}`,
      password: process.env.PASSWORD,
      role: 'UTI',
      unites: {
        connect: [{ id: unite.id }],
      },
    },
  });

  const detention = await prisma.mutation.createDetention({
    data: {
      lib: '7111',
      unite: {
        connect: {
          id: unite.id,
        },
      },
    },
  });



  const inventaire = await prisma.mutation.createInventaire({
    data: {
      lib: 'Inventaire 1',
      dtever: new Date().toISOString().toString(),
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  const inventaire2 = await prisma.mutation.createInventaire({
    data: {
      lib: 'Inventaire 2',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  // ARTICLE 1
  const article1 = await prisma.mutation.createArticle({
    data: {
      nno: '7110 BC 010 0804',
      lib: 'Armoire basse',
      numref: 'ARM00001',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      pictureUrl: 'http://localhost:3000/photo/ARM.jpg',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  await prisma.mutation.updateInventaire({
    where: { id: inventaire.id },
    data: {
      articles: {
        create: {
          article_id: article1.id,
          nno: article1.nno,
          lib: article1.lib,
          numref: article1.numref,
          cdeapr: article1.cdeapr,
          srvpou: article1.srvpou,
          typart: article1.typart,
          pictureUrl: article1.pictureUrl,
          detention: {
            connect: {
              id: detention.id,
            },
          },
        },
      },
    },
  });

  // ARTICLE 2
  const article2 = await prisma.mutation.createArticle({
    data: {
      nno: '7110 BC 010 0804',
      lib: 'Armoire basse',
      numref: 'ARM00002',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  await prisma.mutation.updateInventaire({
    where: { id: inventaire.id },
    data: {
      articles: {
        create: {
          article_id: article2.id,
          nno: article2.nno,
          lib: article2.lib,
          numref: article2.numref,
          cdeapr: article2.cdeapr,
          srvpou: article2.srvpou,
          typart: article2.typart,
          detention: {
            connect: {
              id: detention.id,
            },
          },
        },
      },
    },
  });

  // ARTICLE 3
  const article3 = await prisma.mutation.createArticle({
    data: {
      nno: 'CAME HN008 0585',
      lib: 'Coffre Haut',
      numref: 'COF00001',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  await prisma.mutation.updateInventaire({
    where: { id: inventaire.id },
    data: {
      articles: {
        create: {
          article_id: article3.id,
          nno: article3.nno,
          lib: article3.lib,
          numref: article3.numref,
          cdeapr: article3.cdeapr,
          srvpou: article3.srvpou,
          typart: article3.typart,
          detention: {
            connect: {
              id: detention.id,
            },
          },
        },
      },
    },
  });

  // ARTICLE 4
  const article4 = await prisma.mutation.createArticle({
    data: {
      nno: '7110 BC 010 0603',
      lib: 'Bureau usage courant',
      numref: 'BUR00001',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  await prisma.mutation.updateInventaire({
    where: { id: inventaire.id },
    data: {
      articles: {
        create: {
          article_id: article4.id,
          nno: article4.nno,
          lib: article4.lib,
          numref: article4.numref,
          cdeapr: article4.cdeapr,
          srvpou: article4.srvpou,
          typart: article4.typart,
          detention: {
            connect: {
              id: detention.id,
            },
          },
        },
      },
    },
  });

  const article5 = await prisma.mutation.createArticle({
    data: {
      nno: '8054 CA 010 0071',
      lib: 'Ordinateur',
      numref: 'ORD00001',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      detention: {
        connect: {
          id: detention.id,
        },
      },
    },
  });

  await prisma.mutation.updateInventaire({
    where: { id: inventaire2.id },
    data: {
      articles: {
        create: {
          article_id: article5.id,
          nno: article5.nno,
          lib: article5.lib,
          numref: article5.numref,
          cdeapr: article5.cdeapr,
          srvpou: article5.srvpou,
          typart: article5.typart,
          detention: {
            connect: {
              id: detention.id,
            },
          },
        },
      },
    },
  });

}
main().catch(e => console.error(e));
