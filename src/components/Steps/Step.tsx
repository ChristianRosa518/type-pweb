import React from "react";
import { motion } from "framer-motion";
import "./Steps.css";

interface StepContainerProps {
  Count: number;
  color: boolean;
  totalSteps: number;
  coloredSteps: number;
  colorStepAdd: () => void;
  colorDecrease: () => void;
}

export function StepContainer(props: StepContainerProps) {
  const children = [];

  for (var i = 0; i < props.Count; i += 1) {
    children.push(
      <Step
        color={props.color}
        totalSteps={props.totalSteps}
        coloredSteps={props.coloredSteps}
        colorAdd={props.colorStepAdd}
        colorDecrease={props.colorDecrease}
        key={i}
        number={i}
      />
    );
  }

  return (
    <div>
      return <div className="absolute">{children}</div>;
    </div>
  );
}

interface StepChangerProps {
  color: boolean;
  setColor: (e: boolean) => void;
  Count: number;
  removeChild: () => void;
  addChild: () => void;
  clear: HTMLInputElement;
}

export function StepChanger(props: StepChangerProps) {
  return (
    <div>
      <div className={`${props.color ? "stepChangerLock" : "stepChanger"}`}>
        <button onClick={props.removeChild}>-</button>
        <div>{props.Count}</div>
        <button onClick={props.addChild}>+</button>
      </div>
      <div className={`changeAll ${props.color ? "changeAllLock" : ""}`}>
        <button onClick={() => props.setColor(!props.color)}>
          {props.color === false ? "Color All" : "Remove Color"}
        </button>
        {/* Look into USEREF, useEFFECT. */}
        {/* Would love to add clear functionality, but I don't think it is possible. The issue being each individual step having individual states. how would I update all of those child's states with one command from a parent container?  */}
        {/* <button> Clear </button> */}
      </div>
    </div>
  );
}

interface StepConProps {
  color: boolean;
  number: number;
  totalSteps: number;
  coloredSteps: number;
  colorAdd: () => void;
  colorDecrease: () => void;
}
interface StepProps {
  totalSteps: number;
  coloredSteps: number;
  color: boolean;
  getString: (min: number, max: number) => string;
  getNum: (min: number, max: number) => number;
  colorAdd: () => void;
  colorDecrease: () => void;
}
const Step = ({
  color,
  totalSteps,
  coloredSteps,
  colorAdd,
  colorDecrease,
}: StepConProps) => {
  const [active, setActive] = React.useState<boolean>(false);

  function getNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function getString(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat("%");
    return finishString;
  }
  function toggleColor() {
    if (active === false) {
      setActive(!active);
      colorAdd();
    } else {
      setActive(!active);
      colorDecrease();
    }
  }
  return (
    <div className={"step"}>
      <div
        className={`initialStep ${
          active
            ? "initialStepLock"
            : "" || color === true
            ? "initialStepLock"
            : ""
        }
        }`}
      ></div>
      <FirstStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
      <SecondStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
      <ThirdStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
      <FourthStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
      <FifthStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
      <SixthStep
        color={color}
        getString={getString}
        getNum={getNum}
        totalSteps={totalSteps}
        coloredSteps={coloredSteps}
        colorAdd={colorAdd}
        colorDecrease={colorDecrease}
      />
    </div>
  );
};

const FirstStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(75, 80),
    final: getString(90, 95),
    duration: getNum(7, 10),
    active: false,
  });

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }
  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`firstStep ${
        state.active ? "firstStepLock" : "" || color ? "firstStepLock" : ""
      }`}
    ></motion.div>
  );
};

const SecondStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(55, 58),
    final: getString(70, 74),
    duration: getNum(7, 10),
    active: false,
  });

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`secondStep ${
        state.active
          ? "secondStepLock"
          : "" || color === true
          ? "secondStepLock"
          : ""
      }`}
    ></motion.div>
  );
};

const ThirdStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(44, 45),
    final: getString(53, 54),
    duration: getNum(7, 10),
    active: false,
  });

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`thirdStep ${
        state.active
          ? "thirdStepLock"
          : "" || color === true
          ? "thirdStepLock"
          : ""
      }`}
    ></motion.div>
  );
};

const FourthStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(33, 37),
    final: getString(39, 43),
    duration: getNum(7, 10),
    active: false,
  });

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`fourthStep ${
        state.active
          ? "fourthStepLock"
          : "" || color === true
          ? "fourthStepLock"
          : ""
      }`}
    ></motion.div>
  );
};

const FifthStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(14, 23),
    final: getString(24, 32),
    duration: getNum(7, 10),
    active: false,
  });

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`fifthStep ${
        state.active
          ? "fifthStepLock"
          : "" || color === true
          ? "fifthStepLock"
          : ""
      }`}
    ></motion.div>
  );
};
const SixthStep = ({
  color,
  getString,
  getNum,
  colorAdd,
  colorDecrease,
}: StepProps) => {
  const [state, setState] = React.useState<{
    first: string;
    final: string;
    duration: number;
    active: boolean;
  }>({
    first: getString(3, 5),
    final: getString(6, 13),
    duration: getNum(7, 10),
    active: false,
  });

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  function changeState() {
    if (state.active === false) {
      setState({ ...state, active: true });
      colorAdd();
    } else {
      setState({ ...state, active: false });
      colorDecrease();
    }
  }

  return (
    <motion.div
      id={"initialOne"}
      animate={"animate"}
      variants={Var}
      className={`sixthStep ${
        state.active
          ? "sixthStepLock"
          : "" || color === true
          ? "sixthStepLock"
          : ""
      }`}
    ></motion.div>
  );
};
