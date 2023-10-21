interface Props {
  name: string;
  value: number | undefined;
  onChange(arg: number | undefined): void;
}

const InputNumberTextfield = ({ name, value, onChange }: Props) => {
  return (
    <div className="gap-4">
      <label>{name}</label>
      <input
        className="w-24 h-4 p-4 pl-10 text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        type="number"
        value={value ?? ""}
        onChange={(e) => {
          const number = parseInt(e.target.value);
          onChange(Number.isNaN(number) ? undefined : number);
        }}
      />
    </div>
  );
};

export default InputNumberTextfield;
