/* eslint-disable import/extensions,import/order,import/no-unresolved,import/named,import/no-duplicates,import/no-self-import,import/no-cycle,import/no-relative-packages */

import { setupServer } from 'msw/node';

import handlers from './handlers.ts';

const server = setupServer(...handlers);

export default server;
