import Head from 'next/head'
import Image from 'next/image'
import { Github } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.blocker}></div>
        <h1 className={styles.title}>Rizqy Fadhilah</h1>
        <br />
        <p className={styles.subTitle}>FRONTEND WEB DEVELOPER</p>
      </div>
      <div className={styles.image}>
        <Image alt='character' src="/char.png" width={281} height={410} />
      </div>
      <div className={styles.github}>
        <Github />
      </div>
    </div>
  )
}
