import { Article } from 'src/types/article.type';
import articlesJSON from './../../mock-data/articles.mock.json';
import { useEffect, useState } from 'react';

export const useArticle = (id: number):Article | null => {
  let [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    (async function() {
      setArticle(articlesJSON.find(article => article.id === id) ?? null);
    })();
  }, [id]);

  return article;
}