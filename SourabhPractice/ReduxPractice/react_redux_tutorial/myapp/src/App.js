import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state={
    ninjas:[
      {name:"Sourabh",age:30,belt:"black",id:1},
      {name:"Amit",age:20,belt:"green",id:2},
      {name:"Akash",age:25,belt:"yellow",id:3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;