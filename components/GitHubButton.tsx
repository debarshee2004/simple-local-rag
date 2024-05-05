import React from "react";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io";

const GitHubButton = () => {
  return (
    <div>
      <Button
        className="flex justify-center text-center w-[130px] sm:w-40"
        variant="outline"
      >
        <IoLogoGithub />
        <p className="p-2">GitHub</p>
      </Button>
    </div>
  );
};

export default GitHubButton;
