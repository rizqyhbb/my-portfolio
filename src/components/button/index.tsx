import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface IButton {
  children: ReactNode
}
const Button = ({ children }: IButton) => {
  return (
    <div className={styles.container}>
      <button>{children}</button>
    </div>
  )
}

export default Button