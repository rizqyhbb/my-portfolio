import Link from "next/link";
import Icon from "../Icon";
import styles from "./Github.module.css";

const Github = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/rizqyhbb">
        <Icon.Github />
      </Link>
    </div>
  )
}

export default Github