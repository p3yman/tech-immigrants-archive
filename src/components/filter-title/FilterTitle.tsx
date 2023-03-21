interface FilterTitleProps {
  title: string;
  showClear?: boolean;
  onClear?: () => void;
}

const FilterTitle = ({ title, showClear, onClear }: FilterTitleProps) => {
  return (
    <div className="mb-2 flex h-5 items-center justify-between">
      <h3 className="text-sm font-medium text-slate-500">{title}</h3>
      {showClear && onClear && (
        <button className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600" onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterTitle;
