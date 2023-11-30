import { ButtonHTMLAttributes, useId } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, className, ...otherProps }: Props) => {
  const id = useId();
  return (
    <button
      id={id}
      {...otherProps}
      className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`}
    >
      {text}
    </button>
  );
};

export default Button;
