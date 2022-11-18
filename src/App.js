import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Excursion from "./pages/Excursion";
import Footer from "./components/Footer";
import User from "./pages/User";
import Launch from "./pages/Launch";
import Dining from "./pages/Dining";
import Activity from "./pages/Activity";
import Mission from "./pages/Mission";
// import logo from './logo.svg';
import "./App.css";

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
    </ApolloProvider>
  );
}

export default App;
