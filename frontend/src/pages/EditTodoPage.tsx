import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditTodoPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8080/api/todos/${id}`)
            .then(res => res.json())
            .then(todo => {
                setTitle(todo.title)
                setDescription(todo.description)
            })
    }, [id])

    function submit(e: React.FormEvent) {
        e.preventDefault()

        fetch(`http://localhost:8080/api/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, title, description, done: false })
        }).then(() => navigate("/"))
    }

    return (
        <form onSubmit={submit}>
            <h1>Edit Todo</h1>

            <input value={title} onChange={e => setTitle(e.target.value)} />
            <textarea value={description} onChange={e => setDescription(e.target.value)} />

            <button type="submit">Update</button>
        </form>
    )
}


/*
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditTodoPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8080/api/todos/${id}`)
            .then(res => res.json())
            .then(todo => {
                setTitle(todo.title)
                setDescription(todo.description)
            })
    }, [id])

    function submit(e: React.FormEvent) {
        e.preventDefault()

        fetch(`http://localhost:8080/api/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, title, description, done: false })
        }).then(() => navigate("/"))
    }

    return (
        <form onSubmit={submit}>
            <h1>Edit Todo</h1>

            <input value={title} onChange={e => setTitle(e.target.value)} />
            <textarea value={description} onChange={e => setDescription(e.target.value)} />

            <button type="submit">Update</button>
        </form>
    )
}
*/