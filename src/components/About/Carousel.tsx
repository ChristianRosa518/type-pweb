import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

import image1 from "./CarouselImages/image1.jpg";
import image2 from "./CarouselImages/image2.JPG";
import image3 from "./CarouselImages/image3.JPG";
import image4 from "./CarouselImages/image4.jpg";
import image5 from "./CarouselImages/image5.JPG";
import image6 from "./CarouselImages/image6.jpg";
import image7 from "./CarouselImages/image8.JPG";
import image8 from "./CarouselImages/image9.JPG";
import image9 from "./CarouselImages/image11.JPG";
import image10 from "./CarouselImages/image13.jpg";
import image11 from "./CarouselImages/image16.jpg";

// Workaround that doesn't require declaration.d.ts edits
// const image2 = require("./CarouselImages/image2.JPG");

function Carousel() {
  const [current, setCurrent] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const sliderData = [
    { image: image10, class: styles.img10 },
    { image: image1, class: styles.img1 },
    { image: image2, class: styles.img2 },
    { image: image3, class: styles.img3 },
    { image: image4, class: styles.img4 },
    { image: image5, class: styles.img5 },
    { image: image6, class: styles.img6 },
    { image: image7, class: styles.img7 },
    { image: image8, class: styles.img8 },
    { image: image9, class: styles.img9 },
    { image: image11, class: styles.img11 },
  ];

  const length: number = sliderData.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) nextSlide();
  //   }, 3000);
  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function previousSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className={styles.carouselContainer}>
      <div onClick={() => nextSlide()} className={styles.forward}>
        Hello {current}
      </div>
      <div onClick={() => previousSlide()} className={styles.backward}>
        <p></p>
      </div>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={`${
              index === current
                ? `${styles.slide} ${styles.active}`
                : `${styles.slide}`
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                className={slide.class}
                alt={"Christian Rosa"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
