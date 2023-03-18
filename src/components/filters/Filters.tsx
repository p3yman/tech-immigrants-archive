import { countries } from "@/data/countries";
import { positions } from "@/data/positions";
import { tags } from "@/data/tags";
import FilterTitle from "../filter-title/FilterTitle";
import { Checkbox } from "../form/checkbox/Checkbox";
import { Tag } from "../form/tag/Tag";

export type categories = "country" | "position" | "tag" | "withAudio";

interface FiltersProps {
  filters: {
    countries: string[];
    positions: string[];
    tags: string[];
    withAudio: boolean;
  };
  onChange: (category: categories, key?: string) => void;
  onClear: (category: categories) => void;
}

export const Filters = ({ filters, onChange, onClear }: FiltersProps) => {
  return (
    <aside className="border-b sm:border-r sm:border-b-0 p-5 sm:min-h-screen bg-gray-50 pb-10 flex flex-col gap-6">
      <div>
        <FilterTitle
          title="Country"
          onClear={() => onClear("country")}
          showClear={filters.countries.length > 0}
        />
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
        <FilterTitle
          title="Position"
          onClear={() => onClear("position")}
          showClear={filters.positions.length > 0}
        />
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
        <FilterTitle
          title="Tags"
          onClear={() => onClear("tag")}
          showClear={filters.tags.length > 0}
        />
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
