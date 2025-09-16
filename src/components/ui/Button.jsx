import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-8 py-2 rounded-full bg-gradient-to-b from-tekhelet to-french text-foreground focus:ring-2 focus:ring-french hover:shadow-xl transition duration-200 md:text-base text-sm"
    >
      {children}
    </button>
  );
};

export default Button;
