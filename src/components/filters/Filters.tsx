import { countries } from '@/data/countries';
import { positions } from '@/data/positions';
import { tags } from '@/data/tags';

import FilterTitle from '../filter-title/FilterTitle';
import { Checkbox } from '../form/checkbox/Checkbox';
import { Input } from '../form/input/Input';
import { Tag } from '../form/tag/Tag';

export type categories = 'search' | 'country' | 'position' | 'tag' | 'withAudio';

interface FiltersProps {
  filters: {
    search: string;
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
    <aside className="sm:sattic fixed flex h-full flex-col justify-between overflow-scroll border-b bg-gray-50 p-5 pb-10 sm:min-h-full sm:overflow-auto sm:border-r sm:border-b-0">
      <section className="flex flex-col gap-6">
        <div>
          <FilterTitle title="Search by name" onClear={() => onClear('search')} showClear={!!filters.search} />
          <Input value={filters.search} onChange={(value) => onChange('search', value)} />
        </div>
        <div>
          <FilterTitle title="Country" onClear={() => onClear('country')} showClear={filters.countries.length > 0} />
          <div className="flex flex-col gap-1">
            {countries.map(({ code, label, flag }) => {
              return (
                <Checkbox
                  label={`${flag} ${label}`}
                  key={code}
                  value={code}
                  checked={filters.countries.includes(code)}
                  onChange={() => onChange('country', code)}
                />
              );
            })}
          </div>
        </div>

        <div>
          <FilterTitle title="Position" onClear={() => onClear('position')} showClear={filters.positions.length > 0} />
          <div className="flex flex-col gap-1">
            {positions.map((position) => {
              return (
                <Checkbox
                  label={position}
                  value={position}
                  key={position}
                  checked={filters.positions.includes(position)}
                  onChange={() => onChange('position', position)}
                />
              );
            })}
          </div>
        </div>

        <div>
          <FilterTitle title="Tags" onClear={() => onClear('tag')} showClear={filters.tags.length > 0} />
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => {
              return (
                <Tag
                  label={tag}
                  value={tag}
                  key={tag}
                  checked={filters.tags.includes(tag)}
                  onChange={() => onChange('tag', tag)}
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
            onChange={() => onChange('withAudio')}
          />
        </div>
      </section>
      <footer>
        <div className="mt-3 text-center text-slate-500">
          Made by{' '}
          <a href="https://peyman.me" target="_blank" className="text-blue-500 hover:text-blue-600" rel="noreferrer">
            Peyman
          </a>
        </div>
      </footer>
    </aside>
  );
};
