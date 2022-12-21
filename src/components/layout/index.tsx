import React, { ReactNode } from 'react'
import Github from '../github'
import Navbar from '../navbar'

import styles from './Layout.module.css'


interface ILayout {
  children: ReactNode,
  dark?: boolean,
  github?: boolean
}

const Layout = ({ children, dark, github = false }: ILayout) => {
  return (
    <>
      <Navbar dark={dark} />
      <div>{children}</div>
      {github &&
        <div className={styles.github}>
          <Github />
        </div>
      }
    </>
  )
}

export default Layout