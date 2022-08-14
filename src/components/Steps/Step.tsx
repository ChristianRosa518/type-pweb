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
      <div className="stepChanger">
        <button onClick={props.removeChild}>-</button>
        <div>{props.Count}</div>
        <button onClick={props.addChild}>+</button>
      </div>
      <div className="changeAll">
        <button onClick={() => props.setColor(!props.color)}>
          {props.color === false ? 'Color All' : 'Remove Color'}
        </button>
      </div>
    </div>
  );
}

interface StepProps {
  color: boolean;
  number?: number;
}
const Step = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);

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
      <FirstStep color={color} />
      <SecondStep color={color} />
      <ThirdStep color={color} />
      <FourthStep color={color} />
      <FifthStep color={color} />
      <SixthStep color={color} />
    </div>
  );
};

const FirstStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(75, 80));
    setFinalValue(getRandomArbitraryStringPercent(90, 95));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);

  // Framer-motion error with types.
  // Or maybe i'm too lazy to find a fix. cause I have the types here
  // but I still get the error
  let firstVar: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={firstVar}
      className={`firstStep ${
        active ? 'firstStepLock' : '' || color === true ? 'firstStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};

const SecondStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(55, 58));
    setFinalValue(getRandomArbitraryStringPercent(70, 74));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);
  let Var: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`secondStep ${
        active ? 'secondStepLock' : '' || color === true ? 'secondStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};

const ThirdStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(44, 45));
    setFinalValue(getRandomArbitraryStringPercent(53, 54));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);

  let Var: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`thirdStep ${
        active ? 'thirdStepLock' : '' || color === true ? 'thirdStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};

const FourthStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(33, 37));
    setFinalValue(getRandomArbitraryStringPercent(39, 43));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);
  let Var: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`fourthStep ${
        active ? 'fourthStepLock' : '' || color === true ? 'fourthStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};

const FifthStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(14, 23));
    setFinalValue(getRandomArbitraryStringPercent(24, 32));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);
  let Var: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`fifthStep ${
        active ? 'fifthStepLock' : '' || color === true ? 'fifthStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};
const SixthStep = ({ color }: StepProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [firstValue, setFirstValue] = React.useState<string>('');
  const [finalValue, setFinalValue] = React.useState<string>('');
  const [duration, setDuration] = React.useState<number>(0);

  function getRandomArbitraryStringPercent(min: number, max: number) {
    let number: number = Math.random() * (max - min) + min;
    let stringed: string = String(number);
    let finishString: string = stringed.concat('%');
    return finishString;
  }
  function getRandomArbitraryNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  React.useEffect(() => {
    setFirstValue(getRandomArbitraryStringPercent(3, 5));
    setFinalValue(getRandomArbitraryStringPercent(6, 13));
    setDuration(getRandomArbitraryNum(7, 10));
  }, []);

  let Var: any = {
    animate: {
      width: [firstValue, finalValue, firstValue],
      transition: { duration: duration, repeat: Infinity },
    },
  };
  return (
    <motion.div
      id={'initialOne'}
      animate={'animate'}
      variants={Var}
      className={`sixthStep ${
        active ? 'sixthStepLock' : '' || color === true ? 'sixthStepLock' : ''
      }`}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
};
