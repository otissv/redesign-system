import merge from 'lodash/fp/merge';
import { ThemeInterface } from '../theme.types';

export function unitTheme({ unit }: ThemeInterface) {
  const defaults = {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
    default: '24px',
  };

  return merge(unit)(defaults);
}
