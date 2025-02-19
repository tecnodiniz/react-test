import { useState } from "react";

import Todo from "../components/todo/Todo";

type TodoItem = {
  item: string;
  done: boolean;
};

function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const todoAdd = (todo: TodoItem) =>
    setTodos((prevTodos) => [...prevTodos, todo]);

  const toggleItem = (index: number) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleToggle = (index: number) => toggleItem(index);

  const cleanTodo = () => {
    setTodos([]);
  };
  return (
    <Todo
      todos={todos}
      toggleItem={handleToggle}
      sendItem={todoAdd}
      cleanTodo={cleanTodo}
    />
  );
}

export default Home;
