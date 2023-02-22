import React from 'react';

import styles from './About.module.css';

export const About = () => {
  return (
    <div>
      <div className={styles.title}>
        <h2>About</h2>
        <p>I think therefor?</p>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}></div>
        <div className={styles.aboutInfoContainer}>
          <div className={styles.whoAm}>
            <h2>Who am I? </h2>
            <p>
              My name's Christian Rosa, I'm a college student studying for my
              bachelor's in computer engineering my graduation is expected to be
              late 2024 and I wish to breakthrough the tech career space before
              then
            </p>
            <p>
              My curent goal is to become a Full Stack Software Engineer, but
              i'm currently pursuing work experience as a Front End Engineer.
            </p>
          </div>
          <div className={styles.filler}></div>
        </div>
      </div>
    </div>
  );
};
