import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Layout, Title } from '../components';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>rizqyhbb | HOME</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <Title title={<span>Rizqy<br />Fadhilah</span>} subtitle='FRONTEND WEB DEVELOPER' />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image alt='character' src="/char.png" quality={100} fill/>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout github={true} footer={false}>
      {page}
    </Layout>
  );
};

export default Home;
