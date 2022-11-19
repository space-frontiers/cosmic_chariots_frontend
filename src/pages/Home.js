import React from 'react';

import Header from '../components/Header';
import HeroHome from '../partials/HeroHome';
// import FeaturesHome from '../partials/Features';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
import Footer from '../components/Footer';
// import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <p>Hero Home Below</p>
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>

        <HeroHome />

        
        {/* <FeaturesHome /> */}
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/* <Banner /> */}

    </div>
  );
}

export default Home;