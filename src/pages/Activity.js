import { useQuery } from "@apollo/client";
import React from "react";
import "../index.css";
import { QUERY_ACTIVITY } from '../utils/queries';



export default function Activity() {
  const { loading, data } = useQuery(QUERY_ACTIVITY);
  const activity = data?.onBoardActivities || [];
  console.log("data ", data)
  console.log("activity", activity)
  
  
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">On Board Activities</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-8">
          {activity.map((activity) => (
            <>
              <div className="border-4 rounded-md border-blue-100 text-black lg:object-scale-down md:object-scale-down">
                <a key={activity._id} href={activity.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={activity.imageSrc}
                      alt={activity.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </a>
                <h3 className="mt-4 text-sm text-gray-700">
                  {activity.activity}
                </h3>
                <p className="mt-1 text-lg text-justify font-medium text-grey-900">
                  {activity.description}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {activity.cost}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
