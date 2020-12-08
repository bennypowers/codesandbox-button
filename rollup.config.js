import commonjs from '@rollup/plugin-commonjs';
import litcss from 'rollup-plugin-lit-css';
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
    dir: '.',
    format: 'es',
    chunkFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
    esbuild({ ts: true }),
    litcss(),
    commonjs(),
    resolve(),
  ],
};
