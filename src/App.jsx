import { useState, useEffect } from "react";
import "./App.css";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    getTodos().then(setTodos);
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    createTodo(title).then(() => {
      setTitle("");
      loadTodos();
    });
  };

  const handleToggle = (todo) => {
    updateTodo(todo.id, !todo.completed).then(loadTodos);
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(loadTodos);
  };

  return (
    <div className="page">
      <h1>할 일 목록</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleToggle(todo)}>{todo.title}</span>
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
