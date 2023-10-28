import styles from "./style.module.css";
import { ExperienceCard } from "@/components";

export const SectionExperiences = ({ data }) => {
  return (
    <section className={styles["section-experience"]}>
      {data.map(
        ({ docId, description, title, ocupation, startDate, endDate }) => {
          return (
            <ExperienceCard
              key={docId}
              title={title + " - " + ocupation}
              period={startDate + " - " + endDate}
            >
              {description}
            </ExperienceCard>
          );
        }
      )}
    </section>
  );
};
