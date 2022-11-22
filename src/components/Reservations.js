import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import ReservationCard from '../components/ReservationCard';
import Auth from '../utils/auth';

export default function Reservations() {
// const reservations = []

// async function getReservations() {
//   let userReservations = await userdata.reservation

//   for(let i=0; i<userReservations.length; i++){
//     let reservationId = userdata.reservation[i]._id
//     reservations.push(reservationId)
//   }
// }

// getReservations()

// console.log(reservations)

const userId = Auth.getProfile().data.email

console.log("userId ", userId)

const { loading, data, err } = useQuery(QUERY_USER, {
    variables: { email: userId },
});

let userdata = data?.user || {};
console.log("userdata ", userdata)

const reservations = [];

  async function getReservations() {
    let userReservations = await userdata.reservation;

    for (let i = 0; i < userReservations.length; i++) {
      let reservationId = userdata.reservation[i]._id;
      reservations.push(reservationId);
    }
  }

  getReservations();

  console.log("reservations ", reservations)

  const reservationPage = reservations.map((reservation) => <ReservationCard reservation={reservation} />)

// let reservationdata = data?.reservation || {};
// console.log(reservationdata)
  

  return (
    <>
      <p>This is from Reservations</p>
      <div>{reservationPage}</div>
    </>
  );
}
