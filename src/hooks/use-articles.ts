import { Article } from 'src/types/article.type';
import articlesJSON from './../../mock-data/articles.mock.json';
import { useEffect, useState } from 'react';

export const useArticles = ():Article[] => {
  let [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async function() {
      setArticles(articlesJSON);
    })();
  }, []);

  return articles;
}