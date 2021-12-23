import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item">
                <div onClick={() => onToggle(id)} className={`todo-text ${checked ? 'checked' : '' }`}>
                    <div className="todoitem-text">{text}</div>
                    { checked ? (<div className="check-mark">✔</div>) : '' }
                </div>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}>X</div>
            </div>
        );
    }
}

export default TodoItem;