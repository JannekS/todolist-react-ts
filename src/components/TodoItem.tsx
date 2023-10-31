import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const TodoItem = () => {
  const [completed, setCompleted] = useState(false);
  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center p-2 h-10 w-60 rounded-md bg-slate-200 shadow-md">
        <div className="flex flex-row space-x-2">
          <input type="checkbox" checked={completed} onChange={handleChange} />
          <span className={completed ? 'line-through text-slate-500' : ''}>
            Repair my bike
          </span>
        </div>

        <button className="btn-delete">
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default TodoItem;
