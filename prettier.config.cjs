/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*',
      options: {
        trailingComma: 'all',
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        jsxSingleQuote: false,
        bracketSameLine: false,
      },
    },
  ],
};
