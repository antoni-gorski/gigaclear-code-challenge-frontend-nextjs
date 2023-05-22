import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import styles from './[id].module.sass'
import { useArticle } from "src/hooks/use-article";

export default function Article() {
  const router = useRouter();
  const articleId = Number(router.query.id);
  const article = useArticle(articleId);
  const date = article && (new Date(article.timestamp));

  return (
    <Layout>
      {article ? <>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <p>{date?.toDateString()}</p>
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${article.image})`}}/>
        <div className={styles.imageBar}>
          <div className={styles.left}>
            <div className={styles.top}>
              <p>{article.location}</p>
            </div>
            <div className={styles.bottom}>
              <p>{article.price}</p>
              <p>{date?.toLocaleTimeString()} | {date?.toDateString()}</p>
            </div>
          </div>
          <div className={styles.right}>
            <button>Sign up to this event</button>
          </div>
        </div>
        <div className={styles.content}>
          TODO: Content with MD
        </div>
      </> : <>
        <h1>There is no article like that</h1>
      </>}
    </Layout>
  )
}
