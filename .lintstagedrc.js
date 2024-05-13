/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const buildEslintCommand = (filenames) => 
  `pnpm run lint --fix ${filenames.map(f => `'${path.relative(process.cwd(), f)}'`).join(' ')}`;

const prettierCommand = (filenames) =>
  `pnpm prettier --write ${filenames.join(' ')}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    prettierCommand
  ]
};
