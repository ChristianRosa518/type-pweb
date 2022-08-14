import styles from './Projects.module.css';
import React from 'react';
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
          <div className={styles.projectDescription}>
            <section>
              <p>
                <span className={styles.projectInsert}>
                  Sassy's Specialty Sandwiches&nbsp;
                </span>
                Is my first project, Sassy's initially started as a project used
                to familiarize myself with Html, Css, and Javascript. But
                eventually transformed into my first e-commerce React project
              </p>
            </section>
            <br />
            <section>
              <p>
                The objective for this site was to make it as easy as possible
                for a user to buy a sandwich, almost everything interactable on
                this website will allow you to buy a sandwich
              </p>
            </section>
            <br />

            <section>
              <p>
                The most challenging part about this website was understanding
                Stripe, I had no clue on how to handle a purchase online and
                Stripe saved me , payment intents were a bugger to figure out
                but eventually I did.
              </p>
            </section>
            <br />
            <section>
              <p>
                This website isn't entirely finished, I don't think it ever will
                be, but that's okay, with how I coded things, updating this site
                will take no time at all!
              </p>
            </section>
          </div>
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
