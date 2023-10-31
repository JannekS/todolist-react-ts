import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: false;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodoData() {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const todoData = await res.json();
    setTodos(todoData);
  }

  useEffect(() => {
    fetchTodoData();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-cyan-800 font-bold text-center max-w-md mx-auto mt-20">
        My Todo List:
      </h1>
      {todos.length > 0 ? <TodoList todos={todos} /> : <p>Please wait</p>}
    </>
  );
};

export default App;
