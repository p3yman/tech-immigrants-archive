interface FilterTitleProps {
  title: string;
  showClear?: boolean;
  onClear?: () => void;
}

const FilterTitle = ({ title, showClear, onClear }: FilterTitleProps) => {
  return (
    <div className="flex justify-between h-5 items-center mb-2">
      <h3 className="font-medium text-sm text-slate-500">{title}</h3>
      {showClear && onClear && (
        <button
          className="font-medium text-sm text-blue-500 transition-colors hover:text-blue-600"
          onClick={onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterTitle;
