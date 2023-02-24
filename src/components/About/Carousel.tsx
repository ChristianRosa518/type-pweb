import React from "react";
import styles from "./Carousel.module.css";

import image1 from "./CarouselImages/image1.jpg";
import image2 from "./CarouselImages/image2.JPG";

function Carousel() {
  const sliderData = [
    {
      image: image1,
    },
    { image: image2 },
  ];

  return (
    <div className={styles.carouselContainer}>
      {sliderData.map((slide, index) => {
        return <img src={slide.image} alt={"Christian Rosa"} />;
      })}
    </div>
  );
}

export default Carousel;
