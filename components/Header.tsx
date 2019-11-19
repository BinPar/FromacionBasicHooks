import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <Link href="/">
      <a href="/">Back</a>
    </Link>
    <br />
    <br />
  </React.Fragment>
);

export default Header;
