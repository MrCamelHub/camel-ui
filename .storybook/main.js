const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

/**
 * @typedef {import('@storybook/core-common').StorybookConfig} StorybookBaseConfig
 *
 * @typedef {{
 *   babel: (options: Record<string, unknown>) => Promise<Record<string, unknown>>;
 * }} StorybookExtraConfig
 *
 * @typedef {StorybookBaseConfig &
 *   Required<Pick<StorybookBaseConfig, 'stories' | 'addons' | 'webpackFinal'>> &
 *   StorybookExtraConfig
 * } StorybookConfig
 *
 * @typedef  {{loader: string; options: { [index: string]: any }}} LoaderObjectDef
 */

module.exports = {
  features: {
    postcss: false
  },
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop')
        ]
      }
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react')
    };

    return config;
  }
};
