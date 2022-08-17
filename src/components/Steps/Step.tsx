import React from 'react';
import { motion } from 'framer-motion';
import './Steps.css';

interface StepContainerProps {
  Count: number;
  color: boolean;
}

export class StepContainer extends React.Component<StepContainerProps> {
  state = {
    numSteps: this.props.Count,
  };

  render() {
    const children = [];

    for (var i = 0; i < this.props.Count; i += 1) {
      children.push(<Step color={this.props.color} key={i} number={i} />);
    }

    return <div className="absolute">{children}</div>;
  }
}

interface StepChangerProps {
  color: boolean;
  setColor: (e: boolean) => void;
  Count: number;
  removeChild: () => void;
  addChild: () => void;
}

export function StepChanger(props: StepChangerProps) {
  return (
    <div>
      <div className={`${props.color ? 'stepChangerLock' : 'stepChanger'}`}>
        <button onClick={props.removeChild}>-</button>
        <div>{props.Count}</div>
        <button onClick={props.addChild}>+</button>
      </div>
      <div className={`changeAll ${props.color ? 'changeAllLock' : ''}`}>
        <button onClick={() => props.setColor(!props.color)}>
          {props.color === false ? 'Color All' : 'Remove Color'}
        </button>
      </div>
    </div>
  );
}

interface StepConProps {
  color: boolean;
  number: number;
}
interface StepProps {
  color: boolean;
  getString: (min: number, max: number) => string;
  getNum: (min: number, max: number) => number;
}
const Step = ({ color }: StepConProps) => {
  const [active, setActive] = React.useState<boolean>(false);

  function getNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function getString(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  return (
    <div className={'step'}>
      <div
        className={`initialStep ${
          active
            ? 'initialStepLock'
            : '' || color === true
            ? 'initialStepLock'
            : ''
        }`}
        onClick={() => setActive(!active)}
      ></div>
      <FirstStep color={color} getString={getString} getNum={getNum} />
      <SecondStep color={color} getString={getString} getNum={getNum} />
      <ThirdStep color={color} getString={getString} getNum={getNum} />
      <FourthStep color={color} getString={getString} getNum={getNum} />
      <FifthStep color={color} getString={getString} getNum={getNum} />
      <SixthStep color={color} getString={getString} getNum={getNum} />
    </div>
  );
};

const FirstStep = ({ color, getString, getNum }: StepProps) => {
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
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`firstStep ${
        state.active ? 'firstStepLock' : '' || color ? 'firstStepLock' : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};

const SecondStep = ({ color, getString, getNum }: StepProps) => {
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

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`secondStep ${
        state.active
          ? 'secondStepLock'
          : '' || color === true
          ? 'secondStepLock'
          : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};

const ThirdStep = ({ color, getString, getNum }: StepProps) => {
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

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`thirdStep ${
        state.active
          ? 'thirdStepLock'
          : '' || color === true
          ? 'thirdStepLock'
          : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};

const FourthStep = ({ color, getString, getNum }: StepProps) => {
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

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`fourthStep ${
        state.active
          ? 'fourthStepLock'
          : '' || color === true
          ? 'fourthStepLock'
          : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};

const FifthStep = ({ color, getString, getNum }: StepProps) => {
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

  let Var: any = {
    animate: {
      width: [state.first, state.final, state.first],
      transition: { duration: state.duration, repeat: Infinity },
    },
  };

  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`fifthStep ${
        state.active
          ? 'fifthStepLock'
          : '' || color === true
          ? 'fifthStepLock'
          : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};
const SixthStep = ({ color, getString, getNum }: StepProps) => {
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

  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`sixthStep ${
        state.active
          ? 'sixthStepLock'
          : '' || color === true
          ? 'sixthStepLock'
          : ''
      }`}
      onClick={() => setState({ ...state, active: !state.active })}
    ></motion.div>
  );
};
