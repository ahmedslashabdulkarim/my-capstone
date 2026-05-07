export async function fetchTodos() {
    const res = await fetch("http://localhost:8080/api/todos")
    if (!res.ok) throw new Error("Failed to load todos")
    return res.json()
}

export async function deleteTodo(id: string) {
    const res = await fetch(`http://localhost:8080/api/todos/${id}`, {
        method: "DELETE"
    })
    if (!res.ok) throw new Error("Failed to delete todo")
}
