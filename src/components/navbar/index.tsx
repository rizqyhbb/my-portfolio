import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            PORTFOLIO 2022
          </div>
          <button className={styles.button} onClick={() => setOpenMenu(true)}>
            <Icon.Menu size="48" />
          </button>
        </div>
        <div className={styles.border} />
      </div>

      {openMenu &&
        <div className={styles.menu}>
          <div className={styles.close}>
            <button className={styles.button} onClick={() => setOpenMenu(false)}>
              <Icon.Close size="48" fill="white" />
            </button>
          </div>
          <div className={styles.containerLink}>
            <Link className={styles.link} href="/home">home</Link>
            <Link className={styles.link} href="/work">work</Link>
            <Link className={styles.link} href="/about">about</Link>
            <Link className={styles.link} href="/contact">contact</Link>
          </div>
          <div className={styles.footer}>
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