import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoListPage from "./pages/TodoListPage"
import AddTodoPage from "./pages/AddTodoPage"
import EditTodoPage from "./pages/EditTodoPage"
import "./App.css"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

