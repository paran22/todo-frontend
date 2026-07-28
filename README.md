# 할 일 목록 (React + FastAPI 연동용 프론트엔드)

4회차에서 만들 FastAPI 백엔드(Todo CRUD API)와 연결해서 쓰는 프론트엔드입니다.

## 실행 방법

```bash
git clone <이 저장소 주소>
cd react-todo-crud
npm install
npm run dev
```

터미널에 뜨는 `http://localhost:5173` 주소로 접속하면 확인할 수 있습니다.

## 백엔드와 연결하기

이 프론트는 아래 API를 호출하도록 이미 만들어져 있습니다.

| 기능 | 메서드 | 주소 |
|---|---|---|
| 목록 조회 | GET | `/todos` |
| 추가 | POST | `/todos` |
| 완료 체크 | PATCH | `/todos/{id}` |
| 삭제 | DELETE | `/todos/{id}` |

내 FastAPI 서버 주소가 `http://localhost:8000`이 아니라면, `src/api.js` 맨 위의 `API_BASE_URL` 한 줄만 바꿔주면 됩니다.

```js
const API_BASE_URL = "http://localhost:8000";
```
