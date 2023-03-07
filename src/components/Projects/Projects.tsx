import styles from "./Projects.module.css";
import React, { useState } from "react";
import card from "./Card.module.css";

import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

import SassyLogo from "./Logo.png";

export default function Projects() {
  const [nully, setnully] = useState<Boolean>(false);
  const [sassy, setSassy] = useState<Boolean>(false);

  // Tablet and bigger animations
  const initialD = { y: "-150%" };
  const initialU = { y: "150%" };
  const down = { y: "0%" };
  const up = { y: "0%" };

  // Mobile and lower animations
  const initialL = { x: "-150%" };
  const initialR = { x: "150%" };
  const center = { x: 0 };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My Projects</h2>
        <p>A collection of all things I did</p>
      </div>
      <div className={styles.projectContainer}>
        <ProjectItem
          img={SassyLogo}
          altTag={"sassys"}
          delay={150}
          rootMargin={"0px 0px -350px 0px"}
          direction={down}
          initial={initialD}
          odd={true}
          showProject={setSassy}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={950}
          direction={down}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialD}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1350}
          direction={down}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialD}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1750}
          direction={down}
          initial={initialD}
          rootMargin={"0px 0px -350px 0px"}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1750}
          direction={down}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialD}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={151}
          direction={up}
          initial={initialU}
          rootMargin={"0px 0px -350px 0px"}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={551}
          direction={up}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialU}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={951}
          direction={up}
          initial={initialU}
          rootMargin={"0px 0px -350px 0px"}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1351}
          direction={up}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialU}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1751}
          direction={up}
          rootMargin={"0px 0px -350px 0px"}
          initial={initialU}
          odd={false}
          showProject={setnully}
        />
        <AnimatePresence>
          {sassy && <SassyContainer isActive={setSassy} />}
        </AnimatePresence>
      </div>
      <div className={styles.projectContainerMobile}>
        <ProjectItem
          img={SassyLogo}
          altTag={"sassys"}
          delay={150}
          direction={center}
          initial={initialL}
          rootMargin={"0px 0px -50px 0px"}
          odd={true}
          showProject={setSassy}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={950}
          direction={center}
          rootMargin={"0px 0px -50px 0px"}
          initial={initialR}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1350}
          direction={center}
          rootMargin={"0px 0px -50px 0px"}
          initial={initialL}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1750}
          direction={center}
          rootMargin={"0px 0px -50px 0px"}
          initial={initialR}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1750}
          rootMargin={"0px 0px -50px 0px"}
          direction={center}
          initial={initialL}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={151}
          direction={center}
          rootMargin={"0px 0px -50px 0px"}
          initial={initialR}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={551}
          rootMargin={"0px 0px -50px 0px"}
          direction={center}
          initial={initialL}
          odd={false}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={951}
          rootMargin={"0px 0px -50px 0px"}
          direction={center}
          initial={initialR}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1351}
          rootMargin={"0px 0px -50px 0px"}
          direction={center}
          initial={initialL}
          odd={true}
          showProject={setnully}
        />
        <ProjectItem
          img={"none"}
          altTag={"none"}
          delay={1751}
          rootMargin={"0px 0px -50px 0px"}
          direction={center}
          initial={initialR}
          odd={false}
          showProject={setnully}
        />
        <AnimatePresence>
          {sassy && <SassyContainer isActive={setSassy} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface cardy {
  altTag: string;
  img: string;
  delay: number;
  direction: object;
  initial: object;
  odd: boolean;
  rootMargin: string;
  showProject: (active: boolean) => void;
}

const ProjectItem = ({
  altTag,
  img,
  delay,
  direction,
  initial,
  odd,
  rootMargin,
  showProject,
}: cardy) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: rootMargin,
    triggerOnce: true,
    delay: delay,
  });
  return (
    <div className={card.container} ref={ref}>
      {inView && (
        <motion.div
          key={delay.toString()}
          initial={initial}
          animate={direction}
          className={`${odd ? `${card.itemOdd}` : `${card.itemEven}`}`}
          onClick={() => showProject(true)}
        >
          <div className={card.imgCon}>
            {altTag !== "none" && (
              <img className={card.img} src={img} alt={altTag}></img>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

interface SassyProps {
  isActive: (active: boolean) => void;
}

const SassyContainer = ({ isActive }: SassyProps) => {
  return (
    <motion.div
      key="sassy"
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { duration: 0.1 } }}
      exit={{ y: "300%", transition: { duration: 0.4 } }}
      className={styles.projectItemContainer}
    >
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
        <button className={styles.button} onClick={() => isActive(false)}>
          Other Projects
        </button>
      </div>
    </motion.div>
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
