import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';
import styles from './ProjectLink.module.css';

interface IProjectLink {
  href: string
  title: string
  description: string
}

const ProjectLink = ({
  description, href, title
}: IProjectLink): JSX.Element => {
  return (
    <div className={styles.container}>
      <Link href={href} >
        <div className={styles.linkContent}>
          <p>{title}</p>
          <Icon.Arrow className={styles.icon} fill='white' size='38' />
        </div>
        <div className={styles.descriptionContainer}>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectLink;
