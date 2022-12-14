import styles from './Projects.module.css';
import React, { useEffect } from 'react';
import Skills from '../Skills/Skills';

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My Projects</h2>
        <p>A collection of all things I did</p>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectTitle}>
          <h2>Sassy's Specialty Sandwiches</h2>
        </div>
        <div className={styles.project}>
          <div className={styles.projectLogo}></div>
          <ProjectDesciption />
        </div>
        <div className={styles.projectButtons}>
          <button className={styles.button}>Website Link</button>
          <button className={styles.revButton}>Github Link</button>
          <button className={styles.button}>Other Projects</button>
        </div>
      </div>
    </div>
  );
}

const ProjectDesciption = () => {
  const [languages, setLanguages] = React.useState<number>(0);

  return (
    <div className={styles.projectDescription}>
      <div className={styles.languageContainer}>
        <div className={styles.languageTitle}>
          <h2
            className={`${languages === 1 ? `${styles.active}` : ''}`}
            onClick={() => setLanguages(1)}
          >
            Apis
          </h2>
          <h2
            className={`${languages === 0 ? `${styles.active}` : ''}`}
            onClick={() => setLanguages(0)}
          >
            Languages
          </h2>
          <h2
            className={`${languages === 2 ? `${styles.active}` : ''}`}
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
