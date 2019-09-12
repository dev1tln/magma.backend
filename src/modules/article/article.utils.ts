import { createWriteStream } from 'fs';
import { shortid } from 'shortid';
import { Article, ArticleEmbedded } from 'src/graphql';

/**
 * Methode pour achiver une photo côté serveur.
 * @param param
 */
function storeUpload({ stream, filename }): Promise<any> {
  const path = `images/${shortid.generate()}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ path }))
      .on('error', reject),
  );
}

/**
 * Service d'achivage de photo.
 * @param upload
 */
export const imageUpload = async upload => {
  const { stream, filename, mimetype, encoding } = await upload;
  const { path } = await storeUpload({ stream, filename });
  return path;
};

/**
 * Transforme un article (Document MongoDB) en SubDocument(MongoDB).
 * @param article
 */
export function castArticleToEmbeded(article) {
  let articleEmbedded = null;
  const { id, createdAt, ...articleInfo } = article;
  articleEmbedded = { article_id: article.id, ...articleInfo };
  return articleEmbedded;
}
