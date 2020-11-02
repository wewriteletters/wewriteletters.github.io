import React from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";

import Header from "./components/header.jsx";
import TodaysContent from "./todaysContent.jsx";
import AboutUs from "./components/aboutUs.jsx";
import Home from "./home.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/content" component={TodaysContent} />
        <Route path="/about" component={AboutUs} />
      </div>
    </HashRouter>
  );
}

export default App;
