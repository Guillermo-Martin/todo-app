import React from 'react';

function Todo(props) {
  return (
    <div>
      <p>{props.todo}<button onClick={props.delete}>Delete</button></p>
      
    </div>
    
  );
}

export default Todo;