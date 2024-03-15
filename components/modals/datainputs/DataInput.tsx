
function DataInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    return (
      <input
        className="w-11/12 p-2 ring-2 ring-gray-light rounded"
        type="text"
        placeholder="Add column name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }

export default DataInput