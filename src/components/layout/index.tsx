import React, { ReactNode } from "react"
import { Main } from "./Main"
import { Header } from "./Header"
import styles from './index.module.sass'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <div className={styles.background} style={{backgroundImage: 'url("assets/Vector 65.png")'}}>
        <Main>
          {children}
        </Main>
      </div>
    </>
  )
}