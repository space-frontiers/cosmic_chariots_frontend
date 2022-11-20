import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Launch(){
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <h1 className="text-2xl">Fly in Comfort and Style</h1>
              <div class="card p-2 m-2">
                <p>Feb. 12, 2023</p>
                <p>Basic Accomadations</p>
                <ul>Amenities include:
                  <li>Space Bed</li>
                  <li>Luxury Bathroom</li>
                  <li>Storage Space</li>
                </ul> 
                <div>$5,999</div>         
                <button class="btn btn-primary">Click to Choose</button>
              </div>
              <div class="card p-2 m-2">
                <p>Feb 12, 2023</p>
                <p>Premium Suite</p>
                <ul>Amenities include:
                  <li>Your Own View of Space</li>
                  <li>Mini-fridge</li>
                  <li>Luxury Bathroom</li>
                  <li>Storage Space</li>
                </ul>   
                <div>$10,999</div>       
                <button class="btn btn-primary">Click to Choose</button>
              </div>

              <div class="card p-2 m-2">
                <p>Feb 12, 2023</p>
                <p>Armstrong Suite</p>
                <ul>Amenities include:
                  <li>Extra Large Window</li>
                  <li>On-call concierge</li>
                  <li>Living Room</li>
                  <li>Dining Room</li>
                </ul>   
                <div>$15,999</div>       
                <button class="btn btn-primary">Click to Choose</button>
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