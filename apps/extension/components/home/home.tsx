import Focus from "./focus";
import Time from "./time";
import { useState } from "react";
import Quotes from "./quotes";
import Links from "./Links/Links";
interface TodoItem {
  date: string;
  task: string;
  completed: boolean;
}

const initialTodos: TodoItem[] = [
  { date: "2024-09-10", task: "Your focus task here 1", completed: false },
  { date: "2024-09-11", task: "Your focus task here 2", completed: false },
  { date: "2024-09-12", task: "Your focus task here 3", completed: false },
  { date: "2024-09-13", task: "Your focus task here 4", completed: false },
];

const quotes = [
  {
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "Life is what happens when you're busy making other plans.",
    "author": "John Lennon"
  },
  {
    "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "The purpose of our lives is to be happy.",
    "author": "Dalai Lama"
  }
]


// bg-[url('https://images.unsplash.com/photo-1725489891089-5960671a3433?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const handleToggleComplete = (date: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.date === date ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (date: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.date !== date));
  };
  return (
    <div className="h-screen bg-cover bg-center">
      <Links/>
      <Time />
      <Focus todos={todos} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo} />
      <Quotes quotes={quotes}/>
    </div>
  );
};

export default Home;
