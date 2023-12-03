import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@app', replacement: resolve(__dirname, './src/app') },
      { find: '@features', replacement: resolve(__dirname, './src/features') },
      { find: '@entities', replacement: resolve(__dirname, './src/entities') },
      { find: '@shared', replacement: resolve(__dirname, './src/shared') },
      { find: '@widgets', replacement: resolve(__dirname, './src/widgets') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      {
        find: '@customTypes',
        replacement: resolve(__dirname, './src/shared/types'),
      },
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@test', replacement: resolve(__dirname, './src/test') },
    ],
  },
  base: './',
});
