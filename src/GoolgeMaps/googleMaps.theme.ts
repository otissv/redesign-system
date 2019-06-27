import { GoogleMapsInterface } from './googleMaps.types';

export function googleMapsTheme({ height, width }: GoogleMapsInterface) {
  return {
    position: 'relative',
    textAlign: 'right',
    height: width,
    width: height,

    '.gmap_canvas': {
      overflow: 'hidden',
      background: 'none !important',
      height: 'inherit',
      width: 'inherit',
    },
  };
}
