import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <div>
      <Button
        className="flex justify-center text-center w-[130px] sm:w-40"
        variant="outline"
      >
        <FcGoogle />
        <p className="p-2">Google</p>
      </Button>
    </div>
  );
};

export default GoogleButton;
