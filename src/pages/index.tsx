import { useState } from "react";
import Head from "next/head";

import { Header } from "@/components/header/Header";
import { Filters } from "@/components/filters/Filters";
import { List } from "@/components/list/List";

import { videosData } from "@/data/videos";
import { countriesList } from "@/data/countries";
import { positionsList } from "@/data/positions";
import { tagsList } from "@/data/tags";

const createDefaultFilters = () => {
  const countries: { [key: string]: boolean } = Object.keys(
    countriesList
  ).reduce<{ [key: string]: boolean }>((obj, c: string) => {
    obj[c] = false;
    return obj;
  }, {});

  const positions: { [key: string]: boolean } = positionsList.reduce<{
    [key: string]: boolean;
  }>((obj, c: string) => {
    obj[c] = false;
    return obj;
  }, {});

  const tags: { [key: string]: boolean } = tagsList.reduce<{
    [key: string]: boolean;
  }>((obj, c: string) => {
    obj[c] = false;
    return obj;
  }, {});

  return {
    countries,
    positions,
    tags,
    other: {
      with_audio: false,
    },
  };
};

export default function Home() {
  const [filters, setFilters] = useState(createDefaultFilters());

  const handleCheckboxChange = (
    category: string,
    key: string,
    value: boolean
  ) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [category]: Object.assign(prevFilters, { [key]: value }),
      };
    });
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
        <Filters filters={filters} onChange={handleCheckboxChange} />
        <List list={videosData} />
      </main>
    </>
  );
}
