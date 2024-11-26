import styles from "./style.module.scss";
import Image from "next/image";
import Svg from "@/components/Svg";

const projectsData = [
  { type: "svg", name: "brewdog", tooltip: "Brewdog" },
  { type: "svg", name: "gdk", tooltip: "German Doner Kebab" },
  { type: "svg", name: "subway", tooltip: "Subway" },
  { type: "svg", name: "umbro", tooltip: "Umbro" },
  { type: "svg", name: "superga", tooltip: "Superga" },
  { type: "svg", name: "dundeeunited", tooltip: "Dundee United Football Club" },
  { type: "svg", name: "hungrrr", tooltip: "Hungrrr" },
  { type: "svg", name: "snappy", tooltip: "Snappy Shopper" },
  { type: "svg", name: "macdonalds", tooltip: "Macdonald Hotels & Resorts" },
  { type: "svg", name: "campbells", tooltip: "Campbells Meat" },
  { type: "image", src: "/images/petervardy.png", alt: "Peter Vardy", tooltip: "Peter Vardy" },
  { type: "image", src: "/images/carmoney.png", alt: "CarMoney", tooltip: "CarMoney" },
  { type: "svg", name: "bluewater", tooltip: "Bluewater" },
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
