const { join } = require('path');
const TS_CONFIG_PATH = join(__dirname, './tsconfig.json')
const fs = require('fs')
const { mergeDeepRight } = require('ramda')

const buildTsConfig = () => {
    const config = require(join(__dirname, '../tsconfig.json'))
    const extraConfig = {
        compilerOptions: { baseUrl: "../" },
        include: [ "../types.d.ts", "../next-env.d.ts", "../**/*.stories.ts", "../**/*.stories.tsx"]
    }
    const modifiedConfig = mergeDeepRight(config, extraConfig)
    fs.writeFileSync(TS_CONFIG_PATH, JSON.stringify(modifiedConfig, null, 2))
}

buildTsConfig()

module.exports = {
    stories: ['../components/**/**/*.stories.tsx'],
        webpackFinal: async config => {
          config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve('awesome-typescript-loader'),
                options:{
                  configFileName: TS_CONFIG_PATH
                }
              },
              // Optional
              {
                loader: require.resolve('react-docgen-typescript-loader'),
                options:{
                  tsconfigPath: TS_CONFIG_PATH,
                }
              },
            ],
          });
          config.resolve.extensions.push('.ts', '.tsx');
          return config;
        },
        };