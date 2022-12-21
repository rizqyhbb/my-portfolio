import React, { ReactNode } from 'react'
import Footer from '../footer'
import Github from '../github'
import Navbar from '../navbar'

import styles from './Layout.module.css'


interface ILayout {
  children: ReactNode
  dark?: boolean
  footer?: boolean
  github?: boolean
}

const Layout = ({ children, dark, github = false, footer = true }: ILayout) => {
  return (
    <>
      <Navbar dark={dark} />
      <div>{children}</div>
      {github &&
        <div className={styles.github}>
          <Github />
        </div>
      }
      {footer &&
        <Footer />
      }
    </>
  )
}

export default Layout