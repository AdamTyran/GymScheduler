import React from "react";

interface Props {
  text: string;
  onClick(args: any): void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
