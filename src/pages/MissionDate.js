import { useQuery, useMutation } from '@apollo/client';
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "../index.css"
import { QUERY_MISSIONS } from '../utils/queries';
import Header from '../components/Header';
import Legal from '../components/Legal';
import Footer from '../components/Footer';
import { CREATE_RESERVATION } from '../utils/mutations';


export default function MissionDate(props) {
  const { loading, data } = useQuery(QUERY_MISSIONS, {});
  const missionDate = data?.missionDates|| [];
  console.log("data", data)
  console.log("mission dates", missionDate)
  const location = useLocation();

  console.log("props", location)

  const locArray = []

  for(let i=0;i<missionDate.length;i++){
    if (missionDate[i].location === location.state.name){
      locArray.push(missionDate[i])
    }
  }
  console.log("location array", locArray)

  
  // const createRes = () => {
  //   const [createReservation, { error }] = useMutation(CREATE_RESERVATION)


  // }


  


  return (
 <>
  <Header />
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
        <h2 className="text-center text-5xl text-black mb-5">Your Mission, Should You Choose to Accept</h2>
        <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">

          {locArray.map((missionDate) => (

            <div className="border-4 rounded-md border-blue-100 text-white">
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
              href="#"
              className="mt-3 mb-4 ml-16 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" onClick={() => {handleClick();}}
            >
              Start A Reservation
            </a>
               </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  <Legal />
  <Footer />
 </>

  );
}
