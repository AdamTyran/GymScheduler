interface Props {
  text: string;
  newItem: string;
  setNewItem(args: string): void;
}

const StringTextfield = ({ text, newItem, setNewItem }: Props) => {
  return (
    <div>
      <input
        className="block w-full p-4 pl-10 text-sm m-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        placeholder={text}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
  );
};

export default StringTextfield;
