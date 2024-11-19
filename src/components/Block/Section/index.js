import styles from "./style.module.scss";

export default function Section() {
  return (
    <div className={styles.section}>
      <div className={`container ${styles.container}`}>
        Section
      </div>
    </div>
  )
}
