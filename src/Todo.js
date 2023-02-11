import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div class="list">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      <div class="list_name">{todo.name}</div>
      <div class="list_task">{todo.task}</div>
    </div>
  );
};

export default Todo;
