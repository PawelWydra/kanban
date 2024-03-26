type DataInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
};

function DataInput({ value, onChange, error = false }: DataInputProps) {
  return (
    <div className={`relative w-11/12 p-2 ring-2 ${
      error ? "ring-destructive" : "ring-gray-light"
    } rounded`}>
      <input
      className="w-full h-full bg-transparent outline-none"
        type="text"
        placeholder="name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && (
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-destructive text-sm">
          Can&apos;t be empty
        </span>
      )}
    </div>
  );
}

export default DataInput;
