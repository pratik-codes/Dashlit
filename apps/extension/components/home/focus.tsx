import React from 'react';
import { Checkbox } from '../ui/checkbox';

interface TodoItem {
  date: string;
  task: string;
  completed: boolean;
}

interface FocusProps {
  todos: TodoItem[];
  onToggleComplete: (date: string) => void;
  onDeleteTodo: (date: string) => void;
}

const Focus: React.FC<FocusProps> = ({ todos, onToggleComplete, onDeleteTodo }) => {
  const today = new Date().toISOString().split('T')[0];
  const todayTodo = todos.find((todo) => todo.date === today);

  return (
    <div className="absolute top-[43%] inset-0 flex items-center justify-center">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">TODAY</h3>
        {todayTodo ? (
          <div className="text-lg flex items-center space-x-2">
            <div className="group flex items-center space-x-2 focus-within:outline-none" tabIndex={0}>
              {/* Replace the native checkbox with shadcn's Checkbox */}
              <Checkbox
                checked={todayTodo.completed}
                onCheckedChange={() => onToggleComplete(todayTodo.date)}
              />
              <p className={`${todayTodo.completed ? 'line-through text-gray-400' : ''}`}>
                {todayTodo.task}
              </p>

              <button
                onClick={() => onDeleteTodo(todayTodo.date)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center mt-4">No focus task for today.</p>
        )}
      </div>
    </div>
  );
};

export default Focus;
