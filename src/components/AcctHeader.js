import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';


export default function AcctHeader() {
 const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <img
                className="h-8 w-8"
                src="./spaceship.png"
                alt="Space Frontiers"
                />
            </Link>
          </div>
          <h1 className="italic text-xl md:text-xl font-extrabold capitalize" data-aos="zoom-y-out">Hello, {'\n'}<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{Auth.getProfile().data.first_name}</span>!</h1>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                    <Link className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" onClick={Auth.logout}>Sign Out</Link>
                </li>              
            </ul>
          </nav>

        </div>

      </div>

    </header>

  );
}
