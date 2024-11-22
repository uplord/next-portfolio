import styles from "./style.module.scss";
import Svg from '@/components/Svg';

export default function Stack() {
  return (
    <div className={styles.stackSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>My current stack</h2>
          </div>
          <div className={styles.stack}>
            <div data-tooltip="HTML5" className={styles.item}>
              <Svg name="html5" width={60} />
            </div>
            <div data-tooltip="CSS3" className={styles.item}>
              <Svg name="css3" width={60} />
            </div>
            <div data-tooltip="JavaScript" className={styles.item}>
              <Svg name="js" width={60} />
            </div>
            <div data-tooltip="Sass" className={styles.item}>
              <Svg name="sass" width={60} />
            </div>
            <div data-tooltip="Nuxt" className={styles.item}>
              <Svg name="nuxt" width={60} />
            </div>
            <div data-tooltip="TypeScript" className={styles.item}>
              <Svg name="typescript" width={60} />
            </div>
            <div data-tooltip="Git" className={styles.item}>
              <Svg name="git" width={60} />
            </div>
            <div data-tooltip="Github" className={styles.item}>
              <Svg name="github" width={60} />
            </div>
            <div data-tooltip="Amazon Web Services" className={styles.item}>
              <Svg name="aws" width={60} />
            </div>
            <div data-tooltip="Netlify" className={styles.item}>
              <Svg name="netlify" width={60} />
            </div>
            <div data-tooltip="VS Code" className={styles.item}>
              <Svg name="vscode" width={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
