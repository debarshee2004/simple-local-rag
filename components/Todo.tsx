import React from "react";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const Todo = () => {
  return (
    <div className="h-10 flex justify-between items-center rounded-md border mx-4 py-8">
      <div className="flex justify-between items-center">
        <Checkbox className="ml-4 h-5 w-5" id="todo" />
        <label htmlFor="todo" className="pl-4">
          This is a Todo
        </label>
      </div>
      <div>
        <Button className="mr-2" variant="secondary" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button className="mr-4" variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
