import { useState } from "react";

type DataInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: boolean;
};

function DataInput({ value, onChange, onBlur, error = false }: DataInputProps) {
  const [hasFocus, setHasFocus] = useState(false);

  const handleBlur = () => {
    setHasFocus(true);
  };

  return (
    <div
      className={`relative w-11/12 p-2 ring-2 ${
        error && hasFocus ? "ring-destructive" : "ring-gray-light"
      } rounded`}
    >
      <input
        className="h-full w-full outline-none"
        type="text"
        placeholder="name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={handleBlur}
        onFocus={() => setHasFocus(false)}
      />
      {error && hasFocus && (
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-destructive text-sm">
          Can&apos;t be empty
        </span>
      )}
    </div>
  );
}

export default DataInput;
