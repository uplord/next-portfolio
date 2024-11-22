import styles from "./style.module.scss";
import Image from "next/image";
import Svg from "@/components/Svg";

const projectsData = [
  { type: "svg", name: "brewdog", tooltip: "Brewdog" },
  { type: "svg", name: "gdk" },
  { type: "svg", name: "subway" },
  { type: "svg", name: "umbro" },
  { type: "svg", name: "superga" },
  { type: "svg", name: "dundeeunited" },
  { type: "svg", name: "hungrrr" },
  { type: "svg", name: "snappy" },
  { type: "svg", name: "macdonalds" },
  { type: "svg", name: "campbells" },
  { type: "image", src: "/images/petervardy.png", alt: "Peter Vardy" },
  { type: "image", src: "/images/carmoney.png", alt: "CarMoney" },
  { type: "svg", name: "bluewater" },
];

export default function Projects() {
  return (
    <div id="projects" className={styles.projectsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Projects I've worked on</h2>
          </div>
          <div className={styles.projects}>
            {projectsData.map((project, index) => (
              <div key={index} className={styles.project}
              {...(project.tooltip && { "data-tooltip": project.tooltip })}
              >
                {project.type === "svg" ? (
                  <Svg name={project.name} width={900} height={600} />
                ) : (
                  <Image
                    src={project.src}
                    alt={project.alt}
                    quality={80}
                    width={900}
                    height={600}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
