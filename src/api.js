// 4회차에서 만들 FastAPI 백엔드 주소로 바꿔서 연결하세요.
const API_BASE_URL = "http://localhost:8000";

export async function getTodos() {
  const res = await fetch(`${API_BASE_URL}/todos`);
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function updateTodo(id, completed) {
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API_BASE_URL}/todos/${id}`, { method: "DELETE" });
}
