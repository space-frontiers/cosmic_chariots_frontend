//   This example requires some changes to your config:
  
  
//   tailwind.config.js
//   module.exports = {
    
//     plugins: [
    
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }

import { useQuery } from '@apollo/client';
import React from "react";
import "../index.css"
import { QUERY_DININGPACKAGES } from '../utils/queries';


// const dining = [
//     {
//         "package": "Wine and Dine",
//         "description": "Our on-board sommelier knows exactly what wines to pair with stargazing... and dinner too. Every night, you'll recieve a glass of the perfect wine to go with your meal and one smartly paired with dessert.",
//         "cost": "$59/night"
//     },
//     {
//         "package": "There's Always More Space for Food!",
//         "description": "Come to our gourmet buffet of irresistible delicacies that are out of this world. Every night is a different feast, with exciting options for the whole family to choose from.",
//         "cost": "$49/night"
//     },
//     {
//         "package": "Literally Just Stake Every Night",
//         "description": "For our meat-eaters, we know you want all the joys of a hearty Earth meal from the safty of our ship. Come enjoy the finest cuts while you drift through the galaxy",
//         "cost": "$69/night"
//     }
// ]

//   MJ DINING SEED
// // [
//     {
//         "package": "Wine and Dine",
//         "description": "Our on-board sommelier knows exactly what wines to pair with stargazing... and dinner too. Every night, you'll recieve a glass of the perfect wine to go with your meal and one smartly paired with dessert.",
//         "cost": "$59/night"
//     },
//     {
//         "package": "There's Always More Space for Food!",
//         "description": "Come to our gourmet buffet of irresistible delicacies that are out of this world. Every night is a different feast, with exciting options for the whole family to choose from.",
//         "cost": "$49/night"
//     },
//     {
//         "package": "Literally Just Stake Every Night",
//         "description": "For our meat-eaters, we know you want all the joys of a hearty Earth meal from the safty of our ship. Come enjoy the finest cuts while you drift through the galaxy",
//         "cost": "$69/night"
//     }
// ]
  
  export default function Dining() {
    const { loading, data } = useQuery(QUERY_DININGPACKAGES);
    const dining = data?.diningPackages || [];
    console.log("data ", data)
    console.log("dining", dining)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">DINING PACKAGES</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {dining.map((dining) => (
                <>
              <a key={dining._id}  className="group">
                {/* <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  {/* <img
                    src={excursion.imageSrc}
                    alt={excursion.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                // </div> */} 
              </a>
              <h3 className="mt-4 text-sm text-gray-700">{dining.package}</h3>
              <p className="mt-1 text-lg font-medium text-grey-900">{dining.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{dining.cost}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }