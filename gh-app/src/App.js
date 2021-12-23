import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoHead from './components/TodoHead';

class App extends Component {

    id = 3;

    state = {
        input: '',
        todos: [
            { id: 0, text: '빨래하기', checked: true },
            { id: 1, text: '설거지하기', checked: false },
            { id: 2, text: '청소하기', checked: true },
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    }
    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
            })
        });
    }
    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            this.handleCreate();
        }
    }
    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }
    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id),
        })
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
        } = this;
        return (
            <TodoList 
                form={(
                    <Form
                        value={input}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        onKeyPress={handleKeyPress}
                    />
                )}
                head={(
                    <TodoHead
                        checked_count={todos.filter(todo => todo.checked).length}
                        all_count={todos.length}
                    />
                )}
            >
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </TodoList>
        );
    }
}

export default App;