import React from 'react';
import './TodoList.css';

const TodoList = ({head, form, children}) => {
    return (
        <main className="todo-list">
            <div className="form-wrapper">
                {head}
            </div>
            <div className="form-wrapper">
                {form}
            </div>
            <div className="todos-wrapper">
                {children}
            </div>
        </main>
    );
};

export default TodoList;