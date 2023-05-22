import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import styles from './[id].module.sass'
import { useArticle } from "src/hooks/use-article";
import ReactMarkdown from 'react-markdown'

export default function Article() {
  const router = useRouter();
  const articleId = Number(router.query.id);
  const article = useArticle(articleId);
  const date = article && (new Date(article.timestamp));

  return (
    <Layout>
      {article ? <>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.description}>{article.description}</p>
        <p className={styles.dateTop}>{date?.toDateString()}</p>
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${article.image})`}}/>
        <div className={styles.imageBar}>
          <div>
            <div>
              <p className={styles.location}>{article.location}</p>
            </div>
            <div>
              <p className={styles.price}>{article.price}</p>
              <p className={styles.dateBottom}>{date?.toLocaleTimeString()} | {date?.toDateString()}</p>
            </div>
          </div>
          <div>
            <button className={styles.signUpButton}>Sign up to this event</button>
          </div>
        </div>
        <div className={styles.content}>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </> : <>
        <h1>There is no article like that</h1>
      </>}
    </Layout>
  )
}
