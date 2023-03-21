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
] as const;

export type Country = (typeof countries)[number]['code'];
