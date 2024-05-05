import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

const GitHubButton = () => {
  return (
    <div>
      <Button
        className="flex justify-center text-center w-[130px] sm:w-40"
        variant="outline"
      >
        <Icons.gitHub className="h-3 w-3" />
        <p className="p-2">GitHub</p>
      </Button>
    </div>
  );
};

export default GitHubButton;
