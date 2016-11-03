import React, { Component } from "react";
import { Match } from "react-router";
import logo from "./logo.svg";
import "./App.css";

import { Home, About, Contact } from "./pages";
import Navigation from "./navigation";
import Subnavigation from "./subnavigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TrippleR Sample Site</h2>
        </div>
        <nav className="App-intro">
          <Navigation />
          <Match pattern="/contact" component={Subnavigation} />
        </nav>
        <div className="App-body">
          <Match pattern="/" exactly component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;
