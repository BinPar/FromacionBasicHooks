import React from 'react';

import useCounter from '../hooks/useCounter';

export interface InitialNumericValue {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: InitialNumericValue): JSX.Element => {
  const [value, incrementValue] = useCounter(initialValue);
  return (
    <button type="button" onClick={incrementValue}>{value}</button>
  );
};

export default Counter;
