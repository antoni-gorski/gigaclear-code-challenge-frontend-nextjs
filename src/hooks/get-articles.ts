import { Article } from 'src/types/article.type';
import * as articles from './../../mock-data/articles.mock.json';

export const getArticles = async ():Promise<Article[]> => {
  return articles;
}