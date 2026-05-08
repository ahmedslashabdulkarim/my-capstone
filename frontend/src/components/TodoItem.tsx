
import { Link } from "react-router-dom"

export default function TodoItem({ todo, onDelete, onToggle }: any) {
    return (
        <li className="todo-card">
            <div>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                    style={{ marginRight: "10px" }}
                />

                <span className="todo-title">{todo.title}</span>
                <br />
                <span className="todo-desc">{todo.description}</span>
            </div>

            <div className="todo-actions">
                <Link to={`/edit/${todo.id}`} className="todo-btn">✏️ Edit</Link>
                <button className="todo-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
            </div>
        </li>
    )
}
