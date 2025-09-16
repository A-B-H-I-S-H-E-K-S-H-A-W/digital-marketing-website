import { cn } from "@/lib/utils";
import React from "react";

const GradientText = ({ children, className }) => {
  return (
    <span className={cn("relative bg-clip-text text-transparent", className)}>
      {children}
    </span>
  );
};

export default GradientText;
