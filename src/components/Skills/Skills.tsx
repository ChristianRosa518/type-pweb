import styles from './Skills.module.css';
import './Skillsjsx.css';

import React, { useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState<number>(0);

  return (
    <section className={styles.container}>
      <div
        className={`skills ${skills === 0 ? 'b0' : ''}${
          skills === 1 ? 'b1' : ''
        }${skills === 2 ? 'b2' : ''}${skills === 3 ? 'b3' : ''}${
          skills === 4 ? 'b4' : ''
        }`}
      >
        <div className={styles.skillSelect}>
          <ul>
            <li
              onClick={() => setSkills(0)}
              className={`list ${skills === 0 ? 'active0' : ''}`}
            >
              Technical
            </li>
            <li
              onClick={() => setSkills(1)}
              className={`list ${skills === 1 ? 'active1' : ''}`}
            >
              Languages
            </li>
            <li
              onClick={() => setSkills(2)}
              className={`list ${skills === 2 ? 'active2' : ''}`}
            >
              Third-Party Apis
            </li>
            <li
              onClick={() => setSkills(3)}
              className={`list ${skills === 3 ? 'active3' : ''}`}
            >
              Tools
            </li>
            <li
              onClick={() => setSkills(4)}
              className={`list ${skills === 4 ? 'active4' : ''}`}
            >
              Project Management
            </li>
          </ul>
        </div>
        <div className={styles.skillDescription}>
          <section>
            <h2
              className={`skillset ${skills === 0 ? 'c0' : ''}${
                skills === 1 ? 'c1' : ''
              }${skills === 2 ? 'c2' : ''}${skills === 3 ? 'c3' : ''}${
                skills === 4 ? 'c4' : ''
              }`}
            >
              Skills
            </h2>
            {skills === 0 && (
              <ul className={styles.d0}>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>

                <li>Next.js (Learning)</li>
                <li>Three.js (Learning)</li>
                <li>MongoDB (Learning)</li>
                <li>PostgreSQL (Learning)</li>
              </ul>
            )}
            {skills === 1 && (
              <ul className={styles.d1}>
                <li>HTML(5)</li>
                <li>CSS(3)</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>PHP (Learning)</li>
                <li>SQL (Learning)</li>
              </ul>
            )}
            {skills === 2 && (
              <ul className={styles.d2}>
                <li>Stripe</li>
                <li>Framer-Motion</li>
                <li>Google Geocode</li>
                <li>Google Maps</li>
              </ul>
            )}
            {skills === 3 && (
              <ul className={styles.d3}>
                <li>VS Code</li>
                <li>Adobe Premiere Pro</li>
                <li>Adobe Photoshop</li>
                <li>Chrome Dev Tools</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>Microsoft Stack (Windows, Excel, Etc)</li>
              </ul>
            )}
            {skills === 4 && (
              <ul className={styles.d4}>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Trello</li>

                <li>AWS (Learning)</li>
              </ul>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
