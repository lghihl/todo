export default function TodoItem ( {todo, handleToggle, handleRemove} ) {
    const onRemove = () => {
        handleRemove(todo.id);
    }

    return (
        <div className="todo-item">
            <div className={`todo-text ${todo.completed ? 'checked' : ''}`}
                 onClick={ e => e.target.localName !== 'path' ? handleToggle(todo.id) : null }>
                <div className={`todoitem-text`}>{todo.todo}</div>
                { todo.completed && <div className="check-mark">✔</div> }
            </div>
            <div className="todo-btn">
                <button className="remove" onClick={onRemove}>
                    X
                </button>
            </div>
        </div>
    );
}