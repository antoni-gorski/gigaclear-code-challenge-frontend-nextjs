import { Gallery } from "src/components/layout/Gallery/Gallery";
import { Layout } from "../components/layout";
import { GalleryArticle } from "src/components/layout/Gallery/GalleryArticle/GalleryArticle";

export default function Home() {
  const articles = getArticles();

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
