import React from 'react';
import styles from './GalleryArticle.module.sass'
import { Article } from 'src/types/article.type';
import { Tag } from '@/atoms/Tag';

export interface GalleryArticleProps {
  article: Article;
}

export const GalleryArticle: React.FC<GalleryArticleProps> = (props) => {
  const {article} = props;

  return <div className={styles.galleryArticle}>
    <div className={styles.backgroundImage} style={{backgroundImage: `url(${article.image})`}}/>
    <div className={styles.content}>
      <h2 className={styles.title}>{article.title}</h2>
      <div className={styles.tagsRow}>
        <Tag title={article.topic}/>
        <Tag title={article.user}/>
        <span className='flex'/>
        <Tag title={(new Date(article.timestamp)).toDateString()}/>
      </div>
      <p className={styles.description}>{article.description}</p>
    </div>
  </div>
}