const BASE_URL = "http://localhost:8080/api/todos"

export async function fetchTodos() {
    const res = await fetch(BASE_URL)
    if (!res.ok) throw new Error("Karten konnten nicht geladen werden")
    return res.json()
}

export async function deleteTodo(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
    if (!res.ok) throw new Error("Löschen fehlgeschlagen")
}

export async function toggleTodoDone(id: string) {
    // 1) Fetch currenttodo
    const res = await fetch(`${BASE_URL}/${id}`)
    if (!res.ok) throw new Error("Karte konnte nicht geladen werden")

    const todo = await res.json()

    // 2) Toggle done
    const updated = { ...todo, done: !todo.done }

    // 3) Save updatedtodo
    const updateRes = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
    })

    if (!updateRes.ok) throw new Error("KArte konnte nicht aktualisiert werden")

    return updateRes.json()
}
/