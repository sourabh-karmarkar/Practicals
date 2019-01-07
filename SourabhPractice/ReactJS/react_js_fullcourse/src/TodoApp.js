import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import todosData from './TodoItem/todosData';

function TodoApp(){
    const todoItems=todosData.map(item=><TodoItem key={item.id} item={item}/>);
    return(
        <div className="todo-list">
            {todoItems}
        </div>
    );
}

export default TodoApp;