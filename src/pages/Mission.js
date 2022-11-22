import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import "../index.css";
import Header from "../components/Header";
import Legal from "../components/Legal";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Excursion from "../components/Excursion";
import Activity from "../components/Activity";
import Dining from "../components/Dining";

const mission = [
  {
    name: "Planet Excursions",
    description:
      "What will your space adventure be? Choose between great exploration missions and near-base family fun.",
    imageSrc: "https://live.staticflickr.com/65535/52502432987_e88a47dbb7.jpg",
    imageAlt: "Person walking on the Moon.",
    href: "#",
  },
  {
    name: "On Board Activities",
    description:
      "Getting there is half the fun. There's lots to do on the ship, from spa days to star gaze. Book now to secure your fun.",
    imageSrc:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Dining Packages",
    description:
      "We have the finest cuisine off-Earth. Your room includes our basic dining package, but make it special with exotic fruits, steaks, and meals around the galaxy!",
    imageSrc:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/27/all-the-fruits-cut-whole.jpg.rend.hgtvcom.616.493.suffix/1632778035320.jpeg",
    imageAlt: "Fruit photo",
    href: "#",
  },
];

export default function Mission() {
  const [current, setCurrent] = useState("Main");

  console.log("current", current);

  function displayComponent() {
    switch (current) {
      case "Main":
        return <Main setCurrent={setCurrent} />;

      case "Planet Excursions":
        return <Excursion setCurrent={setCurrent} />;

      case "On Board Activities":
        return <Activity setCurrent={setCurrent} />;

      case "Dining Packages":
        return <Dining setCurrent={setCurrent} />;

      default:
        return <Main setCurrent={setCurrent} />;
    }
  }

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <div className="flex content-start justify-center">
                <div class="grid grid-cols-3 gap-4 place-content-around mb-1">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                href="#"
                onClick={() => setCurrent("Planet Excursions")}
              >
                Excursions
              </button>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                href="#"
                onClick={() => setCurrent("On Board Activities")}
              >
                Activities
              </button>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                href="#"
                onClick={() => setCurrent("Dining Packages")}
              >
                Dining
              </button>
              </div>
              </div>
              <div>{displayComponent()}</div>
            </div>
          </div>
        </div>
      </main>
      <Legal />
      <Footer />
    </div>
  );
}
