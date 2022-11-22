import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RESERVATION } from "../utils/queries";

export default function ReservationCard({reservation}) {
  console.log("id ", reservation);

  const reservationId = reservation;

  const { loading, data, err } = useQuery(QUERY_RESERVATION, {
    variables: { reservationId: reservationId },
  });

  console.log("data ", data);
  return (
    <>
      <p>This is from reservation card</p>
    </>
  );
}
