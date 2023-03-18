import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";

import { Header } from "@/components/header/Header";
import { categories, Filters } from "@/components/filters/Filters";
import { List } from "@/components/list/List";

import { videos } from "@/data/videos";
import { useToggleArray } from "@/hooks/useToggleArray";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import { Country } from "@/data/countries";

export default function Home() {
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
        const hasPosition =
          positions.length === 0 || positions.includes(video.position);
        const hasTag =
          tags.length === 0 || tags.some((tag) => video.tags.includes(tag));
        const hasCountry =
          countries.length === 0 ||
          countries.some((country) =>
            video.countries.includes(country as Country)
          );
        const hasAudio = !withAudio || (withAudio && video.audio !== null);

        return hasPosition && hasTag && hasCountry && hasAudio;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publish_date);
        const dateB = new Date(b.publish_date);

        return dateB.getTime() - dateA.getTime();
      });

    setFilteredVideos(filtered);
  }, [positions, tags, countries, withAudio]);

  useEffect(() => {
    filterVideos();
  }, [filterVideos]);

  const onChangeFilter = (type: categories, key?: string) => {
    type !== "withAudio" && key ? arrayToggles[type](key) : toggleWithAudio();
  };

  const onClearFilter = (type: categories) => {
    type !== "withAudio" && arrayClearToggles[type]();
  };

  return (
    <>
      <Head>
        <title>Tech Immigrants Archive</title>
        <meta
          name="description"
          content="Tech Immigrants YouTube Videos Archive"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen pt-36 sm:pt-24 flex-col sm:flex-row">
        <Filters
          filters={{ countries, positions, tags, withAudio }}
          onChange={onChangeFilter}
          onClear={onClearFilter}
        />
        <div className="flex-1">
          <List list={filteredVideos} />
        </div>
      </main>
    </>
  );
}
