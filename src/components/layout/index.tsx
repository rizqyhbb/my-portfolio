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
          <SideLink href='https://drive.google.com/file/d/1c4PaKGODyg5Fu0eJW6MPQLT4uML5W2Hd/view?usp=sharing'>
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
