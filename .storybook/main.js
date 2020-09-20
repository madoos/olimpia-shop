const { join } = require('path');
const { writeFileSync } = require('fs')
const { pipe, mergeDeepRight, __, partialRight } = require('ramda')

const TS_CONFIG_PATH = join(__dirname, '../tsconfig.json')
const STORYBOOK_TS_CONFIG_PATH = join(__dirname, './tsconfig.json')
const COMPONENTS_PATH =  join(__dirname, '../src/components/**/**/*.stories.tsx')

// buildTsConfig :: () -> ()
const buildStorybookTsConfigFrom = pipe(
  require,
  mergeDeepRight(__, {
    compilerOptions: { baseUrl: "../" },
    include: [ "../types.d.ts", "../next-env.d.ts", "../**/*.stories.ts", "../**/*.stories.tsx"]
  }),
  partialRight(JSON.stringify, [null, 2]),
  (tsConfig) => writeFileSync(STORYBOOK_TS_CONFIG_PATH, tsConfig)
)

const typeScriptLoader = {
  loader: require.resolve('awesome-typescript-loader'),
  options:{ configFileName: STORYBOOK_TS_CONFIG_PATH }
}

const reactDocGenLoader = {
  loader: require.resolve('react-docgen-typescript-loader'),
  options:{ tsconfigPath: STORYBOOK_TS_CONFIG_PATH,}
}

buildStorybookTsConfigFrom(TS_CONFIG_PATH);

module.exports = {
  stories: [COMPONENTS_PATH],
    webpackFinal: async config => {
      config.module.rules.push({ test: /\.(ts|tsx)$/, use: [ typeScriptLoader, reactDocGenLoader] });
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
};