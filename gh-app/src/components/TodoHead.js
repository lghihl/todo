import React from 'react';
import './TodoList.css';

const TodoHead = ({checked_count, all_count}) => {
    return (
        <main>
            <div className="title">TodoList</div>
            <div className="progress">
                진행률 : {checked_count} / {all_count}
            </div>
        </main>
    );
};

export default TodoHead;