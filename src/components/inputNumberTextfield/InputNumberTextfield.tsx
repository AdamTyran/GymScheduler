interface Props {
  name: string;
  value: number;
  onChange(arg: number): void;
}

const InputNumberTextfield = ({ name, value, onChange }: Props) => {
  return (
    <div className="gap-4">
      <label>{name}</label>
      <input
        className="w-24 h-4 p-4 pl-10 text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default InputNumberTextfield;
