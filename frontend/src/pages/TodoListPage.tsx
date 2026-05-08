import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import TodoItem from "../components/TodoItem"
import { fetchTodos, deleteTodo, toggleTodoDone } from "../services/todoApi"

export default function TodoListPage() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchTodos()
            .then(setTodos)
            .catch(() => setError("Diese konnte nicht geladen werden."))
            .finally(() => setLoading(false))
    }, [])

    async function handleDelete(id: string) {
        await deleteTodo(id)
        setTodos(todos.filter((t: any) => t.id !== id))
    }

    async function handleToggle(id: string) {
        const updated = await toggleTodoDone(id)
        setTodos(todos.map((t: any) => (t.id === id ? updated : t)))
    }

    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />

    return (
        <div>
            <h1>Todo List</h1>
            <Link to="/add">+ Todo hinzufügen</Link>

            <ul>
                {todos.map((todo: any) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    )
}




/*
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
*/