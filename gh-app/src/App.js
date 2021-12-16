import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends Component {
    render() {
        return (
            <TodoList form={<Form/>}>
                App
            </TodoList>
        );
    }
}

export default App;