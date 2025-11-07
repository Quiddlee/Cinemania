import { ReactNode } from 'react';

import { AnimeParams } from 'animejs';

import { AnimeTarget } from './types.ts';

export interface IChildren {
  children: ReactNode;
}

export interface IParams extends Omit<AnimeParams, 'targets'> {
  targets?: AnimeTarget;
}
