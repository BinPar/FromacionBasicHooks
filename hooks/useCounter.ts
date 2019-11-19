import { useState } from 'react';

const useCounter = (initialValue: number): [number, () => void] => {
  const [value, setValue] = useState(initialValue);
  const incrementValue = (): void => {
    setValue(current => current + 1);
  };
  return [value, incrementValue];
};

export default useCounter;
