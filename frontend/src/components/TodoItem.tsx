import { deleteTodo } from "../services/todoApi"

export default function TodoItem({ todo, onDelete }: any) {
    return (
        <li className="todo-card">
            <div>
                <strong>{todo.title}</strong>
                <br />
                {todo.description}
            </div>

            <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </li>
    )
}
