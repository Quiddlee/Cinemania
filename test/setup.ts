import '@testing-library/jest-dom';

import { loadEnvConfig } from '@next/env';

import { afterAll, afterEach, beforeAll } from 'vitest';

import server from './mocks/server';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
