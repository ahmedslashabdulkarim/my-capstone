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
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        fetchTodos()
            .then(setTodos)
            .catch(() => setError("Diese konnte nicht geladen werden!"))
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

    // Filter
    const filteredTodos = todos.filter((t: any) => {
        if (filter === "done") return t.done
        if (filter === "not") return !t.done
        return true
    })

    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />

    return (
        <div>
            <h1>Todo List</h1>
            <Link to="/add">+ Add new Todo</Link>


            <div style={{ margin: "18px 0" }}>
                <button onClick={() => setFilter("all")} className="todo-btn">All</button>
                <button onClick={() => setFilter("done")} className="todo-btn">Done</button>
                <button onClick={() => setFilter("not")} className="todo-btn">Not Done</button>
            </div>

            <ul>
                {filteredTodos.map((todo: any) => (
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
