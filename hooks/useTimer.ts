import { useEffect } from 'react';

import useCounter from './useCounter';

const useTimer = (initialValue: number): number => {
  const [value, incrementValue] = useCounter(initialValue);
  useEffect(() => {
    const interval = setInterval(incrementValue, 1000);
    return (): void => {
      clearInterval(interval);
    };
  }, []);
  return value;
};

export default useTimer;
