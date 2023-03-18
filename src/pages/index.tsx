import { useEffect, useMemo, useState } from "react";
import Head from "next/head";

import { Header } from "@/components/header/Header";
import { Filters } from "@/components/filters/Filters";
import { List } from "@/components/list/List";

import { videos } from "@/data/videos";
import { useToggleArray } from "@/hooks/useToggleArray";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";

export default function Home() {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [countries, toggleCountry] = useToggleArray([]);
  const [positions, togglePosition] = useToggleArray([]);
  const [tags, toggleTag] = useToggleArray([]);
  const [withAudio, toggleWithAudio] = useToggleBoolean(false);

  const arrayToggles = useMemo(() => {
    return {
      country: toggleCountry,
      position: togglePosition,
      tag: toggleTag,
      withAudio: toggleWithAudio,
    };
  }, [toggleCountry, togglePosition, toggleTag, toggleWithAudio]);

  useEffect(() => {
    const filterVideos = () => {
      const filtered = videos.filter((video) => {
        const hasPosition =
          positions.length === 0 || positions.includes(video.position);
        const hasTag =
          tags.length === 0 || tags.some((tag) => video.tags.includes(tag));
        const hasCountry =
          countries.length === 0 ||
          countries.some((country) => video.countries.includes(country));
        const hasAudio = !withAudio || (withAudio && video.audio !== null);

        return hasPosition && hasTag && hasCountry && hasAudio;
      });

      setFilteredVideos(filtered);
    };

    filterVideos();
  }, [positions, tags, countries, withAudio]);

  const onChangeFilter = (
    type: "country" | "position" | "tag" | "withAudio",
    key?: string
  ) => {
    type !== "withAudio" && key ? arrayToggles[type](key) : toggleWithAudio();
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
      <main className="container flex gap-8 min-h-screen">
        <Filters
          filters={{ countries, positions, tags, withAudio }}
          onChange={onChangeFilter}
        />
        <List list={filteredVideos} />
      </main>
    </>
  );
}
