import React from 'react';
import Todo from './Task';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <div className='mustbegrey'>
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      </div>
    ))}
  </ul>
);

export default TodoList;