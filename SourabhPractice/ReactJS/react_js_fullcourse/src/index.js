import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import ContactApp from './ContactApp';
import JokeApp from './JokeApp';
import ProductApp from './ProductApp';
import './style.css';

//ReactDOM.render(<ContactApp/>,document.getElementById('root'));
//ReactDOM.render(<JokeApp/>,document.getElementById('root'));
//ReactDOM.render(<ProductApp/>,document.getElementById('root'));
ReactDOM.render(<TodoApp/>,document.getElementById('root'));