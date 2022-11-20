import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />

      </main>

      {/* <Banner /> */}

      {<Footer />}

    </div>
  );
}

export default Home;