import React from 'react';

class TodoHead extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="빨래하기"/>
                <TodoItem text="청소하기"/>
                <TodoItem text="설거지하기"/>
            </div>
        );
    }
}

export default TodoHead;