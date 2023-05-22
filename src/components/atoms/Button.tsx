import React from 'react';
import styles from './Button.module.sass'

export interface ButtonProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {title} = props;

  return <button className={styles.button}>{title}</button>
}