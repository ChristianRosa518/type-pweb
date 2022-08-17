import React, { useState } from 'react';
import { StepChanger, StepContainer } from '../Steps/Step';

import styles from './Home.module.css';

export default function Home() {
  const [stepCount, setStepCount] = useState<number>(20);
  const [color, setColor] = useState<boolean>(false);

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
        <h1>
          Hello, I'm <span>Christian Rosa</span>
        </h1>
        <p>I'm a Front end Developer</p>
      </div>
    </section>
  );
}
