import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


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

  // create function to delete todo
  handleDelete = (id) => {
    // filter the todoItems array; create new array with all items that don't match the id of the clicked todo
    const afterDelete = this.state.todoItems.filter(todo => todo.id !== id);
    // setState to be the new array
    this.setState({ todoItems: afterDelete });
  }

  render () {
    // for every item in the todoItems array, render a Todo
    const allTodos = this.state.todoItems.map(todo =>
      <li key={todo.id}>
        <Todo 
          key={todo.id}
          id={todo.id}
          todo={todo.todo} 
          delete={this.handleDelete}
        />
      </li>
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
