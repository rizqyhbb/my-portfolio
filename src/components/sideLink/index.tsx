import Link from 'next/link';
import styles from './SideLink.module.css';
import React, {
  CSSProperties, FC, ReactNode
} from 'react';

interface ISideLink {
  children: ReactNode
  href: string
  style?: CSSProperties
}

const SideLink: FC<ISideLink> = ({
  children, href, style
}) => {
  return (
      <Link className={styles.container} style={style} href={href}>
        {children}
      </Link>
  );
};

export default SideLink;
