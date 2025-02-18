import { useEffect, useState } from "react";
import mockData from "../data/mock.json";
import Todo from "../components/todo/Todo";

type TodoItem = {
  item: string;
  done: boolean;
};

function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodos(mockData);
  }, []);

  return <Todo todos={todos} />;
}

export default Home;
