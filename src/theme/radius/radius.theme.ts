import merge from 'lodash/fp/merge';
import { RadiusInterface, ThemeInterface } from '../theme.types';

export function radiusTheme({ radius }: ThemeInterface) {
  const defaults: RadiusInterface = {
    rounded: '5px',
    circle: '100%',
    round: '30px',
    none: 'none',
  };

  return merge(radius)(defaults);
}
