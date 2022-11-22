import { useQuery, useMutation } from '@apollo/client'
import React,{ useState } from "react";
import "../index.css";
import { QUERY_ROOMTYPES } from '../utils/queries';
import { UPDATE_RESERVATION_ROOM_TYPE } from '../utils/mutations';
import { useLocation, useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Legal from '../components/Legal';
import Footer from '../components/Footer';

export default function RoomType({reservationId}) {
  const [myRoom, setMyRoom] = useState({})

  const location = useLocation();
  // console.log("reservationId", location.state.reservationId)
  const resId = location.state.reservationId
  console.log("resId", resId)

  const navigate = useNavigate();

  const { loading, data } = useQuery(QUERY_ROOMTYPES);
  const roomType = data?.roomTypes || [];
  console.log("roomType", roomType)

  const toFinalBooking = (resId) => {
    navigate('/finalbooking', {state:{id:1, reservationId: resId}})
  }

  const [updateReservationRoomType, { error }] = useMutation(UPDATE_RESERVATION_ROOM_TYPE, {
    variables: {reservationId: reservationId, input: {_id: myRoom._id, suite: myRoom.suite}},
});

  const  handleClick = async (event) => {
    let clickedRoom = event.target.id
    console.log("clickedRoom", clickedRoom)

    console.log("roomType", roomType)

    const roomSelected = roomType.find(obj => {
      return obj._id === clickedRoom;
    })

    console.log("roomSelected", roomSelected)

    console.log("room", myRoom)

    try {
      const { data } = await updateReservationRoomType({
        variables: {reservationId: resId, input: {_id: roomSelected._id, suite: roomSelected.suite}}
      })

      toFinalBooking(resId)
    }
    catch (err) {
    console.error(JSON.stringify(err,null,2));
    }

    // navigate('/finalbooking', {reservationId: reservationId})

  }


  return (
    <>
    <Header />
    <div className="bg-white">


      {/*  Page content */}
      <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <section className="bg-gradient-to-b from-gray-100 to-white"> */}
        {/* <section className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
  
          {/* <div className="max-w-6xl mx-auto px-4 sm:px-6"> */}
          {/* <div> */}
            {/* <div className="pt-32 pb-12 md:pt-40 md:pb-20"> */}
            {/* <div> */}
              <h1 className="text-2xl text-center">Fly in Comfort and Style</h1>
              <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm"></div>
              {/* <h1 text-center text-5xl text-black mb-5>Fly in Comfort and Style</h1> */}
              {roomType.map((roomType) => (
                <div class="border-4 rounded-md border-blue-100 text-black">
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
                  <button class="mt-3 mb-4 ml-16 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" id={roomType._id} onClick={handleClick}>Click to Choose</button>
                </div>
              ))}
              </div>
              
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
            {/* </div> */}
          {/* </div> */}
        {/* </section> */}
      </main>

      {/* <Banner /> */}

      {<Footer />}
    </div>

    </>

  );
}
