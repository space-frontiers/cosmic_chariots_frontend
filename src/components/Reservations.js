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

console.log("data 32 ", data)

let reservationCard = "No Reservations"

if(data){
  console.log("data ", data)
  let userdata = data.user.reservation
  console.log("userdata ", userdata)
  reservationCard = userdata.map((userdata) => (<ReservationCard key={userdata._id} id={userdata._id}/>))
}


  return (
    <>
      <div>
        {reservationCard}
      </div>
    </>
  );
}
