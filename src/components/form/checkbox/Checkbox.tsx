interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="text-blue-600 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};
