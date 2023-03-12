import { ChangeEventHandler } from "react";

interface CheckboxProps {
  label: string;
  className?: string;
  value: string;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({
  label,
  className = "",
  value,
  onChange,
  checked = false,
  ...rest
}: CheckboxProps) {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}
