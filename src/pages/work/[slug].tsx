import { GetStaticPaths, GetStaticProps } from 'next';
import React, { Fragment, ReactElement } from 'react';
import { IWork, WORKS } from '../../utils/const';
import type { Tech } from '../../utils/const';
import { Layout, Title } from '../../components';
import styles from '../../styles/WorkDetail.module.css';
import {
  SiAntdesign,
  SiExpress, SiGatsby, SiGraphql, SiMarkdown, SiNextdotjs, SiOpenai, SiPostgresql, SiReactquery, SiRedux, SiRemix, SiSanity, SiSequelize, SiStyledcomponents, SiSupabase, SiTailwindcss, SiVercel
} from 'react-icons/si';
import { FaFly } from 'react-icons/fa';
import Head from 'next/head';
import MediaPreview from '../../components/work/MediaPreview';

export type IconType = Record<Tech, any>

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
  nextJs: <SiNextdotjs size={24} title='NextJs'/>,
  tailwind: <SiTailwindcss size={24} title='Tailwind CSS'/>,
  remix: <SiRemix size={24} title='Remix'/>,
  postgres: <SiPostgresql size={24} title='PostgreSQL'/>,
  openAi: <SiOpenai size={24} title='OpenAI'/>,
  supabase: <SiSupabase size={24} title="Supabase"/>,
  vercel: <SiVercel size={24} title="Vercel"/>,
  express: <SiExpress size={24} title="ExpressJs"/>,
  sequelize: <SiSequelize size={24} title="Sequelize"/>,
  redux: <SiRedux size={24} title="Redux"/>,
  fly: <FaFly size={24} title="Fly.io"/>,
  markdown: <SiMarkdown size={24} title="Markdown"/>,
  antd: <SiAntdesign size={24} title="Ant Design"/>,
  styledComponents: <SiStyledcomponents size={24} title="Styled-Component"/>,
  gatsby: <SiGatsby size={24} title="Gatsby"/>,
  tanstack: <SiReactquery size={24} title="Tanstack"/>,
  graphQl: <SiGraphql size={24} title="GraphQL"/>,
  sanity: <SiSanity size={24} title="Sanity"/>
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
              <a
              href={work.href}
              style={{ fontWeight: 'bold', textDecoration: 'underline' }}
              target='_blank'
              rel="noreferrer">
                Visit website
              </a>
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
