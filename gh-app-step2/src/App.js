import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const initialTodos = [
  {
    id: uuid(),
    todo: 'step1 완성',
    completed: true,
  },
  {
    id: uuid(),
    todo: 'step2 완성',
    completed: false,
  },
  {
    id: uuid(),
    todo: 'step3 완성',
    completed: false,
  },
]

function App() {
  const [ todos, setState ] = useState(initialTodos);

  const handleCreate = (newTodo) => {
    const todo = {
      id: uuid(),
      todo: newTodo,
      completed: false,
    };
    setState( (prevState) => [...prevState, todo] );
  }

  const handleRemove = (id) => {
    setState( (prevState) => prevState.filter(todo => todo.id !== id) );
  }

  const handleToggle = (id) => {
    setState(todos.map(todo => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
    }))
  }

  return (
    <div className="App">
      <div className="title">TodoList</div>
      <TodoList
        todos={todos}
        handleCreate={handleCreate}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
