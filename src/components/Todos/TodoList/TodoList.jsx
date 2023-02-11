import React from 'react';

export const TodoList = ({ toDos, onChecked }) => {
  return (
    <ul>
      {toDos.map(({ title, description, id, isDone }) => (
        <li key={id}>
          <h4>{title}</h4>
          <p>{description}</p>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onChecked(id)}
          />
        </li>
      ))}
    </ul>
  );
};
