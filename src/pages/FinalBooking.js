// import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { QUERY_RESERVATION } from "../utils/queries"
import { ADD_RESERVATION } from "../utils/mutations";
import { useLocation } from "react-router-dom";


export default function FinalBooking(props) {
  const location = useLocation()
  const [queryReservation] = useQuery(QUERY_RESERVATION)
  const [addReservation] = useMutation(ADD_RESERVATION)


  let cardData = (<p></p>)

  console.log ("card data", cardData)

        try {
            const 
        }
    
        try {
          const { data } = addReservation({});
    
        //   reservationId = data._id
          console.log("reservationId", data)
          console.log("props", props)
          console.log("Success!")
    

        }
        catch (err) {
        console.error(JSON.stringify(err,null,2));
        }
        return (
            <>
                cardData = (<div className="max-w-lg w-full lg:max-w-full lg:flex">
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
    
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">See you on board soon!</p>
        </div>
        <div><button>Delete</button></div>
      </div>
    </div>
  </div>)

              <p>{cardData}</p>
              <p className="text-gray-700 text-base">
                  Suite: {cardData.reservation.room_type.suite}
                </p>
            </>
          );
    


  }

 
  
