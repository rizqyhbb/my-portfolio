import { GetStaticPaths, GetStaticProps } from 'next';
import React, { Fragment, ReactElement } from 'react';
import { IWork, WORKS } from '../../utils/const';
import { Layout, Title } from '../../components';
import styles from '../../styles/WorkDetail.module.css';
import {
  SiAntdesign,
  SiExpress, SiMarkdown, SiNextdotjs, SiOpenai, SiPostgresql, SiRedux, SiRemix, SiSequelize, SiStyledcomponents, SiSupabase, SiTailwindcss, SiVercel
} from 'react-icons/si';
import { FaFly } from 'react-icons/fa';
import Head from 'next/head';
import MediaPreview from '../../components/work/MediaPreview';
import Link from 'next/link';

type IconType = Record<string, any>

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = WORKS.map(work => ({
    params: {
      slug: work.title.replace(' ', '-')
    }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = WORKS.find(work => work.title.replace(' ', '-') === params?.slug);
  return {
    props: {
      work
    }
  };
};

const icons: IconType = {
  nextJs: <SiNextdotjs size={24} />,
  tailwind: <SiTailwindcss size={24} />,
  remix: <SiRemix size={24} />,
  postgres: <SiPostgresql size={24} />,
  openAi: <SiOpenai size={24} />,
  supabase: <SiSupabase size={24} />,
  vercel: <SiVercel size={24} />,
  express: <SiExpress size={24} />,
  sequelize: <SiSequelize size={24} />,
  redux: <SiRedux size={24} />,
  fly: <FaFly size={24} />,
  markdown: <SiMarkdown size={24} />,
  antd: <SiAntdesign size={24} />,
  styledComponents: <SiStyledcomponents size={24} />
};

const Work = ({ work }: { work: IWork }): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <title>rizqyhbb | WORK</title>
        <meta name="description" content={work.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.workContainer}>
        <div>
          <Title title={work.title} />
        </div>
        <div className={styles.bodyContainer}>
          <div>
            <p className={styles.title}>About</p>
            <p>{work.description}</p>
            <div className={styles.techListContainer}>
              {work.tech?.map(tech => <Fragment key={tech}>{icons[tech]}</Fragment>)}
            </div>
            {work.href &&
              <Link href={work.href} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Visit website</Link>
            }
          </div>
          <MediaPreview className={styles.mediaMobileContainer} work={work} />
          <div className={styles.keyFeatures}>
            <p className={styles.title}>Key Features</p>
            <ul>
              {work.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </ul>
          </div>
        </div>
        <MediaPreview className={styles.mediaDesktopContainer} work={work} />
      </div>
    </div>
  );
};

Work.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Work;
