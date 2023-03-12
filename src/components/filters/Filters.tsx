import { countriesList, Country } from "@/data/countries";
import { positionsList } from "@/data/positions";
import { tagsList } from "@/data/tags";
import { Checkbox } from "../form/checkbox/Checkbox";

interface FiltersProps {
  filters: {
    [key: string]: { [key: string]: boolean };
  };
  onChange: (category: string, key: string, value: boolean) => void;
}

export const Filters = ({ filters, onChange }: FiltersProps) => {
  return (
    <aside className="border-r p-5 w-1/4 min-h-screen bg-gray-50 pt-32 pb-10 flex flex-col gap-6">
      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Country</h3>
        <div className="flex flex-col gap-1">
          {countriesList.map(({ code, label, flag }) => {
            return (
              <Checkbox
                label={`${flag} ${label}`}
                key={code}
                checked={filters.countries[code]}
                onChange={() =>
                  onChange("countries", code, !filters.countries[code])
                }
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
                checked={!!filters.positions[position]}
                onChange={() =>
                  onChange("position", position, !filters.positions[position])
                }
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
                checked={!!filters.tags[tag]}
                onChange={() => onChange("tags", tag, !filters.tags[tag])}
              />
            );
          })}
        </div>
      </div>

      <div>
        <Checkbox
          label="With audio"
          checked={!!filters.other.with_audio}
          onChange={() =>
            onChange("other", "with_audio", !filters.other.with_audio)
          }
        />
      </div>
    </aside>
  );
};
