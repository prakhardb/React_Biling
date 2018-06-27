import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from "../sample-fishes";
import Fish from './Fish';

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
       //Take a copy of the exsiting state
       const fishes ={...this.state.fishes };
       // Add our new fish to fishes variable
       fishes[`fish${Date.now()}`] = fish;
       /// Set the new fishes object to state
       this.setState({ fishes });
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    };

    addToOrder = (key) => {
        //1. take copy of state
        const order = { ...this.state.order};
        //2. Either add to the order or update the number in our order
        order[key] = order[key] +1 || 1;
        //3. call setstate to update our state object
        this.setState({ order });
    }

    render(){
        return (
            <div className="catch-of-the-day">
            <div className="menu">
            <Header tagline="Fresh Seafood Market" />
             <ul className="fishes">
              {Object.keys(this.state.fishes).map(key =>(
                   <Fish
                    key={key}
                    index={key} 
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}
                    />
                   ))}
             </ul>
            </div>
            <Order fishes={this.state.fishes} order={this.state.order} />
            <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;