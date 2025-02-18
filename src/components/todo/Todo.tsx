import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type TodoItem = {
  item: string;
  done: boolean;
};

type TodoProps = {
  todos: TodoItem[];
};
function Todo({ todos }: TodoProps) {
  return (
    <Card className="w-[380px] mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Manage your tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 mb-2">
          <Input type="text" placeholder="task" />
          <Button className="bg-blue-500 hover:bg-blue-700">Add</Button>
        </div>

        <div>
          <Checkbox id="item" />
          <Label htmlFor="item">Teste</Label>

          <Checkbox id="item" />
          <Label htmlFor="item">Teste</Label>

          <Checkbox id="item" />
          <Label htmlFor="item">Teste</Label>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>Items: {todos.length}</CardFooter>
    </Card>
  );
}

export default Todo;
