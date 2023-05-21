import React, { ReactNode } from 'react';
import styles from './Gallery.module.sass'

export interface GalleryContentProps {
  children: ReactNode
}

export const Gallery: React.FC<GalleryContentProps> = ({children}) => {
  return <div className={styles.gallery}>{children}</div>
}