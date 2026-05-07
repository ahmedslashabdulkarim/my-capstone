import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddTodoPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    function submit(e: React.FormEvent) {
        e.preventDefault()

        fetch("http://localhost:8080/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, done: false })
        }).then(() => navigate("/"))
    }

    return (
        <form onSubmit={submit}>
            <h1>Add Todo</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <button type="submit">Save</button>
        </form>
    )
}



/*
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddTodoPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    function submit(e: React.FormEvent) {
        e.preventDefault()

        fetch("http://localhost:8080/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, done: false })
        }).then(() => navigate("/"))
    }

    return (
        <form onSubmit={submit}>
            <h1>Add Todo</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <button type="submit">Save</button>
        </form>
    )
}
*/