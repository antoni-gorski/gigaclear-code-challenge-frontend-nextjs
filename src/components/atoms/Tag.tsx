import React from 'react';
import styles from './Tag.module.sass'

export interface TagProps {
  title: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = (props) => {
  const {title, className} = props;

  return <div className={`${styles.tag} ${className}`}>
    <span>{title}</span>
  </div>
}