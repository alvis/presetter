/* v8 ignore start */

import commonjs from '@rollup/plugin-commonjs';
import graphql from '@rollup/plugin-graphql';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import yaml from '@rollup/plugin-yaml';
import { asset } from 'presetter-types';
import postcss from 'rollup-plugin-postcss';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import visualizer from 'rollup-plugin-visualizer';

import type { RollupOptions } from 'rollup';

const typescriptPlugin = typescript();
const tsconfigPathsPlugin = tsconfigPaths();
const resolvePlugin = resolve();
const commonjsPlugin = commonjs({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});
const jsonPlugin = json();
const graphqlPlugin = graphql();
const imagePlugin = image();
const yamlPlugin = yaml();
const postcssPlugin = postcss({
  inject: {
    insertAt: 'top',
  },
});
const visualizerPlugin = visualizer();

const plugins = [
  typescriptPlugin,
  tsconfigPathsPlugin,
  resolvePlugin,
  commonjsPlugin,
  jsonPlugin,
  graphqlPlugin,
  imagePlugin,
  yamlPlugin,
  postcssPlugin,
  visualizerPlugin,
];

export default asset<{ default: RollupOptions }>((current, { variables }) => ({
  default: {
    ...current,
    input: `${variables.source!}/index.ts`,
    output: [
      {
        file: `${variables.outout!}/index.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${variables.outout!}/index.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins,
  },
}));
