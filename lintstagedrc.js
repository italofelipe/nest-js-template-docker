/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const buildEslintCommand = (filenames) =>
  `pnpm run lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join('--file')}`;

module.exports = {
  "*.{js,ts}": [buildEslintCommand],
};
