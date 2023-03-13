import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { useSwipeable } from "react-swipeable";

// Workaround that doesn't require declaration.d.ts edits
// const image2 = require("./CarouselImages/image2.JPG");

interface Carousel {
  children?: React.ReactNode;
}

function Carousel({ children }: Carousel) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    // unable to use until fix pointer events to go through elements
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={styles.carouselHider}
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => console.log("hi")}
    >
      <div
        className={styles.carouselContainer}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* Copout on child prop because I don't have full depth of typescript */}
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.imageIndicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <AiOutlineArrowLeft />
        </button>
        {/* for media queries. */}
        {/* {activeIndex} */}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

interface CarouselChild {
  children: React.ReactNode;
}

export const CarouselChild = ({ children }: CarouselChild) => {
  return (
    <div className={styles.slide} style={{ width: "100%" }}>
      {children}
    </div>
  );
};

export default Carousel;
