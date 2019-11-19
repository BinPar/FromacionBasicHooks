import React from 'react';

import Header from '../components/Header';
import Counter from '../components/Counter';

const PageCounter = (): JSX.Element => (
  <React.Fragment>
    <Header title="Counters" />
    <Counter />
    <br />
    <Counter initialValue={10} />
  </React.Fragment>
);

PageCounter.displayName = 'Page.Counter';

export default PageCounter;
