"use client";
import React from "react";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

const Todo = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="h-10 flex justify-between items-center rounded-md border w-[380px] sm:w-[700px] py-8">
        <div className="flex justify-between items-center">
          <Checkbox className="ml-4 h-5 w-5" id="todo" />
          <label htmlFor="todo" className="pl-4">
            This is a Todo
          </label>
        </div>
        <div>
          <Link href="/update-todo">
            <Button className="mr-2" variant="secondary" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
          <Button className="mr-4" variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
