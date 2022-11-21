import React from 'react';

import Auth from '../utils/auth';

import AcctHeader from '../components/AcctHeader';
import Footer from '../components/Footer';
import AcctHdrImg from '../images/starship.jpg';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      {/*  Site header */}
      <AcctHeader />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <section
          class="relative flex items-start justify-start h-screen mb-12 overflow-hidden"
        >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

{/* Hero content */}
<div >

  {/* Section header */}
  <div className="pt-12 md:pt-16">
    <h1 className="italic text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 capitalize" data-aos="zoom-y-out">Hello, {Auth.getProfile().data.first_name}:  {'\n'}<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Cosmic Chariots</span></h1>
    <div className="max-w-3xl mx-auto">
      <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Welcome to Space Frontiers, home of the Cosmic Chariots Starship!</p>

      <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Space Adventures Now Open!<br/>What Mission Will You Accept?</p>
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
        <div class="flex justify-center px-1">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src="" alt=""/>
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Lunar Leap</h5>
              <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">7 Day Experience</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center px-1">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src="" alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Mars Explorer</h5>
              <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">14 Day Experience</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>

</div>
        </section>

      </main>

      {/* <Banner /> */}

      {<Footer />}

    </div>
  );
}

export default Home;