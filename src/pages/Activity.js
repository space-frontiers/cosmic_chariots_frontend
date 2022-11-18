import React from "react";
import "../index.css"

const activity = [
    {
        "on_board_activity": "Zero Gravity Party",
        "description": "Come to the Jupiter Lounge and experience what it's like to be weightless for a night of fun. We'll turn off the gravity and turn on the tunes as our on-board DJ makes our night rock",
        "cost": "$99/person"
    },
    {
        "on_board_activity": "Freeze-Dried Alcohol Tasting",
        "description": "You've had cocktails before, but have you tasted them in space? Our expert mixologists will create an afternoon of surprising flavors as you rocket through space.",
        "cost": "$89/person"
    },
    {
        "on_board_activity": "Mission Control Contact",
        "description": "Does your cell phone not provide service off-planet? No problem. Let home know how much fun your having by booking time with one of our video connections that can route you right home.",
        "cost": "$29/hour"
    },
    {
        "on_board_activity": "Planetary Trivia",
        "description": "Does your cell phone not provide service off-planet? No problem. Let home know how much fun your having by booking time with one of our video connections that can route you right home.",
        "cost": "$15/person"
    }
]

export default function Excursion() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">On Board Activities</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {activity.map((activity) => (
                <>
              <a key={activity.id} href={activity.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  {/* <img
                    src={excursion.imageSrc}
                    alt={excursion.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  /> */}
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