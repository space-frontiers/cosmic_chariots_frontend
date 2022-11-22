import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
// import FeaturesHome from '../partials/Features';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
import Footer from '../components/Footer';
import Legal from '../components/Legal';
import MissionDate from './MissionDate';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome /> */}
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      <Legal />

      {<Footer />}

    </div>
  );
}

export default Home;