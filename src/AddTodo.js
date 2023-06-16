// AddTodo.js

import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [item, setItem] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (title.trim() !== '' && item.trim() !== '' && (e.key === 'Enter' || e.target.tagName === 'BUTTON')) {
      addTodo(title, item);
      setTitle('');
      setItem('');
    }
  };

  return (
    <div>
      <input className='inputTitle'
        type='text'
        placeholder='제목'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleAddTodo}
      /><br/>
      <input className='inputTodo'
        type='text'
        placeholder='할 일'
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={handleAddTodo}
      /><br/>
      <button onClick={handleAddTodo}>추가하기</button>
    </div>
  );
};

export default AddTodo;
