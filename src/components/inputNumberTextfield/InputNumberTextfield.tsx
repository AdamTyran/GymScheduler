interface Props {
  name: string;
  value: number;
  onChange(arg: number): void;
}

const InputNumberTextfield = ({ name, value, onChange }: Props) => {
  return (
    <div>
      <label>{name}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default InputNumberTextfield;
