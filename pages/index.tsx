import React from 'react';
import Link from 'next/link';

import Header from '../components/Header';

const PageIndex = (): JSX.Element => (
  <React.Fragment>
    <Header title="Basic React Hooks" />
    <Link href="/counter">
      <a href="/counter">Counters</a>
    </Link>
    <br />
    <Link href="/responsive">
      <a href="/responsive">Responsive</a>
    </Link>
  </React.Fragment>
);

PageIndex.displayName = 'Page.Index';

export default PageIndex;
