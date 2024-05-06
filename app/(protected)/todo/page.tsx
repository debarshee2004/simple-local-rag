import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

const TodoList = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 w-full flex justify-between fixed z-50 bg-[#0C0A09]">
        <div className="p-3">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="p-3">
          <Link href="/">
            <Button variant="outline" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20 text-center">TodoList</div>
      <div className="h-16 p-4 w-full bottom-0 fixed z-50 text-center">
        <Link href="/create-todo">
          <Button className="h-10 w-full sm:w-[700px] text-base">
            <CirclePlus className="mr-2 h-4 w-4" /> Add a Todo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
