import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state={
    ninjas:[
      {name:"Sourabh",age:30,belt:"black",id:1},
      {name:"Amit",age:20,belt:"green",id:2},
      {name:"Akash",age:25,belt:"yellow",id:3},
    ]
  }

  addNinja=(ninja)=>{
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja];
    this.setState({
      ninjas:ninjas
    });
    console.log(ninja);
  }

  deleteNinja=(id)=>{
    let ninjas=this.state.ninjas.filter(ninja=>{
      return ninja.id!==id;
    });
    this.setState({
      ninjas:ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;