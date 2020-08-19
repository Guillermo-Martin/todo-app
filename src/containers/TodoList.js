import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './../components/Todo';


class TodoList extends Component {
  state = {
    todoItems: []
  }

  // create function to add todo from form
  addTodo = (todo) => {
    alert("Submitted!");
    // take todo from form and use it to change todoItems state
    // spread out current todoItems state, then add todo from form
    this.setState(state => ({todoItems: [...state.todoItems, todo]}))
  }

  render () {
    return (
      <div>
        <Todo />

        {this.state.todoItems}

        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;