import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default props => (
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Page</title>
    </Head>
    <Header />
    <main>{props.children}</main>
    <Footer />
    {/* language=PostCSS */}
    <style jsx global>{`
      body {
        margin: 2em;
        background-color: silver;
      }
    `}</style>
  </div>
);
