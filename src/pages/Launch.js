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
              <h1 className="text-2xl">Your Mission, Should You Choose to Accept...</h1>
              <div class="card p-2 m-2">
                <p>Feb. 12, 2023</p>
                <p>One small step into space: A Moon Adventure</p>
                <ul>Activites include:
                  <li>Out of this world dining</li>
                  <li>Text 2</li>
                  <li>Text 3</li>
                  <li>Text 4</li>
                </ul>          
                <button class="btn btn-primary">Click to Choose</button>
              </div>
              <div class="card p-2 m-2">
                <p>May 20, 2023</p>
                <p>One small step into space: A Moon Adventure</p>
                <ul>Activites include:
                  <li>Out of this world dining</li>
                  <li>Text 2</li>
                  <li>Text 3</li>
                  <li>Text 4</li>
                </ul>          
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