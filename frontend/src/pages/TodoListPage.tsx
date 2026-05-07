

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



/*
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function TodoListPage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <Link to="/add">Add Todo</Link>

            <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id}>
                        {todo.title}
                        <Link to={`/edit/${todo.id}`}> Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
*/