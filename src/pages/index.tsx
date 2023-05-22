import { Gallery } from "src/components/layout/Gallery/Gallery";
import { Layout } from "../components/layout";
import { GalleryArticle } from "src/components/layout/Gallery/GalleryArticle/GalleryArticle";
import { useArticles } from "src/hooks/use-articles";
import styles from './index.module.sass'
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const articles = useArticles();

  const sortedArticles = useMemo(
    () => articles.sort((article1, article2) => {
      return article1.timestamp < article2.timestamp ? 1 : -1;
    }),
    [articles]
  );

  return (
    <Layout>
      <h1 className={styles.heading}>Check our latest posts</h1>

      <Gallery>
        {sortedArticles.map((article) => {
          return (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <GalleryArticle article={article}/>
            </Link>
          );
        })}
      </Gallery>
    </Layout>
  )
}
