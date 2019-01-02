import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';

export default class App extends Component{
    state={
        characters:[]
    };

    handleSubmit=character=>{
        this.setState({characters:[...this.state.characters,character]});
    }

    removeCharacter=index=>{
        const {characters} = this.state;
        this.setState({
            characters:characters.filter((character,i)=>{
                return i!==index;
            })
        });
    }
    
    render(){
        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );

        //Rendering App class on the index.js page
        // return(
        //     <div className="App">
        //         <h1>Hello Sourabh Karmarkar</h1>
        //     </div>
        // );
    }
}