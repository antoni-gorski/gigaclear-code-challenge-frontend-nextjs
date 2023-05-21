import React from 'react';
import styles from './Tag.module.sass'

export interface TagProps {
  title: string;
}

export const Tag: React.FC<TagProps> = (props) => {
  const {title} = props;

  return <div className={styles.tag}>
    <span>{title}</span>
  </div>
}