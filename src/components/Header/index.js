import React from 'react';
import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Navigation />
      </div>
    </div>
  )
}
