
// import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RESERVATION } from "../utils/queries";

export default function ReservationCard({ id }) {
  const reservationId = id;

  const { loading, data, err } = useQuery(QUERY_RESERVATION, {
    variables: { reservationId: reservationId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return `Error! ${err}`;
  }

  let cardData = (<p></p>)

  console.log ("data 23", data)

  if(data.reservation != null){
    let excursions = "No Excursions Booked";
    if (data.reservation.excursion) {
      const array = [];
      for (let i = 0; i < data.reservation.excursion.length; i++) {
        array.push(data.reservation.excursion[i].excursion);
      }
      excursions = array.toString();
    }
  
    let activities = "No Activities Booked";
    if (data.reservation.on_board_activity) {
      const array = [];
      for (let i = 0; i < data.reservation.on_board_activity.length; i++) {
        array.push(data.reservation.on_board_activity[i].on_board_activity);
      }
      activities = array.toString();
    }
  
    let dining = "No Packages Booked";
    if (data.reservation.dining_package) {
      const array = [];
      for (let i = 0; i < data.reservation.dining_package.length; i++) {
        array.push(data.reservation.dining_package[i].dining_package);
      }
      dining = array.toString();
    }

    cardData = (<div class="max-w-lg w-full lg:max-w-full lg:flex">
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          Launch Date {data.reservation.mission.date}
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          {data.reservation.mission.destination}
        </div>
        <p class="text-gray-700 text-base">
          Suite: {data.reservation.room_type.suite}
        </p>
        <p class="text-gray-700 text-base">
          Planet Excursions Booked: {excursions}
        </p>
        <p class="text-gray-700 text-base">
          On-Board Activities Scheduled: {activities}
        </p>
        <p class="text-gray-700 text-base">Dining Packages: {dining}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">See you on board soon!</p>
        </div>
        <div><button>Delete</button></div>
      </div>
    </div>
  </div>)
  }

  return (
    <>
      <div>{cardData}</div>
    </>
  );
}
