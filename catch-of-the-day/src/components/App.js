import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1 take a copy of the existing state -- because you never want to reach into state and modify it directly - NO MUTATION
    const fishes = {...this.state.fishes}; //object spread

    //2. add our new fishes to the variable
    fishes[`fish${Date.now()}`] = fish // using the timestampt to create a unique key and we set it equal to the fish we just created in addFishForm component

    // 3 set the new fishes object to state using the setState API
    this.setState({
      fishes: fishes // we take our copied fishes in #1 and pass it our new fishes in #2 and update state with that, which will trigger a change in react wherever the state is used
    });




  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafod Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;
