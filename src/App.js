import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import User from "./pages/User";
import Booking from "./pages/Booking";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/booking" element={<Booking />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
