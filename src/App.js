import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Excursion from "./pages/Excursion"
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
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/user" component={User} /> */}
          {/* <Route exact path="/reservation" component={Reservation} /> */}
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
