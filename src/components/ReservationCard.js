// import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RESERVATION } from "../utils/queries";

export default function ReservationCard({id}) {
  const reservationId = id;

  console.log("reservationId ", reservationId)

  const { loading, data, err } = useQuery(QUERY_RESERVATION, {
    variables: { reservationId: reservationId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return `Error! ${err}`;
  }

  console.log("card data ", data)

  let excursions = 'No Excursions Booked'
  if(data.reservation.excursion){
    const array = []
    for(let i=0;i<data.reservation.excursion.length; i++){
      array.push(data.reservation.excursion[i].excursion)
    }
    excursions = array.toString()
  }

  let activities = 'No Activities Booked'
  if(data.reservation.on_board_activity){
    const array = []
    for(let i=0;i<data.reservation.on_board_activity.length; i++){
      array.push(data.reservation.on_board_activity[i].on_board_activity)
    }
    activities = array.toString()
  }


  let dining = 'No Packages Booked'
  if(data.reservation.dining){
    const array = []
    for(let i=0;i<data.reservation.dining_package.length; i++){
      array.push(data.data.reservation.dining_package[i].dinging_package)
    }
    dining = array.toString()
  }


  return (
    <>
      {/* <p>This is from reservation card - {data.reservation.mission.date}</p>
      <p>{data.reservation.mission.destination}</p>
      <p>{data.reservation.room_type.suite}</p>
      <p>{data.reservation.excursion[0].excursion}</p>
      <p>{data.reservation.on_board_activity[0].on_board_activity}</p>
      <p>{data.reservation.dining_package[0].dining_package}</p> */}

      <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        </svg>
        {data.reservation.mission.date}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">{data.reservation.mission.destination}</div>
      <p class="text-gray-700 text-base">Suite: {data.reservation.room_type.suite}</p>
      <p class="text-gray-700 text-base">Planet Excursions Booked: {excursions}</p>
      <p class="text-gray-700 text-base">On-Board Activities Scheduled: {activities}</p>
      <p class="text-gray-700 text-base">Dining Packages: {dining}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">See you on board soon!</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
