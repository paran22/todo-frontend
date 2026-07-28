import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [nextId, setNextId] = useState(1);

  const handleAdd = () => {
    if (!title.trim()) return;
    setTodos([...todos, { id: nextId, title, completed: false }]);
    setNextId(nextId + 1);
    setTitle("");
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleToggle(todo.id)}>{todo.title}</span>
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
