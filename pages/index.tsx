import React from 'react';
import Link from 'next/link';

import Header from '../components/Header';

const PageIndex = (): JSX.Element => (
  <React.Fragment>
    <Header title="Hello BinPar!" />
    <Link href="/counter">
      <a href="/counter">Counters</a>
    </Link>
  </React.Fragment>
);

PageIndex.displayName = 'Page.Index';

export default PageIndex;
