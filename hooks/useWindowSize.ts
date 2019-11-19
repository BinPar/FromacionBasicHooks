import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

const defaultSize = { width: 0, height: 0 };

const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState(defaultSize);
  const onResize = (): void => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect((): () => void => {
    onResize();
    window.addEventListener('resize', onResize);
    return (): void => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
};

export default useWindowSize;
