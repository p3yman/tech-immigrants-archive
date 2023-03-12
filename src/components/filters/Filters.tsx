interface FiltersProps {
  filters: {};
  onChange: () => void;
}

export const Filters = ({ filters = {}, onChange }: FiltersProps) => {
  return (
    <aside className="border-r p-5 w-1/4 h-screen bg-gray-50 pt-32">
      Filters
    </aside>
  );
};
