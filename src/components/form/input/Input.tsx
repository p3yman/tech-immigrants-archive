interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label className="flex w-full items-center space-x-2">
      {label && <span>{label}</span>}
      <input className="w-full" type="text" onChange={(e) => onChange(e.target.value)} value={value} />
    </label>
  );
};
