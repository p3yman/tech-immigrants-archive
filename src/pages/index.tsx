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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmSize, setIsSmSize] = useState(false);

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
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if the screen size is smaller than 640px and update the state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSmSize(true);
      } else {
        setIsSmSize(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Tech Immigrants Archive</title>
        <meta name="description" content="Tech Immigrants YouTube Videos Archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex flex-col sm:flex-row sm:pt-6 lg:pt-36">
        <div className={`sm:w-80 ${isSmSize && !isMenuOpen ? 'hidden' : 'static'} ${isMenuOpen ? ' z-40 mt-10 ' : ''}`}>
          <div className={`fixed z-10 w-full bg-white sm:relative sm:z-auto sm:w-auto sm:bg-transparent `}>
            <Filters
              filters={{ search, countries, positions, tags, withAudio }}
              onChange={onChangeFilter}
              onClear={onClearFilter}
            />
          </div>
        </div>
        <div className={`order-1 flex-1  ${isMenuOpen ? 'z-0' : 'z-40 pt-10'}`}>
          <List list={filteredVideos} />
        </div>
      </main>
    </>
  );
}
