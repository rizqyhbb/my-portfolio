import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon";
import styles from "./Navbar.module.css";

interface INavbar {
  dark?: boolean
}

const Navbar = ({ dark = false }: INavbar) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setIsClosing(false)
    setOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setIsClosing(true)
    setTimeout(() => setOpenMenu(false), 2000)
  }
  return (
    <>
      <div className={`${styles.container} ${dark && styles.containerDark}`}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            PORTFOLIO 2022
          </div>
          <button className={styles.button} onClick={handleOpenMenu}>
            <Icon.Menu size="48" fill={dark ? "white" : "black"} />
          </button>
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
            <div className={styles.linkWrapper}>
              <button className={styles.button} onClick={handleCloseMenu}>
                <Link className={styles.link} href="/">home</Link>
              </button>
              <div className={styles.blocker} />
            </div>
            <div className={styles.linkWrapper}>
              <button className={styles.button} onClick={handleCloseMenu}>
                <Link className={styles.link} href="/work">work</Link>
              </button>
              <div className={styles.blocker} />
            </div>
            <div className={styles.linkWrapper}>
              <button className={styles.button} onClick={handleCloseMenu}>
                <Link className={styles.link} href="/about">about</Link>
              </button>
              <div className={styles.blocker} />
            </div>
            <div className={styles.linkWrapper}>
              <button className={styles.button} onClick={handleCloseMenu}>
                <Link className={styles.link} href="/contact">contact</Link>
              </button>
              <div className={styles.blocker} />
            </div>
          </div>
          <div className={`${styles.footer} ${isClosing && styles.footerClose}`}>
            <p>rizqyhbb@gmail.com</p>
            <p>MALANG, INDONESIA</p>
            <p>
              Currently looking for opportunities as a frontend developer (remote)
            </p>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar