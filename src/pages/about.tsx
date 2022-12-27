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
            I am a career switcher. What?! Yes! I was an Engineer, an aircraft jet engine engineer for almost 4 years.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            I was graduated both associate and bachelor of Mechanical Engineer. However, I started to see people web and app is so beautiful and I started to liking it.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            I started to learn since 2019 as a fullstack and became an official frontend web developer on 2020.
          </p>
        </section>

        <section className={styles.hidden}>
          <p>
            I love to creating things and learning new stuff. Design is like something to represent your feeling and Web is a great technology that bring the design alive!
          </p>
        </section>

        <section className={styles.hidden}>
          <p>I{'\''}m so grateful for doing what I love!</p>
        </section>
      </div>
    </div>
  );
};

About.getLayout = function getLayout (page: ReactElement) {
  return <Layout dark={true}>{page}</Layout>;
};

export default About;
