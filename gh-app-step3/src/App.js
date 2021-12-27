import React from "react";
import TodoHead from "./components/TodoHead";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="todo-div">
            <TodoHead />
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default App;