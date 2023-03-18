import { countries } from "@/data/countries";
import { positions } from "@/data/positions";
import { tags } from "@/data/tags";
import { VideoItem } from "@/types";
import { faker } from "@faker-js/faker";

export const generateRandomVideo = (): VideoItem => ({
  thumbnail:
    faker.image.abstract(640, 360) + `?random=${faker.datatype.uuid()}`,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  countries: faker.helpers.arrayElements(
    countries.map((c) => c.code),
    faker.datatype.number({
      min: 1,
      max: 2,
    })
  ),
  position: faker.helpers.arrayElement(positions),
  tags: faker.helpers.arrayElements(
    tags,
    faker.datatype.number({
      min: 1,
      max: 5,
    })
  ),
  youtube: `https://www.youtube.com/watch?v=${faker.random.alphaNumeric(11)}`,
  audio: faker.datatype.boolean() ? faker.internet.url() : null,
  published_at: String(faker.date.between("2020-01-01", "2030-01-01")),
});
