import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps): JSX.Element => {
  const [value, setValue] = useState(initialValue);
  const incrementValue = (): void => {
    setValue(value + 1);
  };
  return (
    <button type="button" onClick={incrementValue}>{value}</button>
  );
};

export default Counter;
