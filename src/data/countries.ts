export const countriesList = {
  ir: {
    label: "Iran",
    flag: "🇮🇷",
  },
  nl: {
    label: "Netherlands",
    flag: "🇳🇱",
  },
  de: {
    label: "Germany",
    flag: "🇩🇪",
  },
  tr: {
    label: "Turkey",
    flag: "🇹🇷",
  },
};

export type Country = keyof typeof countriesList;
