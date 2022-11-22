import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const reservation = [
  {
    "reservation": "Basic Accomodations",
    "travelDate": "February 12, 2023",
    "amenityOne": "Space Bed",
    "amenityTwo": "Luxury Bathroom",
    "amenityThree": "Storage Space",
    "amenityFour": "Unlimited Moon Pies",
    "cost": "$5,999",
    "href": "#",
    "imageSrc":
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "imageAlt":
      "Basic Accomodations"
  },
  {
    "reservation": "Premium Suite",
    "travelDate": " February 12, 2023",
    "amenityOne": "Your Own View of Space",
    "amenityTwo": "Mini-Fridge",
    "amenityThree": "Luxury Bathroom",
    "amenityFour": "Storage Space",
    "cost": "$10,999",
    "href": "#",
    "imageSrc":
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "imageAlt":
      "Premium Suite"
  },
  {
    "reservation": "Armstrong Suite",
    "travelDate": "February 12, 2023",
    "amenityOne": "Extra Large Window",
    "amenityTwo": "On-Call Concierge",
    "amenityThree": "Living Room",
    "amenityFour": "Dining Room",
    "cost": "$15,999",
    "href": "#",
    "imageSrc":
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "imageAlt":
      "Armstrong Suite"
  }
]
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
                <p>Basic Accomodations</p>
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