import React, { useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { 
  BrowserRouter, 
  Routes, 
  Route,
  useLocation
 } from "react-router-dom";

import "./App.css";
import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

// import Nav from "./components/Nav";
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Privacy from './pages/Privacy';
import Excursion from "./pages/Excursion";
import Footer from "./components/Footer";
import User from "./pages/User";
import Launch from "./pages/Launch";
import Dining from "./pages/Dining";
import Activity from "./pages/Activity";
import Mission from "./pages/Mission";
// import logo from './logo.svg';

// const url = process.env.NODE_ENV === 'development'
//   ? '/graphql' : "https://cosmic-chariots-backend.herokuapp.com/graphql";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: (httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          {/* <Nav /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/user" element={<User />} />
            <Route path="/Launch" element={<Launch />} />
            <Route path="/Excursion" element={<Excursion />} />
            <Route path="/Dining" element={<Dining />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Mission" element={<Mission />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      
        {/*  Site footer */}
        <Footer />
      
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
