import { Tag as TagType } from '@/data/tags';

interface TagProps {
  label: TagType;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Tag = ({ label, value, checked, onChange }: TagProps) => {
  const className = `inline-block cursor-pointer transition-colors border border-blue-200 text-blue-900 rounded px-2 py-1 text-xs font-semibold ${
    checked
      ? 'bg-blue-500 hover:bg-blue-600 hover:border-blue-700 border-blue-600 !text-white'
      : 'bg-blue-50 hover:bg-blue-100 hover:border-blue-300'
  }`;
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <span>{label}</span>
    </label>
  );
};
