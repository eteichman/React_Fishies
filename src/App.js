import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import SearchParams from "./Components/SearchParams";
import FISHIES from "./Data/FishData";
import FishDetails from "./Components/FishDetails";

const App = () => {
  return (
    <React.StrictMode>
      <div className="mainPageGrid">
        <Header />
        <div className="container">
          <Router>
            <SearchParams fishies={FISHIES} path="/" />
            <FishDetails path="/FishDetails/:id" />
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
