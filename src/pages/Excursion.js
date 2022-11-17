
//   This example requires some changes to your config:
  
  
//   tailwind.config.js
//   module.exports = {
    
//     plugins: [
    
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }

import React from "react";
import "../index.css"


const excursion = [
    {
      id: 1,
      excursion: 'Rover Mission',
      description: 'Our most popular excursion - Head out for a once-in-a-lifetime drive around a whole new planet!',
      href: '#',
      cost: '$119/person',
      imageSrc: 'https://live.staticflickr.com/65535/52503464748_41673f2820_n.jpg',
      imageAlt: 'Mars Rover',
    },
    {
      id: 2,
      excursion: 'Carrot Top Concert',
      description: "Who doesn/'t want to see Carrot Top? Especially in space? Come see this incredible artist before the venue is outta space!",
      href: '#',
      cost: '$75/person',
      imageSrc: 'https://live.staticflickr.com/65535/52502425607_8009099d0c_b.jpg',
      imageAlt: 'Carrot Top with various items in the backgrounds',
    },
    {
      id: 3,
      excursion: 'Moon Hike',
      href: '#',
      description: "Let's get sweaty in our space suits! Take a 3 hour round into one of Mars' most beatiful cliff bottoms. Moderate Hike.",
      cost: '$85/person',
      imageSrc: 'https://live.staticflickr.com/65535/52502432987_e88a47dbb7.jpg',
      imageAlt: 'person walking on the moon with Earth in the background',
    },
    {
      id: 4,
      excursion: 'Ghost Tour',
      href: '#',
      description: "Those who have left us haven't always left us for good! Come meet the spirits that haunt our solar system!",
      cost: '$99/person',
      imageSrc: '',
      imageAlt: 'ghost tour picture',
    },
    
  ]

//   MJ EXCURSION SEED
// [
//     {
//         "excursion": "Rover Mission",
//         "description": "Our most popular excursion - Head out for a once-in-a-lifetime drive around the a whole new planet!",
//         "cost": "$119/person"       
//     },
//     {
//         "excursion": "Carrot Top LIVE!",
//         "description": "Do you know what's better than a Carrot Top show? A Carrot Top show in SPACE! Come see this incredible artist before the venue is outta space!",
//         "cost": "$75/person" 
//     },
//     {
//         "excursion": "Planetary Hike",
//         "description": "When hiking on a new planet, you never know what you might encounter. A crater that has proof of live, an ancient water bed now dry, or a really cool rock. Come join to see what you find.",
//         "cost": "$85/person" 
//     },
//     {
//         "excursion": "Ghost Tour",
//         "description": "Those who have left our planet... and then left our world haven’t always left us for good! Come meet the spirits that haunt our solar system!",
//         "cost": "$99/person" 
//     }
// ]
  
  export default function Excursion() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Excursions</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {excursion.map((excursion) => (
                <>
              <a key={excursion.id} href={excursion.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={excursion.imageSrc}
                    alt={excursion.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <h3 className="mt-4 text-sm text-gray-700">{excursion.excursion}</h3>
              <p className="mt-1 text-lg font-medium text-grey-900">{excursion.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{excursion.cost}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }
  