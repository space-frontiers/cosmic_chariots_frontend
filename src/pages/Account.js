import React from 'react';

import Auth from '../utils/auth';

import AcctHeader from '../components/AcctHeader';
import Footer from '../components/Footer';
import AcctHdrImg from '../images/starship.jpg';
import AccTabs from '../components/AccTabs';

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
  <div className="pt-12 md:pt-16 w-full flex flex-col h-screen ">
    <img src={AcctHdrImg} className="" />
    <h1 className="italic text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 capitalize text-center" data-aos="zoom-y-out">Space Frontiers: <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Cosmic Chariots</span></h1>
    <div >

        <AccTabs />

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