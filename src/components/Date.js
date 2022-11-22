import { useMutation } from '@apollo/client';
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../index.css"
import { CREATE_RESERVATION, UPDATE_RESERVATION_MISSIONDATE } from '../utils/mutations';

export default function Date(props) {
    return (
        <><div className="border-4 rounded-md border-blue-100 text-white">
        <div className="bg-blue-100">
        <h3 className=" text-center underline text-3xl text-black ">
          {missionDate.destination}
        </h3>
        <p className="mt-1  text-center text-lg font-medium text-black">
          {missionDate.date}
        </p>
        <p className="mt-3 text-center text-xl font-lg  text-black">
          {missionDate.description}
        </p>
        <a
      
      className="mt-3 mb-4 ml-16 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" id={missionDate._id} onClick={handleClick}
    >
      Start A Reservation
    </a>
       </div>
    </div></>
    )}