/*
    Displaying Jokes Example
*/
import React from 'react';
import Joke from './Joke/Joke';
import jokesData from './Joke/jokesData';

function JokeApp(){
    const jokeComponents=jokesData.map(joke=><Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>);
    return(
        <div>
            {jokeComponents}
        </div>
    );
}

export default JokeApp;