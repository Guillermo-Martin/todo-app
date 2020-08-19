import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './../components/Todo';


class TodoList extends Component {
  render () {
    return (
      <div>
        <Todo />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;