import React, {
  ReactElement, useEffect, useRef
} from 'react';
import { Layout } from '../components';
import { NextPageWithLayout } from './_app';
import Head from 'next/head';

import styles from '../styles/About.module.css';

const About: NextPageWithLayout = () => {
  const ref = useRef<any>();

  useEffect(() => {
    const sections = ref.current.children;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(`${styles.show}`, entry.isIntersecting);
      });
    }, { threshold: 1 });

    Array.from(sections).forEach((section: any) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>rizqyhbb | ABOUT</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.scroll}>
        <p>SCROLL DOWN</p>
      </section>
      <div ref={ref} className={styles.wrapper}>

        <section className={styles.hidden}>
          <p>
            I am a career switcher. What?! Yes! I spent nearly four years as an Engineer, specializing in aircraft jet engines.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            I hold degrees in both associate and bachelor of Mechanical Engineering. However, I began to notice the captivating beauty of web and app design also how an application solved so many problems, and my interest grew from there.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            Since 2019, I embarked on a journey to learn full-stack development, and in 2022, I officially transitioned to becoming a frontend web developer.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            I have a passion for creating and constantly expanding my knowledge. Design, to me, is a medium for expressing emotions, and the web is an incredible technology that brings designs to life!
          </p>
        </section>

        <section className={styles.hidden}>
          <p>I am incredibly grateful to be doing what I love!</p>
        </section>
      </div>
    </div>
  );
};

About.getLayout = function getLayout (page: ReactElement) {
  return <Layout dark={true}>{page}</Layout>;
};

export default About;
