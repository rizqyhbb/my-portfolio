import Link from 'next/link';
import styles from '../styles/404.module.css';
import React, { FC } from 'react';

const Error: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1>404 not found</h1>
        <h2>
          it looks like you are lost, glad that you came here. Come!{' '}
            <span>
              <Link href='/' style={{ textDecoration: 'underline' }}>
                back to home
              </Link>
            </span>
        </h2>
      </div>
    </div>
  );
};

export default Error;
