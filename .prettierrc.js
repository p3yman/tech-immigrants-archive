module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require('prettier-plugin-tailwindcss')],
};
