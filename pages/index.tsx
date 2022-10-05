import About from './about';
import Cafes from './cafes';
import Contact from './contact';
import Events from './events';
import Features from './features';
import Footer from './footer';
import Head from 'next/head';
import Nav from './nav';
import type { NextPage } from 'next';
import React from 'react';
import Slide from './slide';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wellington Botanic Garden</title>
        <meta name='description' content='Wellington Botanic Garden' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Nav />
        <Slide />
        <About />
        <Features />
        <Cafes />
        <Events />
        <Contact />
        <Footer />
      </main>

      <footer />
    </div>
  );
};

export default Home;
