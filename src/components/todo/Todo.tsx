import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

type TodoItem = {
  item: string;
  done: boolean;
};

type TodoProps = {
  todos: TodoItem[];
  toggleItem: (index: number) => void;
  sendItem: (todo: TodoItem) => void;
  cleanTodo: () => void;
};

function Todo({ todos, toggleItem, sendItem, cleanTodo }: TodoProps) {
  const [todo, setTodo] = useState<TodoItem>({ item: "", done: false });

  const handleAddItem = () => {
    if (todo.item.trim()) {
      sendItem(todo);
      setTodo({ item: "", done: false });
    }
  };
  return (
    <Card className="w-[380px] mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Manage your tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 mb-2">
          <Input
            type="text"
            placeholder="task"
            value={todo.item}
            onChange={(e) =>
              setTodo((prevTodo) => ({ ...prevTodo, item: e.target.value }))
            }
            onKeyDown={(e) => e.key == "Enter" && handleAddItem()}
          />
          <Button
            className="bg-blue-500 hover:bg-blue-700"
            onClick={handleAddItem}
          >
            <Plus />
          </Button>
        </div>
        <div className="mt-10 h-50 overflow-auto">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {" "}
                <div className="flex items-center space-x-2 m-2">
                  <Checkbox
                    id={"item_" + todos.indexOf(todo)}
                    checked={todo.done}
                    onCheckedChange={() => toggleItem(todos.indexOf(todo))}
                  />
                  <Label
                    htmlFor={"item_" + todos.indexOf(todo)}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {todo.item}
                  </Label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="justify-around">
        <span>Items: {todos.filter((todo) => todo.done == false).length}</span>
        <Button variant="ghost" onClick={cleanTodo}>
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Todo;
