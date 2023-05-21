import React, { ReactNode } from 'react';
import styles from './Gallery.module.sass'

export interface GalleryProps {
  children: ReactNode
}

export const Gallery: React.FC<GalleryProps> = ({children}) => {
  return <div className={styles.gallery}>{children}</div>
}