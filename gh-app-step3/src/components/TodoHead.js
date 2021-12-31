import React from "react";
import { useSelector } from 'react-redux';

const TodoHead = () => {
    const { todos } = useSelector(state => state.todoReducer);

    const checkedCount = todos.filter(todo => todo.checked).length;
    const allCount = todos.length;

    return (
        <div className="todo-head">
            <div className="todo-title">TODO LIST</div>
            <div className="todo-progress">
                진행률 {checkedCount} / {allCount}
            </div>
        </div>
    );
}

export default TodoHead;