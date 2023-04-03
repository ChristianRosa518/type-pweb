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

import personal from "./CarouselImages/personalwebprofile.jpg";

export const About = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>About</h2>
        <p>A brief summary</p>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.imgContainer}>
          <img src={personal} alt={"personalprofilepic"}></img>
        </div>
        {/* <Carousel>
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
        </Carousel> */}
        <div className={styles.aboutInfoContainer}>
          <div className={styles.whoAm}>
            <h2>Who am I? </h2>
            <p>
              My name is Christian Rosa. I am a university student and am
              currently on track to graduate with a Bachelor's of Computer
              Engineering in spring, 2024. Before I graduate, I hope to break
              into the tech space as a Frontend Developer.
            </p>
            <br></br>
            <p>Or at least before chat-gpt out phases us all.</p>
          </div>
          <div className={styles.filler}></div>
        </div>
      </div>
    </>
  );
};
