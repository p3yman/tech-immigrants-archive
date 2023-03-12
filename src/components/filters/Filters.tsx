import { countriesList, Country } from "@/data/countries";
import { positionsList } from "@/data/positions";
import { tagsList } from "@/data/tags";
import { Checkbox } from "../form/checkbox/Checkbox";

interface FiltersProps {
  filters: any;
  onChange: () => void;
}

export const Filters = ({ filters, onChange }: FiltersProps) => {
  console.log(filters);
  return (
    <aside className="border-r p-5 w-1/4 h-screen bg-gray-50 pt-32 flex flex-col gap-6">
      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Country</h3>
        <div className="flex flex-col gap-1">
          {countriesList.map(({ code, label, flag }) => {
            return (
              <Checkbox
                label={`${flag} ${label}`}
                key={code}
                value={code}
                checked={!!filters.countries[code]}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Position</h3>
        <div className="flex flex-col gap-1">
          {positionsList.map((position) => {
            return (
              <Checkbox
                label={position}
                key={position}
                value={position}
                checked={!!filters.positions[position]}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Tags</h3>
        <div className="flex flex-col gap-1">
          {tagsList.map((tag) => {
            return (
              <Checkbox
                label={tag}
                key={tag}
                value={tag}
                checked={!!filters.tags[tag]}
              />
            );
          })}
        </div>
      </div>

      <div>Switch for with audio</div>
    </aside>
  );
};
