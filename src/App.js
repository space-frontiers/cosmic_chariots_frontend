import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Excursion from "./pages/Excursion"
import Footer from "./components/Footer";
import User from "./pages/User";
import Launch from "./pages/Launch";
import Dining from "./pages/Dining"
import Activity from "./pages/Activity"
import Mission from "./pages/Mission"
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/Launch" element={<Launch />} />
          <Route path="/Excursion" element={<Excursion />} />
          <Route path="/Dining" element={<Dining />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Mission" element={<Mission />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
