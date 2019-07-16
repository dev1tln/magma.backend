import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  const unite = await prisma.mutation.createUnite({
    data: {
      cdeunt: '45299',
      libunt: 'GSBDD Toulon-Antenne Lamalgue',
      typuni: 'Autre Client Toulon',
    },
  });

  const inventaire = await prisma.mutation.createInventaire({
    data: {
      lib: 'Inventaire 1',
      unite: {
        connect: {
          id: unite.id,
        },
      },
    },
  });

  const localisation = await prisma.mutation.createLocalisation({
    data: {
      lib: '7111',
      unite: {
        connect: {
          id: unite.id,
        },
      },
    },
  });

  // ARTICLE 1
  const article1 = await prisma.mutation.createArticle({
    data: {
      nno: '7110 BC 010 0804',
      lib: 'Armoire basse',
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      localisation: {
        connect: {
          id: localisation.id,
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
          cdeapr: article1.cdeapr,
          srvpou: article1.srvpou,
          typart: article1.typart,
          localisation: {
            connect: {
              id: localisation.id,
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
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      localisation: {
        connect: {
          id: localisation.id,
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
          cdeapr: article2.cdeapr,
          srvpou: article2.srvpou,
          typart: article2.typart,
          localisation: {
            connect: {
              id: localisation.id,
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
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      localisation: {
        connect: {
          id: localisation.id,
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
          cdeapr: article3.cdeapr,
          srvpou: article3.srvpou,
          typart: article3.typart,
          localisation: {
            connect: {
              id: localisation.id,
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
      cdeapr: 'Civil',
      srvpou: 'SCA Commun',
      typart: 'Consommable HN',
      localisation: {
        connect: {
          id: localisation.id,
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
          nno: article4.nno,
          lib: article4.lib,
          cdeapr: article4.cdeapr,
          srvpou: article4.srvpou,
          typart: article4.typart,
          localisation: {
            connect: {
              id: localisation.id,
            },
          },
        },
      },
    },
  });

}
main().catch(e => console.error(e));
