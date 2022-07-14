import { Route, Routes } from "react-router-dom";
import TodoDetail from "./pages/TodoDetail";
import TodoList from "./pages/TodoList";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
