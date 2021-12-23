import './App.css';
import TodoList from './TodoList';
import { userState, useState } from 'react';
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
  const [ todos, setTodo ] = useState(initialTodos);

  const handleCreate = (newTodo) => {
    const todo = {
      id: uuid(),
      todo: newTodo,
      completed: false,
    };
    setTodo( (prevState) => [...prevState, todo] );
  }

  const handleRemove = (id) => {
    setTodo( (prevState) => prevState.filter(todo => todo.id !== id) );
  }

  return (
    <div className="App">
      <div className="title">TodoList</div>
      <TodoList
        todos={todos}
        handleCreate={handleCreate}
        handleToggle={setTodo}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
