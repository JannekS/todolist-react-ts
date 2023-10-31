// import { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../App';

type TodoItemProp = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoItemProp) => {
  return (
    <>
      <ul className="flex flex-col items-center space-y-2 mx-auto my-10 p-4 max-w-lg bg-blue-300 text-slate-800 text-sm rounded-md shadow-md shadow-indigo-100">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
