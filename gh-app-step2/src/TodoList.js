import Form from './Form'
import TodoItem from './TodoItem'
import Progress from './Progress'

export default function TodoList( {todos, handleCreate, handleToggle, handleRemove} ) {
    return (
        <div className="List">
            <Progress completedCount={todos.filter(todo => todo.completed).length} allCount={todos.length} />
            <Form handleCreate={handleCreate} />
            <div className="todo-list">
                {todos.map( todo => 
                    <TodoItem
                        todo={todo} 
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                        key={todo.id}
                    />
                )}
            </div>
        </div>
    )
}