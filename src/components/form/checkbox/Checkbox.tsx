interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="text-blue-600 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <span>{label}</span>
    </label>
  );
};
