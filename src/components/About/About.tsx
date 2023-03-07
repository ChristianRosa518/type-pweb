import React from "react";

import styles from "./About.module.css";
import image from "./Carousel.module.css";
//
import Carousel, { CarouselChild } from "./Carousel";

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

export const About = () => {
  return (
    <div>
      <div className={styles.title}>
        <h2>About</h2>
        <p>I think therefor?</p>
      </div>
      <div className={styles.aboutContainer}>
        {/* <Carousel /> */}
        <Carousel>
          <CarouselChild>
            <img
              src={image1}
              alt={"Christian Rosa"}
              className={image.img1}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image2}
              alt={"Christian Rosa"}
              className={image.img2}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image3}
              alt={"Christian Rosa"}
              className={image.img3}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image4}
              alt={"Christian Rosa"}
              className={image.img4}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image5}
              alt={"Christian Rosa"}
              className={image.img5}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image6}
              alt={"Christian Rosa"}
              className={image.img6}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image7}
              alt={"Christian Rosa"}
              className={image.img7}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image8}
              alt={"Christian Rosa"}
              className={image.img8}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image9}
              alt={"Christian Rosa"}
              className={image.img9}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image10}
              alt={"Christian Rosa"}
              className={image.img10}
            ></img>
          </CarouselChild>
          <CarouselChild>
            <img
              src={image11}
              alt={"Christian Rosa"}
              className={image.img11}
            ></img>
          </CarouselChild>
        </Carousel>
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
