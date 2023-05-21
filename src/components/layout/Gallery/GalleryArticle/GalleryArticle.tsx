import React, { ReactNode } from 'react';
import styles from './GalleryArticle.module.sass'
import { Article } from 'src/types/article.type';

export interface GalleryArticleProps {
  article: Article;
}

export const GalleryArticle: React.FC<GalleryArticleProps> = (props) => {
  const {article} = props;

  return <div className={styles.galleryArticle}>
    <h2>{article.title}</h2>
  </div>
}