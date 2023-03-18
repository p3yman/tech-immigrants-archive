interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label className="flex items-center space-x-2 w-full">
      {label && <span>{label}</span>}
      <input
        className="w-full"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </label>
  );
};
