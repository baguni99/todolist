// App.js

import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(storedTodos);

  const addTodo = (title, item) => {
    const newTodo = {
      id: todos.length,
      title: title,
      item: item,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const markTodoAsDone = (selectedId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (selectedId) => {
    const remainingTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(remainingTodos);
  };

  const cancelTodo=(selectedId)=>{
    const updatedTodos = todos.map((todo)=>{
      if(todo.id===selectedId){
        return{...todo,isDone:false}
      }
      return todo;
    })
    setTodos(updatedTodos)
  }


   
  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleAddTodo = (title, item) => {
    if (title.trim() !== '' && item.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title,
        item,
        isDone: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
    }
  };

  const handleMarkTodoAsDone = (selectedId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleRemoveTodo = (selectedId) => {
    const remainingTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(remainingTodos);
    saveToLocalStorage(remainingTodos);
  };

  const handleCancelTodo = (selectedId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };


  return (
    <div className='App'>
      <header>To-do List</header>
      <div className='writeTodo'>
        <AddTodo addTodo={handleAddTodo} />
      </div>
      <div className='listsContainer'>
      <div className='todoList'>
        <h2>Working...</h2>
        {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <Todo
            todo={todo}
            markTodoAsDone={handleMarkTodoAsDone}
            removeTodo={handleRemoveTodo}
            key={todo.id}
          />
        ))}
      </div>
      <div className='doneList'>
        <h2>Done ! </h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
          <Todo
            todo={todo}
            markTodoAsDone={handleMarkTodoAsDone}
            removeTodo={handleRemoveTodo}
            cancelTodo={handleCancelTodo}
            key={todo.id}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
