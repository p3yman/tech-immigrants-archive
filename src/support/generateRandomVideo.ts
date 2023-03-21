import { faker } from '@faker-js/faker';

import { countries } from '@/data/countries';
import { positions } from '@/data/positions';
import { tags } from '@/data/tags';
import { VideoItem } from '@/types';

export const generateRandomVideo = (): VideoItem => ({
  thumbnail: faker.image.imageUrl(640, 360),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  countries: faker.helpers.arrayElements(
    countries.map((c) => c.code),
    faker.datatype.number({
      min: 1,
      max: 2,
    }),
  ),
  position: faker.helpers.arrayElement(positions),
  tags: faker.helpers.arrayElements(
    tags,
    faker.datatype.number({
      min: 1,
      max: 5,
    }),
  ),
  youtube: `https://www.youtube.com/watch?v=${faker.random.alphaNumeric(11)}`,
  audio: faker.datatype.boolean() ? faker.internet.url() : null,
  publish_date: faker.date.between('2020-01-01T00:00:00.000Z', '2023-04-30T00:00:00.000Z').toISOString(),
});
