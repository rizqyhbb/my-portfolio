import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LINKS, PROFILE_DETAIL } from '../../utils/const';
import Icon from '../Icon';
import styles from './Navbar.module.css';

interface INavbar {
  dark?: boolean
}

const Navbar = ({ dark = false }: INavbar): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (openMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [openMenu]);

  const handleOpenMenu = (): void => {
    setIsClosing(false);
    setOpenMenu(true);
  };
  const handleCloseMenu = (): void => {
    setIsClosing(true);
    setTimeout(() => setOpenMenu(false), 2000);
  };
  return (
    <>
      <div className={`${styles.container} ${dark && styles.containerDark}`}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            PORTFOLIO 2022
          </div>
          <button className={styles.button} onClick={handleOpenMenu}>
            <Icon.Menu size="48" fill={dark ? 'white' : 'black'} />
          </button>
          {/* LINK FOR DESKTOP */}
          <div className={styles.desktopMenu}>
            {LINKS.map((link, idx) =>
                <Link key={idx} href={link.href} onClick={handleCloseMenu}>{link.title}</Link>)}
          </div>
          {/* END OF LINK FOR DESKTOP */}
        </div>
        <div className={styles.border} />
      </div>

      {openMenu &&
        <div className={`${styles.menu} ${isClosing && styles.menuClose}`}>
          <div className={`${styles.closeButton} ${isClosing && styles.closing}`}>
            <button className={styles.button} onClick={handleCloseMenu}>
              <Icon.Close size="48" fill="white" />
            </button>
          </div>
          <div className={`${styles.containerLink} ${isClosing && styles.containerLinkClose}`}>
            {/* LINK FOR MOBILE */}
            {LINKS.map((link, idx) =>
              <div key={idx} className={styles.linkWrapper}>
                <Link className={styles.link} href={link.href} onClick={handleCloseMenu}>{link.title}</Link>
                <div className={styles.blocker} />
              </div>)}
            {/* END OF LINK FOR MOBILE */}
          </div>
          <div className={`${styles.footer} ${isClosing && styles.footerClose}`}>
            <p>{PROFILE_DETAIL.email}</p>
            <p>{PROFILE_DETAIL.city.toUpperCase()}, {PROFILE_DETAIL.country.toUpperCase()}</p>
            <p>
              {PROFILE_DETAIL.description}
            </p>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
