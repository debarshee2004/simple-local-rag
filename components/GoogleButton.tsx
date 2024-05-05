import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

const GoogleButton = () => {
  return (
    <div>
      <Button
        className="flex justify-center text-center w-[130px] sm:w-40"
        variant="outline"
      >
        <Icons.google className="h-3 w-3" />
        <p className="p-2">Google</p>
      </Button>
    </div>
  );
};

export default GoogleButton;
