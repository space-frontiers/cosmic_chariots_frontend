import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Excursion from "./pages/Excursion"
import Footer from "./components/Footer";
// import User from "./pages/User"
// import Reservation from "./pages/Reservation"
// import Status from "./components/Status";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/user" component={User} /> */}
          {/* <Route exact path="/reservation" component={Reservation} /> */}
          {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
          <Route exact path="/ex" component={Excursion} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />

        </Switch>
      </>
      <Footer />
    </Router>
  );
}

export default App;
