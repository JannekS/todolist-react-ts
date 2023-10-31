import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const TodoItem = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <li className="flex flex-row justify-between items-center p-2 h-10 w-5/6 min-w-60 rounded-md bg-slate-200 shadow-md">
        <div className="flex flex-row space-x-2">
          <input type="checkbox" checked={completed} onChange={handleChange} />
          <span
            className={
              completed
                ? 'line-through text-slate-500 line-clamp-1'
                : 'line-clamp-1'
            }
          >
            {todo.title}
          </span>
        </div>

        <button className="btn-delete">
          <TrashIcon className="w-4 h-4" />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
