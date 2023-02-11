import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();
  const todoTaskRef = useRef();

  const handleAppTodo = () => {
    const name = todoNameRef.current.value;
    const task = todoTaskRef.current.value;

    if (name === '' || task === '') return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), name: name, task: task, completed: false },
      ];
    });
    todoNameRef.current.value = null;
    todoTaskRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <h2 class="list_title">タスクリスト</h2>
      <div class="title_area">
        <div class="list_name">名前</div>
        <div class="list_task">タスク</div>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <h2 class="task_title">新規タスク</h2>
      <div class="newtask">
        <div class="name_area">
          <p>名前</p>
          <input
            class="name"
            type="text"
            placeholder="名前"
            ref={todoNameRef}
          />
        </div>
        <div class="task_area">
          <p>タスク</p>
          <input
            class="task"
            type="text"
            placeholder="タスク"
            ref={todoTaskRef}
          />
        </div>
      </div>

      <button onClick={handleAppTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div class="remain">
        残りのタスク:{todos.filter((todo) => !todo.completed).length}{' '}
      </div>
    </>
  );
}

export default App;
