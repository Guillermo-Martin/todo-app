import React from 'react';

function Todo(props) {
  return (
    <div>
      {/* pass the id of the todo as an argument to the delete function */}
      <p>{props.todo}<button onClick={() => props.delete(props.id)}>Delete</button></p>
      
    </div>
    
  );
}

export default Todo;