import React from 'react';

import { InitialNumericValue } from './Counter';
import useTimer from '../hooks/useTimer';

const Timer = ({ initialValue = 0 }: InitialNumericValue): JSX.Element => {
  const value = useTimer(initialValue);
  return (
    <span>{value}</span>
  );
};

export default Timer;
