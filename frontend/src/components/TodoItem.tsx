import { Link } from "react-router-dom"

export default function TodoItem({ todo, onDelete, onToggle }: any) {
    return (
        <li className={`todo-card ${todo.done ? "done" : ""}`}>
            <div>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                    style={{ marginRight: "12px" }}
                />

                <span className={`todo-title ${todo.done ? "done" : ""}`}>
          {todo.title}
        </span>
                <br />
                <span className={`todo-desc ${todo.done ? "done" : ""}`}>
          {todo.description}
        </span>
            </div>

            <div className="todo-actions">
                <Link to={`/edit/${todo.id}`} className="todo-btn">Bearbeiten</Link>
                <button className="todo-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
            </div>
        </li>
    )
}
