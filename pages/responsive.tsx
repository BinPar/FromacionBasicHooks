import React from 'react';

import Header from '../components/Header';
import useWindowSize from '../hooks/useWindowSize';

const Responsive = (): JSX.Element => {
  const { width, height } = useWindowSize();
  return (
    <React.Fragment>
      <Header title="Responsive Page" />
      <span>
        Width: 
        {width}
      </span>
      <br />
      <span>
        Height: 
        {height}
      </span>
    </React.Fragment>
  );
};

export default Responsive;
