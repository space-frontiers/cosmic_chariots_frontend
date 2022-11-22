import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Footer from '../components/Footer';
import Legal from '../components/Legal';
import MissionDate from "./pages/MissionDate"
import Dining from "./pages/Dining";
import Activity from "./pages/Activity";
import Mission from "./pages/Mission";
import RoomType from "./pages/RoomType";
import Excursion from "./pages/Excursion";

function Booking() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <MissionDate />
        <RoomType />
        <Mission />
        <Excursion />
        <Activity />
        <Dining />


      </main>

      <Legal />

      {<Footer />}

    </div>
  );
}

export default Booking;