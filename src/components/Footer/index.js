import React from 'react';
import Social from '@/components/Social';
import styles from "./style.module.scss";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Social />
        <p>&copy; {getYear} Michael Allen</p>
      </div>
    </div>
  )
}
