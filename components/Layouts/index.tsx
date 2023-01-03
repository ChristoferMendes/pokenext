import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="A Magic the gathering collection list!" />
        <link rel="icon" href="images/icon.png" />
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
