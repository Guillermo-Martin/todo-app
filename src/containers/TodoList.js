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
    // console.log(this.state.todoItems, "line 16");
  }

  // create edit function to change a todo from todo form
  editTodo = (edit, id) => {
    // edit is from the Todo component edit form
    // console.log(edit, id, "line 21");
    // create a copy of the todoItems state
    let updatedTodoItems = [...this.state.todoItems];

    // find the todo by id (updatedTodoItems is an array)
    let filteredTodo = updatedTodoItems.filter(todo => todo.id === id);
    
    // change the filtered todo to be "edit"
    filteredTodo[0].todo = edit;

    // change the todoItems state to be "updatedTodoItems" (which now has the edited todo)
    this.setState({todoItems: updatedTodoItems});
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
          edit={this.editTodo}
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
