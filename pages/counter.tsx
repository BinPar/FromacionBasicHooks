import React from 'react';

import Header from '../components/Header';
import Counter from '../components/Counter';
import Timer from '../components/Timer';

const PageCounter = (): JSX.Element => (
  <React.Fragment>
    <Header title="Counters" />
    <Counter />
    <br />
    <Counter initialValue={10} />
    <br />
    <br />
    <Timer />
    <br />
    <Timer initialValue={10} />
  </React.Fragment>
);

PageCounter.displayName = 'Page.Counter';

export default PageCounter;
