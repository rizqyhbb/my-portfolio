import Icon from "../Icon";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          PORTFOLIO 2022
        </div>
        <button className={styles.button}>
          <Icon.Menu size="48" />
        </button>
      </div>
      <div className={styles.border} />
    </div>
  )
}

export default Navbar