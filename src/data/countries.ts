export const countries = [
  {
    code: "ir",
    label: "Iran",
    flag: "🇮🇷",
  },
  {
    code: "nl",
    label: "Netherlands",
    flag: "🇳🇱",
  },
  {
    code: "de",
    label: "Germany",
    flag: "🇩🇪",
  },
  {
    code: "tr",
    label: "Turkey",
    flag: "🇹🇷",
  },
] as const;

export type Country = typeof countries[number]["code"];
