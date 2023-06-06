import Image from 'next/image';
import React, { FC } from 'react';
import type { IWork } from '../../utils/const';
import styles from './MediaPreview.module.css';

interface IMediaPreview {
  className?: string
  work: IWork
}

const MediaPreview: FC<IMediaPreview> = ({ className, work }) => {
  return (
    <div className={className}>
      {work.media && Boolean(work.media.includes('.mp4'))
        ? <video loop autoPlay muted style={{ width: '100%' }}>
          <source src={work.media} type="video/mp4" />
        </video>
        : <div>
          {work.media &&
            <div className={styles.MediaPreviewImage}>
              <Image src={work.media} alt={work.title} fill style={{ objectFit: 'contain' }}/>
            </div>
          }
        </div>}
    </div>
  );
};

export default MediaPreview;
