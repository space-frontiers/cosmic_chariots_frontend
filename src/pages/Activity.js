import { useQuery } from '@apollo/client';
import React from "react";
import "../index.css"
// import { QUERY_ACTIVIY } from '../utils/queries';


const activity = [
    {

        "on_board_activity": "Zero Gravity Party",
        "description": "Come to the Jupiter Lounge and experience what it's like to be weightless for a night of fun. We'll turn off the gravity and turn on the tunes as our on-board DJ makes our night rock",
        "cost": "$99/person",
        "href" : "#",
        "imageSrc" : "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "imageAlt": "Concert arena packed with party goers having the night of their life",
    },
    {
        "on_board_activity": "Freeze-Dried Alcohol Tasting",
        "description": "You've had cocktails before, but have you tasted them in space? Our expert mixologists will create an afternoon of surprising flavors as you rocket through space.",
        "cost": "$89/person",
        "href" : "#",
        "imageSrc" : "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmslMjBmbGlnaHRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "imageAlt": "drinks clashing against each other",
    },
    {
        "on_board_activity": "Mission Control Contact",
        "description": "Does your cell phone not provide service off-planet? No problem. Let home know how much fun your having by booking time with one of our video connections that can route you right home.",
        "cost": "$29/hour",
        "href" : "#",
        "imageSrc" : "https://media.istockphoto.com/id/1130344538/photo/a-hand-is-holding-smartphone-with-starry-sky-photo-a-man-is-taking-a-photo-starry-sky-at.jpg?b=1&s=170667a&w=0&k=20&c=t2pQi6L6_VUY0ikPh0tursKT0xXzvsBoAkbvQjgGCEM=",
        "imageAlt": "person holding a phone to the nights sky",
    }
]

export default function Activity() {
  // const { loading, data } = useQuery(QUERY_ACTIVITY);
  // const activity = data?.activity || [];
  // console.log("data ", data)
  // console.log("dining", activity)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">On Board Activities</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {activity.map((activity) => (
                <>
              <a key={activity.id} href={activity.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={activity.imageSrc}
                    alt={activity.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <h3 className="mt-4 text-sm text-gray-700">{activity.activity}</h3>
              <p className="mt-1 text-lg font-medium text-grey-900">{activity.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{activity.cost}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }