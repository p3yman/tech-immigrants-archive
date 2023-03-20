module.exports = {
    singleQuote: false,
    trailingComma: 'all',
    printWidth: 120,
    tabWidth: 4,
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
    importOrder: ['^components/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
