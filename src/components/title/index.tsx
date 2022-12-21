import React from 'react'
import styles from "./Title.module.css"

interface ITitle {
  title: string
  subtitle?: string
  dark?: boolean
}
const Title = ({ title, subtitle, dark }: ITitle) => {
  return (
    <div className={`${styles.bannerContainer} ${dark && styles.dark}`}>
      <div className={styles.blocker}></div>
      <h1 className={styles.title}>{title}</h1>
      <br />
      {subtitle &&
        <p className={styles.subTitle}>{subtitle}</p>
      }
    </div>
  )
}

export default Title