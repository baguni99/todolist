// Todo.js

import React from 'react';

const Todo = (props) => {
  const { todo, markTodoAsDone, removeTodo, cancelTodo } = props;

  const handleMarkAsDone = () => {
    // if (!todo.isDone) {
      markTodoAsDone(todo.id);
  };

  const handleRemoveTodo = () => {
    alert('정말 삭제하시겠습니까?')
    removeTodo(todo.id);
  };

  const handleCancelTodo=()=>{
    cancelTodo(todo.id);
  }

  // const handleKeyDown=(e:React.KeyboardEvent)=>{
  //   if(e.key==='Enter'){
  //     onClick()
  //   }
  // }
  return (
    <div className='Todo'>
      <p className='title'>📌{todo.title}</p>
      <p className='item'>{todo.item}</p>
      {!todo.isDone && <button onClick={handleMarkAsDone}>완료</button>}
      {!todo.isDone && <button onClick={handleRemoveTodo}>삭제</button>}
      {todo.isDone && <button onClick={handleCancelTodo}>취소</button>}
      {todo.isDone && <button onClick={handleRemoveTodo}>삭제</button>}
    </div>
  );
};

export default Todo;
