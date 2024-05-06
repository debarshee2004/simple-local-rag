import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

const CreateTodo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 w-full flex justify-between fixed z-50 bg-[#0C0A09]">
        <div className="p-3">
          <Link href="/todo">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20">Create Todo</div>
    </div>
  );
};

export default CreateTodo;
