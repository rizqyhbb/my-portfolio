import Link from 'next/link'
import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>
          Let{`'`}s create something awesome together
        </p>
        <Link href="/contact" className={styles.link}>
          <div className={styles.circle}>
            <p>Contact me</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer