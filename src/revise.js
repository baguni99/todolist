// Revise.js

import React from 'react';

function Revise({ todo, markTodoAsDone, removeTodo }) {
    const handleMarkAsDone = () => {
        markTodoAsDone(todo.id);
      };

      const handleRemoveTodo = () => {
        
        removeTodo(todo.id);
        
      };

  return (
    <div>
      <button onClick={handleMarkAsDone}>완료</button>
      <button onClick={handleRemoveTodo}>삭제</button>
      
    </div>
  );
}

export default Revise;
