import styles from "./Projects.module.css";
import React, { useState, Dispatch, SetStateAction } from "react";
import card from "./Card.module.css";

import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

import SassyProjectLogoDesktop from "./Finishedphotos/DesktopSassys.png";
import SassyProjectLogoLaptop from "./Finishedphotos/LaptopSassys.png";
import SassyProjectLogoTablet from "./Finishedphotos/SASSYSTABLET.png";
import SassyProjectLogoMobile from "./Finishedphotos/sassymobile.png";
import TypeProjectLogoDesktop from "./Finishedphotos/DesktopPWEB.png";
import TypeProjectLogoLaptop from "./Finishedphotos/LaptopPWEB.png";
import TypeProjectLogoTablet from "./Finishedphotos/TABLETPWEB.png";
import TypeProjectLogoMobile from "./Finishedphotos/pwebmobile.png";
import SassyLogo from "./Logo.png";

export default function Projects() {
  const [nully, setnully] = useState<Boolean>(false);
  const [sassy, setSassy] = useState<Boolean>(false);
  const [vThree, setvThree] = useState<Boolean>(false);
  const [extend, setExtend] = useState<Boolean>(false);

  // Tablet and bigger animations
  const initialD = { y: "-150%" };
  const initialU = { y: "150%" };
  const down = { y: "0%" };
  const up = { y: "0%" };

  // Mobile and lower animations
  const initialL = { x: "-150%" };
  const initialR = { x: "150%" };
  const center = { x: 0 };

  var sassys = {
    title: "Sassy's Specialty Sandwiches",
    descriptionTitle: "Sassy's Specialty Sandwiches",
    description: `Is my first project, Sassy's initially started as a project used to
    familiarize myself with Html, Css, and Javascript. But eventually
    transformed into my first e-commerce React project`,
    apis: [
      "Stripe",
      "Google Geocode",
      "Google Maps",
      "Framer-Motion",
      "ScrollSpy",
    ],
    languages: ["Html", "Css", "JavaScript", "React", "Node"],
    cicd: ["Heroku Hosted", "GitHub"],
    websiteLink: "https://www.sassysbk.com/",
    githubLink: "https://github.com/ChristianRosa518/sassys-react",
    image: SassyProjectLogoDesktop,
    image2: SassyProjectLogoLaptop,
    image3: SassyProjectLogoTablet,
    image4: SassyProjectLogoMobile,
    mobileImage: "",
    extend: setExtend,
  };

  var v3 = {
    title: "Personal Website V3",
    descriptionTitle: "My Personal Website",
    description: `is something that has gone through as much growth as I have. That's why i've added it here, so you can see the other versions and see how much I, along with my site have grown.`,
    apis: [
      "Framer-Motion",
      "React Interesection Observer",
      "React-Hook-Form",
      "EmailJs",
    ],
    languages: ["TypeScript", "JavaScript", "Html", "Css", "React"],
    cicd: ["Github, for i am poor."],
    websiteLink: "https://christianrosa518.github.io/type-pweb/",
    githubLink: "https://github.com/ChristianRosa518/type-pweb",
    image: TypeProjectLogoDesktop,
    image2: TypeProjectLogoLaptop,
    image3: TypeProjectLogoTablet,
    image4: TypeProjectLogoMobile,
    mobileImage: "",
    addLinks: true,
    v1: "https://christianrosa518.github.io/pWebsite/",
    v2: "https://christianrosa518.github.io/react-personal-web/",
    extend: setExtend,
  };

  var ProjectItems = [
    {
      img: SassyLogo,
      altTag: "sassys",
      ImgReplace: "none",
      delay: 850,
      rootMargin: "0px 0px -350px 0px",
      direction: down,
      initial: initialD,
      odd: true,
      showProject: setSassy,
      extend: extend,
      setExtend: setExtend,
    },
    {
      img: "none",
      altTag: "none",
      ImgReplace: "V3",
      delay: 950,
      rootMargin: "0px 0px -350px 0px",
      direction: down,
      initial: initialD,
      odd: false,
      showProject: setvThree,
      extend: extend,
      setExtend: setExtend,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My Projects</h2>
        <p>A collection of all things I did</p>
      </div>
      <div
        className={`${styles.projectContainer} ${
          extend ? `${styles.extendCon}` : `${styles.extendConClose}`
        }`}
      >
        {ProjectItems.map((props) => (
          <ProjectItem {...props} key={props.altTag} />
        ))}
        <AnimatePresence>
          {sassy && (
            <CardContainer isActive={setSassy} {...sassys}>
              <CardDesciption {...sassys} />
            </CardContainer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {vThree && (
            <CardContainer isActive={setvThree} {...v3}>
              <CardDesciption {...v3} />
            </CardContainer>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`${styles.projectContainerMobile} ${
          extend
            ? `${styles.extendConMobile}`
            : `${styles.extendConCloseMobile}`
        }`}
      >
        {ProjectItems.map((props) => (
          <ProjectItem {...props} key={props.altTag} />
        ))}
        <AnimatePresence>
          {sassy && (
            <CardContainer {...sassys} isActive={setSassy}>
              <CardDesciption {...sassys} />
            </CardContainer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {vThree && (
            <CardContainer isActive={setvThree} {...v3}>
              <CardDesciption {...v3} />
            </CardContainer>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface cardy {
  altTag: string;
  img: string;
  ImgReplace: string;
  delay: number;
  direction: object;
  initial: object;
  odd: boolean;
  rootMargin: string;
  showProject: Dispatch<SetStateAction<Boolean>>;
  extend: Boolean;
  setExtend: Dispatch<SetStateAction<Boolean>>;
}

const ProjectItem = ({
  altTag,
  img,
  ImgReplace,
  delay,
  direction,
  initial,
  odd,
  rootMargin,
  extend,
  setExtend,
  showProject,
}: cardy) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: rootMargin,
    triggerOnce: true,
    delay: delay,
  });

  function changeExtend() {
    setExtend(true);
    showProject(true);
  }

  return (
    <div className={card.container} ref={ref}>
      {inView && (
        <motion.div
          key={delay.toString()}
          initial={initial}
          animate={direction}
          className={`${odd ? `${card.itemOdd}` : `${card.itemEven}`} ${
            extend ? `${card.extendCard}` : `${card.extendCardClose}`
          } `}
          onClick={() => changeExtend()}
        >
          <div className={card.imgCon}>
            {ImgReplace !== "none" && <p>{ImgReplace}</p>}
            {altTag !== "none" && (
              <img className={card.img} src={img} alt={altTag}></img>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

interface CardProps {
  isActive: Dispatch<SetStateAction<Boolean>>;
  children: JSX.Element;
  extend: Dispatch<SetStateAction<Boolean>>;

  title: string;
  websiteLink: string;
  githubLink: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  mobileImage?: string;
}

const CardContainer = ({
  isActive,
  extend,
  title,
  websiteLink,
  githubLink,
  image,
  image2,
  image3,
  image4,
  mobileImage,
  children,
}: CardProps) => {
  function close() {
    extend(false);
    isActive(false);
  }
  return (
    <motion.div
      key="sassy"
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { duration: 0.1, delay: 0.3 } }}
      exit={{ y: "300%", transition: { duration: 0.4 } }}
      className={styles.projectItemContainer}
    >
      <div className={styles.projectTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.project}>
        <div className={styles.projectLogo}>
          <img
            src={`${image}`}
            alt={"yadayada"}
            className={styles.projectLogoDesktop}
          ></img>
          <img
            src={`${image2}`}
            alt={"yadayada"}
            className={styles.projectLogoLaptop}
          ></img>
          <img
            src={`${image3}`}
            alt={"yadayada"}
            className={styles.projectLogoTablet}
          ></img>
          <img
            src={`${image4}`}
            alt={"yadayada"}
            className={styles.projectLogoMobile}
          ></img>
        </div>
        {children}
      </div>
      <div className={styles.projectButtons}>
        <button
          className={styles.revButton}
          onClick={() => {
            window.open(`${websiteLink}`, "_blank");
          }}
        >
          Website Link
        </button>
        <button className={styles.button} onClick={() => close()}>
          Go Back
        </button>
        <button
          className={styles.revButton}
          onClick={() => {
            window.open(`${githubLink}`, "_blank");
          }}
        >
          Github Link
        </button>
      </div>
    </motion.div>
  );
};

interface CardDesProps {
  descriptionTitle: string;
  description: string;
  apis: Array<string>;
  languages: Array<string>;
  cicd: Array<string>;

  v2?: string;
  v1?: string;
  addLinks?: boolean;
}

const CardDesciption = ({
  descriptionTitle,
  description,
  apis,
  languages,
  cicd,
  addLinks,
  v2,
  v1,
}: CardDesProps) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className={styles.projectDescription}>
      <div className={styles.languageContainer}>
        <div className={styles.languageTitle}>
          <h2
            className={`${active === 1 ? `${styles.active}` : ""}`}
            onClick={() => setActive(1)}
          >
            Apis
          </h2>
          <h2
            className={`${active === 0 ? `${styles.active}` : ""}`}
            onClick={() => setActive(0)}
          >
            Languages
          </h2>
          <h2
            className={`${active === 2 ? `${styles.active}` : ""}`}
            onClick={() => setActive(2)}
          >
            CI/CD
          </h2>
        </div>
        {active === 0 && (
          <ul>
            {languages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {active === 1 && (
          <ul>
            {apis.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {active === 2 && (
          <ul>
            {cicd.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.projectInformation}>
        <section>
          <p>
            <span className={styles.projectInsert}>
              {descriptionTitle}&nbsp;
            </span>
            {description}

            {addLinks === true && (
              <div className={styles.projectExtra}>
                <span
                  onClick={() => {
                    window.open(`${v1}`, "_blank");
                  }}
                >
                  Click me for V1
                </span>
                <br />
                <span
                  onClick={() => {
                    window.open(`${v2}`, "_blank");
                  }}
                >
                  Click me for V2
                </span>
              </div>
            )}
            <br />
          </p>
        </section>
      </div>
    </div>
  );
};
