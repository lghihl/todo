import React from 'react'
import { useDispatch } from "react-redux";
import { toggle_todo, delete_todo } from "../modules/actions";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text, checked } = todo;

    const onToggle = () => {
        dispatch(toggle_todo(id));
    }

    const onDelete = () => {
        dispatch(delete_todo(id));
    }

    return (
        <div className="todo-item">
            <div className={`todo-item-title ${checked && "checked"}`} onClick={onToggle}>{text}</div>
            {checked && <div className="todo-item-checked" onClick={onToggle}>✔</div>}
            <div className="todo-item-btn">
                <button onClick={onDelete}>💥</button>
            </div>
        </div>
    );
}

export default TodoItem;