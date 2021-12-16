import React from 'react';
import './TodoList.css';

const TodoList = ({form, children}) => {
    return (
        <main className="todo-list">
            <div className="title">
                TodoList
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