import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafod Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
