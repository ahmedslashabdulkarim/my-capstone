
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import TodoItem from "../components/TodoItem"
import { fetchTodos, deleteTodo } from "../services/todoApi"

export default function TodoListPage() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchTodos()
            .then(setTodos)
            .catch(() => setError("فشل تحميل المهام"))
            .finally(() => setLoading(false))
    }, [])

    async function handleDelete(id: string) {
        await deleteTodo(id)
        setTodos(todos.filter((t: any) => t.id !== id))
    }

    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />

    return (
        <div>
            <h1>Todo List</h1>
            <Link to="/add">+ Add Todo</Link>

            <ul>
                {todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    )
}

/*
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Todo = {
    id: string
    title: string
    description: string
    done: boolean
}

export default function TodoListPage() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/api/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>
            <h1>Todo List</h1>

            <Link to="/add">➕ Add Todo</Link>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong>
                        <br />
                        {todo.description}
                        <br />
                        <Link to={`/edit/${todo.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
*/