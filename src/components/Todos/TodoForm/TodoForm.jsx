import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const TodoForm = ({ onAddToDo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const actions = { title: setTitle, description: setDescription };

  const firstToDo = useRef(null);

  useEffect(() => {
    firstToDo.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const toDo = { id: nanoid(), title, description, isDone: false };
    onAddToDo(toDo);
    handleReset();
  };

  const handleReset = () => {
    Object.values(actions).forEach(item => {
      item('');
    });
  };

  return (
    <div>
      TodoForm
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter title"
          name="title"
          value={title}
          ref={firstToDo}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter description"
          name="description"
          value={description}
        />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  );
};
