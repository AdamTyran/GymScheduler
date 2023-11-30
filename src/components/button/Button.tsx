interface Props {
  text: string;
  onClick(): void;
  style: string;
}

const Button = ({ text, onClick, style }: Props) => {
  return (
    <button
      className={`${style} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
