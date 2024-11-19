import React from 'react';
import Logo from '@/components/Header/Logo';
import Social from '@/components/Social';
import styles from "./style.module.scss";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Social />
        <p>&copy; {getYear} Michael Allen</p>
      </div>
    </div>
  )
}
