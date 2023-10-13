interface Props {
  textboxName: string;
  newItem: string;
  setNewItem(arg: string): void;
}

const AddExerciseTextfield = ({ textboxName, newItem, setNewItem }: Props) => {
  return (
    <div>
      <label>{textboxName}</label>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
  );
};

export default AddExerciseTextfield;
