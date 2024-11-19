import styles from "./style.module.scss";
import Image from 'next/image';
import Svg from '@/components/Svg';

export default function Projects() {
  return (
    <div className={styles.projectsSection}>
      <div className={`container ${styles.container || ''}`}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Projects I've worked on</h2>
          </div>
          <div className={styles.projects}>
            <div className={styles.project}>
              <Svg name="brewdog" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="gdk" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="subway" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="umbro" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="superga" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="dundeeunited" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="hungrrr" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="snappy" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="macdonalds" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Svg name="campbells" width={900} height={600} />
            </div>
            <div className={styles.project}>
              <Image
                src="/images/petervardy.png"
                alt="Peter Vardy"
                quality={80}
                width={900}
                height={600}
              />
            </div>
            <div className={styles.project}>
              <Image
                src="/images/carmoney.png"
                alt="CarMoney"
                quality={80}
                width={900}
                height={600}
              />
            </div>
            <div className={styles.project}>
              <Svg name="bluewater" width={900} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
