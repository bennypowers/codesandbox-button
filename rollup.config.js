import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json';

const deps = Object.keys(pkg.dependencies);
const external = id =>
  id.startsWith('lit-html') ||
  deps.includes(id);

export default {
  input: 'src/codesandbox-button.ts',
  external,
  output: {
    file: './codesandbox-button.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    esbuild({ ts: true }),
  ],
};
