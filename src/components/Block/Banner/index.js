import styles from "./style.module.scss";
import Buttons from '@/components/Button/Buttons';
import Image from 'next/image';

export default function Banner() {
  const buttons = [{
    title: 'Get in touch',
    link: 'mailto:michael@uplord.co.uk',
    class: 'primary large',
  },{
    title: 'Download CV',
    link: '/michael-allen-cv.pdf',
    class: 'link large',
    target: '_blank',
  }];

  return (
    <div className={styles.banner}>
      <div className={`container ${styles.container || ''}`}>
        <div className={styles.slide}>
          <div className={styles.image}>
            <Image
              src="/images/me.jpeg"
              alt="Hi, I'm Michael"
              quality={80}
              width={748}
              height={748}
              priority
            />
          </div>
          <div className={styles.text}>
            <h1><span>Hi, I'm Michael</span> A Front End Developer</h1>
            <h2>With 9 years in the industry creating websites</h2>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </div>
  )
}
