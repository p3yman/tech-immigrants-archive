import { countries } from "@/data/countries";
import { positions } from "@/data/positions";
import { tags } from "@/data/tags";
import { Checkbox } from "../form/checkbox/Checkbox";
import { Tag } from "../form/tag/Tag";

interface FiltersProps {
  filters: {
    countries: string[];
    positions: string[];
    tags: string[];
    withAudio: boolean;
  };
  onChange: (
    category: "country" | "position" | "tag" | "withAudio",
    key?: string
  ) => void;
}

export const Filters = ({ filters, onChange }: FiltersProps) => {
  return (
    <aside className="border-r p-5 w-1/4 min-h-screen bg-gray-50 pt-32 pb-10 flex flex-col gap-6">
      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Country</h3>
        <div className="flex flex-col gap-1">
          {countries.map(({ code, label, flag }) => {
            return (
              <Checkbox
                label={`${flag} ${label}`}
                key={code}
                value={code}
                checked={filters.countries.includes(code)}
                onChange={() => onChange("country", code)}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Position</h3>
        <div className="flex flex-col gap-1">
          {positions.map((position) => {
            return (
              <Checkbox
                label={position}
                value={position}
                key={position}
                checked={filters.positions.includes(position)}
                onChange={() => onChange("position", position)}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-sm text-slate-500 mb-2">Tags</h3>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => {
            return (
              <Tag
                label={tag}
                value={tag}
                key={tag}
                checked={filters.tags.includes(tag)}
                onChange={() => onChange("tag", tag)}
              />
            );
          })}
        </div>
      </div>

      <div>
        <Checkbox
          label="With audio"
          value="with_audio"
          checked={filters.withAudio}
          onChange={() => onChange("withAudio")}
        />
      </div>
    </aside>
  );
};
