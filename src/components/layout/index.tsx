import React, { ReactNode } from 'react';
import Footer from '../footer';
import Navbar from '../navbar';

import styles from './Layout.module.css';
import SideLink from '../sideLink';
import { Icon } from '..';

interface ILayout {
  children: ReactNode
  dark?: boolean
  footer?: boolean
  github?: boolean
}

const Layout = ({
  children, dark, github = false, footer = true
}: ILayout): JSX.Element => {
  return (
    <>
      <Navbar dark={dark} />
      <div>{children}</div>
      {github &&
        <div className={styles.sideLink}>
          <SideLink href='https://github.com/rizqyhbb'>
            <Icon.Github />
          </SideLink>
          <SideLink href={process.env.NEXT_PUBLIC_CV_LINK ?? 'https://docs.google.com/document/d/1FqgBEOGoe9g1MKKK-Jnpc8Zxu-y7zgzP5BvCJb9Emtg/edit?usp=sharing'}>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>CV</p>
          </SideLink>
        </div>
      }
      {footer &&
        <Footer />
      }
    </>
  );
};

export default Layout;
