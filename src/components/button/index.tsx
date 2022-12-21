import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

interface IButton {
  children: ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: any
}
const Button = ({ children, onClick, type = "button" }: IButton) => {
  return (
    <div className={styles.container}>
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button