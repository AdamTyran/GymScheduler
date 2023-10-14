interface Props {
  promptName: string;
  newItem: string;
  setNewItem(arg: string): void;
}

const AddExerciseTextfield = ({ promptName, newItem, setNewItem }: Props) => {
  return (
    <div>
      <input
        // className=" w-full px-3 py-2 font-semibold placeholder-gray-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus-within:text-gray-600"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        placeholder={promptName}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
  );
};

export default AddExerciseTextfield;
