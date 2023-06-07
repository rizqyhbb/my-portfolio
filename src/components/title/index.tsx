import React, { ReactNode } from 'react';
import styles from './Title.module.css';

interface ITitle {
  title: ReactNode
  subtitle?: ReactNode
  dark?: boolean
}
const Title = ({
  title,
  subtitle,
  dark = false
}: ITitle): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={`${styles.bannerContainer} ${dark && styles.dark}`}>
        <div className={styles.blocker}></div>
        <h1 className={styles.title}>{title}</h1>
        <br />
        {subtitle !== null &&
          <p className={styles.subTitle}>{subtitle}</p>
        }
      </div>
    </div>
  );
};

export default Title;
