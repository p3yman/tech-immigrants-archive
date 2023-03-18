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
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};
