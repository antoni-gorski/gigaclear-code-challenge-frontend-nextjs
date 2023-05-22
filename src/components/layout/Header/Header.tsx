import React from 'react';
import { Logo } from '@/atoms/Logo';
import styles from './Header.module.sass'
import Link from 'next/link';

export const Header: React.FC= () => {
  return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link href="/">
        <Logo type='core'/>
      </Link>
    </div>
  </header>
  )
}