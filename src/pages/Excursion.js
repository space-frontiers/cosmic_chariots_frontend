import { useQuery } from '@apollo/client';
import React from "react";
import "../index.css"
import { QUERY_EXCURSIONS } from '../utils/queries';




export default function Excursion() {
  const { loading, data } = useQuery(QUERY_EXCURSIONS);
  const excursion = data?.excursions || [];
  console.log("data ", data)
  console.log("dining", excursion)

  return (
 
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
        <h2 className="text-center text-5xl text-black mb-5">Excursions</h2>
        <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-white"> */}
          {excursion.map((excursion) => (
            <div className="border-4 rounded-md border-blue-100 text-white">
                <a key={excursion._id} href={excursion.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-blue-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={excursion.imageSrc}
                      alt={excursion.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </a>
                <div className="bg-blue-100">
                <h3 className=" text-center underline text-3xl text-black ">
                  {excursion.excursion}
                </h3>
                <p className="mt-1  text-center text-lg font-medium text-black">
                  {excursion.description}
                </p>
                <p className="mt-3 text-center text-xl font-lg  text-black">
                  {excursion.cost}
                </p>
                <a
              href="#"
              className="mt-3 mb-4 ml-16 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Click to Add
            </a>
               </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
