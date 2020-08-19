import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './../components/Todo';


class TodoList extends Component {
  state = {
    todoItems: []
  }

  // create function to add todo from form
  addTodo = (todo) => {
    
    // take todo from form and use it to change todoItems state
    // spread out current todoItems state, then add todo from form
    this.setState(state => ({todoItems: [...state.todoItems, todo]}));
  }

  render () {
    // for every item in the todoItems array, render a Todo
    const allTodos = this.state.todoItems.map(todo =>
      <li><Todo todo={todo} /></li>
    );

    return (
      <div>
        {/* Render todos here */}
        <ul>
          {allTodos}
        </ul>
        
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;