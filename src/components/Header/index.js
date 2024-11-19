import React, { useEffect }  from 'react';
import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import Toggle from '@/components/Toggle';
import styles from "./style.module.scss";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (!header) return;

      if (window.innerWidth > 767) {
        header.classList.toggle(styles.scrolled, window.scrollY > 0);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.header}>
      <div className={`container ${styles.container || ''}`}>
        <Logo />
        <Navigation />
        <Toggle />
      </div>
    </div>
  )
}
