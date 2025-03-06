export const countries = [
  {
    code: 'ir',
    label: 'Iran',
    flag: '🇮🇷',
  },
  {
    code: 'nl',
    label: 'Netherlands',
    flag: '🇳🇱',
  },
  {
    code: 'de',
    label: 'Germany',
    flag: '🇩🇪',
  },
  {
    code: 'tr',
    label: 'Turkey',
    flag: '🇹🇷',
  },
  {
    code: 'ca',
    label: 'Canada',
    flag: '🇨🇦',
  },
  {
    code: 'se',
    label: 'Sweden',
    flag: '🇸🇪',
  },
  {
    code: 'uk',
    label: 'United Kingdom',
    flag: '🇬🇧',
  },
  {
    code: 'my',
    label: 'Malaysia',
    flag: '🇲🇾',
  },
  {
    code: 'ee',
    label: 'Estonia',
    flag: '🇪🇪',
  },
  {
    code: 'au',
    label: 'Australia',
    flag: '🇦🇺',
  },
  {
    code: 'at',
    label: 'Austria',
    flag: '🇦🇹',
  },
  {
    code: 'us',
    label: 'United States',
    flag: '🇺🇸',
  },
  {
    code: 'fe',
    label: 'Finland',
    flag: '🇫🇮',
  },
  {
    code: 'no',
    label: 'Norway',
    flag: '🇳🇴',
  },
  {
    code: 'ua',
    label: 'Ukraine',
    flag: '🇺🇦',
  },
  {
    code: 'un',
    label: 'United Nations',
    flag: '🇺🇳',
  },
  {
    code: 'es',
    label: 'Spain',
    flag: '🇪🇸',
  },
  {
    code: 'dk',
    label: 'Denmark',
    flag: '🇩🇰',
  },
  {
    code: 'gb',
    label: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  },
  {
    code: 'it',
    label: 'Italy',
    flag: '🇮🇹',
  },
  {
    code: 'pt',
    label: 'Portugal',
    flag: '🇵🇹',
  },
  {
    code: 'th',
    label: 'Thailand',
    flag: '🇹🇭',
  },
  {
    code: 'be',
    label: 'Belgium',
    flag: '🇧🇪',
  },
  {
    code: 'fr',
    label: 'France',
    flag: '🇫🇷',
  },
  {
    code: 'ch',
    label: 'Switzerland',
    flag: '🇨🇭',
  },
] as const;

export type Country = (typeof countries)[number]['code'];
