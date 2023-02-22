import React, { useState } from 'react';
import { StepChanger, StepContainer } from '../Steps/Step';
import { Typewriter } from 'react-simple-typewriter';
import styles from './Home.module.css';

// Changed file to jsx because of Typewriter component.

export default function Home() {
  const [stepCount, setStepCount] = useState(20);
  const [color, setColor] = useState(false);

  function onAddChild() {
    if (stepCount === 35) {
      console.log('no more pls');
    } else {
      setStepCount(stepCount + 1);
    }
  }
  function onRemoveChild() {
    if (stepCount <= 9) {
      console.log('no more steps');
    } else {
      setStepCount(stepCount - 1);
    }
  }

  return (
    <section className={styles.home}>
      <StepContainer Count={stepCount} color={color} />
      <StepChanger
        color={color}
        setColor={setColor}
        Count={stepCount}
        removeChild={onRemoveChild}
        addChild={onAddChild}
      />
      <div className={`${styles.hero} ${color ? `${styles.heroLock}` : ''}`}>
        <h1>Your next</h1>
        <p>
          &nbsp;
          <Typewriter
            words={[
              'Front End Developer',
              'Fullstack Software Engineer',
              'Back End Engineer',
              'Front End Engineer',
              'Fullstack Developer',
              'Back End Developer',
            ]}
            loop={false}
            delaySpeed={2500}
          />
        </p>
      </div>
    </section>
  );
}
