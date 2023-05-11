import * as path from 'path';

import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import pkg from './package.json';

export default defineConfig(({ command }) => {
  const alias = [
    { find: '@', replacement: path.resolve(__dirname, 'src') },
    {
      find: '@components',
      replacement: path.resolve(__dirname, 'src/components')
    },
    {
      find: '@theme',
      replacement: path.resolve(__dirname, 'src/theme')
    },
    {
      find: '@utils',
      replacement: path.resolve(__dirname, 'src/utils')
    }
  ];

  if (command === 'serve') {
    return {
      plugins: [svgr({ exportAsDefault: true })],
      resolve: {
        alias
      }
    };
  }

  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'camel-ui',
        formats: ['cjs', 'es'],
        fileName: (fileName) => (fileName === 'cjs' ? 'index.js' : 'index.es.js')
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies), /@emotion/g],
        output: {
          interop: 'auto'
        }
      }
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]]
      }),
      dts({ insertTypesEntry: true }),
      svgr({ exportAsDefault: true })
    ],
    resolve: {
      alias
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  };
});
