import React from "react";

interface Props {
  text: string;
  func(args: any): void;
  args?: any;
}

const Button = ({ text, func, args }: Props) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      onClick={() => (args ? func(args) : func)}
    >
      {text}
    </button>
  );
};

export default Button;
