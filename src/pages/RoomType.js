import { useQuery } from '@apollo/client'
import React from "react";
import "../index.css";
import { QUERY_ROOMTYPES } from '../utils/queries';

export default function RoomType() {
  const { loading, data } = useQuery(QUERY_ROOMTYPES);
  const roomType = data?.roomTypes || [];
  console.log("data ", data)
  console.log("room type", roomType)

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">


      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <h1 className="text-2xl">Fly in Comfort and Style</h1>
              {roomType.map((roomType) => (
                <div class="card p-2 m-2">
                  {/* <p>{roomType.travelDate}</p> */}
                  <p>{roomType.suite}</p>
                  {/* <a
                    key={roomType._id}
                    href={roomType.href}
                    className="group"
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-blue-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={roomType.imageSrc}
                        alt={roomType.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                  </a> */}
                  <ul>
                    Amenities include:
                    <li>{roomType.amenities_1}</li>
                    <li>{roomType.amenities_2}</li>
                    <li>{roomType.amenities_3}</li>
                    <li>{roomType.amenities_4}</li>
                  </ul>
                  <div>{roomType.cost}</div>
                  <button class="btn btn-primary mt-3 mb-4 ml-16 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Click to Choose</button>
                </div>
              ))}
              {/* <div class="card p-2 m-2">
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
              </div> */}
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}

      {/* {<Footer />} */}
    </div>
  );
}
