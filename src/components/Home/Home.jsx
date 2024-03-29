import React, { useState } from "react";
import { StepChanger, StepContainer } from "../Steps/Step";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

// Changed file to jsx because of Typewriter component.

export default function Home() {
  const [stepCount, setStepCount] = useState(20);
  const [color, setColor] = useState(false);

  // All to change the color of HERO text LOL
  const [textColor, setTextColor] = useState(false);
  const [totalSteps, setTotalSteps] = React.useState(stepCount * 7);
  const [coloredSteps, setColoredSteps] = React.useState(0);
  // Figure out how to clear all color using ref. Future, not necessary now.
  const clear = React.useRef();
  //

  function onAddChild() {
    if (stepCount === 35) {
      console.log("no more pls");
    } else {
      let value = (stepCount + 1) * 7;
      let total = totalSteps + 7;

      setStepCount(stepCount + 1);
      setTotalSteps(value);

      if (coloredSteps >= total / 2) {
        setTextColor(true);
      } else if (coloredSteps <= total / 2) {
        setTextColor(false);
      }
    }
  }
  function onRemoveChild() {
    if (stepCount <= 9) {
      console.log("no more steps");
    } else {
      let value = (stepCount - 1) * 7;
      let total = totalSteps - 7;
      console.log(total);

      setStepCount(stepCount - 1);
      setTotalSteps(value);

      if (coloredSteps >= total / 2) {
        setTextColor(true);
      } else if (coloredSteps <= total / 2) {
        setTextColor(false);
      }
    }
  }

  function colorStepAdd() {
    let value = coloredSteps + 1;
    setColoredSteps(value);
    console.log(totalSteps);

    if (value >= totalSteps / 2) {
      setTextColor(true);
    }
  }

  function colorDecrease() {
    let value = coloredSteps - 1;
    setColoredSteps(value);

    console.log(value);

    if (value <= totalSteps / 2) {
      setTextColor(false);
    }
  }

  return (
    <div className={styles.home}>
      <StepContainer
        Count={stepCount}
        color={color}
        colorStepAdd={colorStepAdd}
        colorDecrease={colorDecrease}
        //  temp
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
      />
      {/* <StepChanger
        clear={clear}
        color={color}
        textColor={textColor}
        setColor={setColor}
        Count={stepCount}
        removeChild={onRemoveChild}
        addChild={onAddChild}
        colorStepAdd={colorStepAdd}
        colorDecrease={colorDecrease}
      /> */}
      <div
        className={`${styles.hero} ${
          color
            ? `${styles.heroLock}`
            : "" || textColor
            ? `${styles.heroLock}`
            : ""
        }`}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Your next
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
          viewport={{ once: true }}
        >
          &nbsp;
          <Typewriter
            words={[
              "Front End Developer",
              // "Fullstack Software Engineer",
              // "Back End Engineer",
              // "Front End Engineer",
              // "Fullstack Developer",
              // "Back End Developer",
            ]}
            loop={1}
            delaySpeed={2500}
          />
        </motion.p>
      </div>
    </div>
  );
}
