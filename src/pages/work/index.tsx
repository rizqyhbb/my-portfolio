import React, { ReactElement } from 'react';
import {
  Layout, ProjectLink, Title
} from '../../components';
import { NextPageWithLayout } from '../_app';

import styles from '../../styles/Work.module.css';
import Head from 'next/head';
import { WORKS } from '../../utils/const';
import { useRouter } from 'next/router';

const Work: NextPageWithLayout = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>rizqyhbb | WORK</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.workContainer}>
        <div>
          <Title title='Work.' dark={true} />
        </div>
        <div className={styles.linkContainer}>
          {WORKS.map((work, idx) =>
            <ProjectLink
              key={idx}
              title={work.title.toUpperCase()}
              description={work.description.toUpperCase()}
              about={work.about} href={`${pathname}/${work.title.replace(' ', '-')}`} />)}
        </div>
      </div>
    </div>
  );
};

Work.getLayout = function getLayout (page: ReactElement) {
  return <Layout dark={true} github={true}>{page}</Layout>;
};
export default Work;
