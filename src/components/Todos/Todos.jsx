import { useLS } from 'hooks/useLS';
import { useState, useMemo } from 'react';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';
import { TodoSelect } from './TodoSelect/TodoSelect';

export const TYPES_TODO = { done: 'DONE', notDone: 'NOT_DONE', all: 'ALL' };

export const Todos = () => {
  const [todos, setTodos] = useLS('KeyToDos', []);
  const [type, setType] = useState(TYPES_TODO.all);

  const onAddToDo = toDo => {
    setTodos([toDo, ...todos]);
  };

  const onChecked = id => {
    setTodos(
      todos.map(item =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  //   const sortedToDos = () => {
  //     if (TYPES_TODO.all === type) return todos;
  //     if (TYPES_TODO.done === type) return todos.filter(item => item.isDone);
  //     if (TYPES_TODO.notDone === type) return todos.filter(item => !item.isDone);
  //   };
  const cacheSortedToDos = useMemo(() => {
    if (TYPES_TODO.all === type) return todos;
    if (TYPES_TODO.done === type) return todos.filter(item => item.isDone);
    if (TYPES_TODO.notDone === type) return todos.filter(item => !item.isDone);
  }, [todos, type]);

  const changeType = e => {
    setType(e.target.value);
  };
  return (
    <div>
      <TodoForm onAddToDo={onAddToDo} />
      <TodoSelect changeType={changeType} />
      <TodoList toDos={cacheSortedToDos} onChecked={onChecked} />
    </div>
  );
};
