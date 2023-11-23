import { ReactNode } from 'react';

import { AnimeParams } from 'animejs';

import { AnimeTarget } from './types';

export interface IChildren {
  children: ReactNode;
}

export interface IParams extends Omit<AnimeParams, 'targets'> {
  targets?: AnimeTarget;
}
