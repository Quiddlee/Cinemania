import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    css: false,
  },
  resolve: {
    alias: [
      { find: '@features', replacement: resolve(__dirname, './features') },
      { find: '@entities', replacement: resolve(__dirname, './entities') },
      { find: '@shared', replacement: resolve(__dirname, './shared') },
      { find: '@widgets', replacement: resolve(__dirname, './widgets') },
      {
        find: '@customTypes',
        replacement: resolve(__dirname, './shared/types'),
      },
      { find: '@styles', replacement: resolve(__dirname, './styles') },
      { find: '@assets', replacement: resolve(__dirname, './assets') },
      { find: '@test', replacement: resolve(__dirname, './test') },
    ],
  },
});
