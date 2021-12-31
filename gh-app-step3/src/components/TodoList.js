import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

const TodoList = () => {
    const { todos } = useSelector(state => state.todoReducer);

    return (
        <div className="todo-list">
            {todos &&
            todos.map((todo) => {
                return <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
            })}
        </div>
    );
};

export default TodoList