import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../modules/actions";

const TodoForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const onChangeTextHandler = (e) => {
        setText(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClickHandler(e);
        }
    }

    const onClickHandler = (e) => {
        e.preventDefault();

        const todo = {
            text: text,
            checked: false,
        }

        dispatch(add_todo(todo));
        setText("");
    }

    return (
        <div className="todo-form">
            <div className="todo-form-input-div">
                <input type="text" onChange={onChangeTextHandler} onKeyPress={onKeyPress} value={text} />
            </div>
            <div className="todo-form-btn-div">
                <button onClick={onClickHandler}>추가</button>
            </div>
        </div>
    );
}

export default TodoForm;