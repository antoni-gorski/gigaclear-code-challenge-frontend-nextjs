import { Gallery } from "src/components/layout/Gallery/Gallery";
import { Layout } from "../components/layout";
import { GalleryArticle } from "src/components/layout/Gallery/GalleryArticle/GalleryArticle";
import { useArticles } from "src/hooks/use-articles";

export default function Home() {
  const articles = useArticles();

  return (
    <Layout>
      <h1>Check our latest posts</h1>

      <Gallery>
        {articles.map((article) => {
          return (
            <GalleryArticle key={article.id} article={article}/>
          );
        })}
      </Gallery>
    </Layout>
  )
}
