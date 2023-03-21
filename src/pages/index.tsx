import Head from 'next/head';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Filters, categories } from '@/components/filters/Filters';
import { Header } from '@/components/header/Header';
import { List } from '@/components/list/List';
import { Country } from '@/data/countries';
import { videos } from '@/data/videos';
import { useToggleArray } from '@/hooks/useToggleArray';
import { useToggleBoolean } from '@/hooks/useToggleBoolean';

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [countries, toggleCountry, clearCountries] = useToggleArray([]);
  const [positions, togglePosition, clearPositions] = useToggleArray([]);
  const [tags, toggleTag, clearTags] = useToggleArray([]);
  const [withAudio, toggleWithAudio] = useToggleBoolean(false);

  const arrayToggles = useMemo(() => {
    return {
      country: toggleCountry,
      position: togglePosition,
      tag: toggleTag,
      withAudio: toggleWithAudio,
    };
  }, [toggleCountry, togglePosition, toggleTag, toggleWithAudio]);

  const arrayClearToggles = useMemo(() => {
    return {
      country: clearCountries,
      position: clearPositions,
      tag: clearTags,
    };
  }, [clearCountries, clearPositions, clearTags]);

  const filterVideos = useCallback(() => {
    const filtered = videos
      .filter((video) => {
        const matchesQuery = !search || video.name.toLowerCase().includes(search.toLowerCase());
        const hasPosition = positions.length === 0 || (video.position && positions.includes(video.position));
        const hasTag = tags.length === 0 || tags.some((tag) => video.tags.includes(tag));
        const hasCountry =
          countries.length === 0 || countries.some((country) => video.countries.includes(country as Country));
        const hasAudio = !withAudio || (withAudio && video.audio !== null);

        return matchesQuery && hasPosition && hasTag && hasCountry && hasAudio;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publish_date);
        const dateB = new Date(b.publish_date);

        return dateB.getTime() - dateA.getTime();
      });

    setFilteredVideos(filtered);
  }, [search, positions, tags, countries, withAudio]);

  useEffect(() => {
    filterVideos();
  }, [filterVideos]);

  const onChangeFilter = (type: categories, value?: string) => {
    if (type === 'withAudio') {
      toggleWithAudio();
    }

    if (type === 'search') {
      setSearch(value || '');
    } else if (value) {
      arrayToggles[type](value);
    }
  };

  const onClearFilter = (type: categories) => {
    if (type === 'withAudio') {
      return;
    }

    if (type === 'search') {
      setSearch('');
    } else {
      arrayClearToggles[type]();
    }
  };

  return (
    <>
      <Head>
        <title>Tech Immigrants Archive</title>
        <meta name="description" content="Tech Immigrants YouTube Videos Archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col pt-36 sm:flex-row sm:pt-24">
        <Filters
          filters={{ search, countries, positions, tags, withAudio }}
          onChange={onChangeFilter}
          onClear={onClearFilter}
        />
        <div className="flex-1 ml-80">
          <List list={filteredVideos} />
        </div>
      </main>
    </>
  );
}
