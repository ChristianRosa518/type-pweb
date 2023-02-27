import styles from "./Projects.module.css";
import React, { useEffect } from "react";
import Skills from "../Skills/Skills";
import card from "./Card.module.css";

import { useInView, InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Projects() {
  const initialD = {
    y: "-150%",
  };
  const initialU = { y: "150%" };
  const down = { y: "0%" };
  const up = { y: "0%" };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My Projects</h2>
        <p>A collection of all things I did</p>
      </div>
      <div className={styles.projectContainer}>
        <ProjectItem
          delay={150}
          direction={down}
          initial={initialD}
          odd={true}
        />
        <ProjectItem
          delay={950}
          direction={down}
          initial={initialD}
          odd={false}
        />
        <ProjectItem
          delay={1350}
          direction={down}
          initial={initialD}
          odd={true}
        />
        <ProjectItem
          delay={1750}
          direction={down}
          initial={initialD}
          odd={false}
        />
        <ProjectItem
          delay={1750}
          direction={down}
          initial={initialD}
          odd={true}
        />
        <ProjectItem
          delay={150}
          direction={up}
          initial={initialU}
          odd={false}
        />
        <ProjectItem delay={550} direction={up} initial={initialU} odd={true} />
        <ProjectItem
          delay={950}
          direction={up}
          initial={initialU}
          odd={false}
        />
        <ProjectItem
          delay={1350}
          direction={up}
          initial={initialU}
          odd={true}
        />
        <ProjectItem
          delay={1750}
          direction={up}
          initial={initialU}
          odd={false}
        />
      </div>
    </div>
  );
}

interface card {
  delay: number;
  direction: object;
  initial: object;
  odd: boolean;
}

const ProjectItem = ({ delay, direction, initial, odd }: card) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -350px 0px",
    triggerOnce: true,
    delay: delay,
  });
  return (
    <div className={card.container} ref={ref}>
      {inView && (
        <motion.div
          initial={initial}
          animate={direction}
          className={`${odd ? `${card.itemOdd}` : `${card.itemEven}`}`}
          onClick={() => console.log(initial)}
        >
          <p>{`${inView}`}</p>
        </motion.div>
      )}
    </div>
  );
};

const SassyContainer = () => {
  return (
    <div className={styles.projectItemContainer}>
      <div className={styles.projectTitle}>
        <h2>Sassy's Specialty Sandwiches</h2>
      </div>
      <div className={styles.project}>
        <div className={styles.projectLogo}></div>
        <SassyDesciption />
      </div>
      <div className={styles.projectButtons}>
        <button className={styles.button}>Website Link</button>
        <button className={styles.revButton}>Github Link</button>
        <button className={styles.button}>Other Projects</button>
      </div>
    </div>
  );
};

const SassyDesciption = () => {
  const [languages, setLanguages] = React.useState<number>(0);

  return (
    <div className={styles.projectDescription}>
      <div className={styles.languageContainer}>
        <div className={styles.languageTitle}>
          <h2
            className={`${languages === 1 ? `${styles.active}` : ""}`}
            onClick={() => setLanguages(1)}
          >
            Apis
          </h2>
          <h2
            className={`${languages === 0 ? `${styles.active}` : ""}`}
            onClick={() => setLanguages(0)}
          >
            Languages
          </h2>
          <h2
            className={`${languages === 2 ? `${styles.active}` : ""}`}
            onClick={() => setLanguages(2)}
          >
            CI/CD
          </h2>
        </div>
        {languages === 0 && (
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>TypeScript (update planned)</li>
          </ul>
        )}
        {languages === 1 && (
          <ul>
            <li>Stripe</li>
            <li>Google Geocode</li>
            <li>Google Maps</li>
            <li>Framer-Motion</li>
          </ul>
        )}
        {languages === 2 && (
          <ul>
            <li>Heroku Hosted</li>
            <li>GitHub</li>
          </ul>
        )}
      </div>
      <div className={styles.projectInformation}>
        <section>
          <p>
            <span className={styles.projectInsert}>
              Sassy's Specialty Sandwiches&nbsp;
            </span>
            Is my first project, Sassy's initially started as a project used to
            familiarize myself with Html, Css, and Javascript. But eventually
            transformed into my first e-commerce React project
          </p>
        </section>
      </div>
    </div>
  );
};
