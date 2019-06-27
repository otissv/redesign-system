import merge from 'lodash/fp/merge';
import { FontsInterface, ThemeInterface } from '../theme.types';

export function fontTheme({ color, font }: ThemeInterface) {
  const defaults: FontsInterface = {
    color: color.foreground,
    colorInvert: color.foregroundInvert,
    smooth: `
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased;0
      -moz-osx-font-smoothing: grayscale;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    `,

    // family
    code:
      "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    serif: "'Merriweather','Georgia',serif",
    sans:
      'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',

    size: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '30px',
      8: '36px',
      9: '48px',
      10: '60px',
      11: '72px',
      12: '84px',
      default: '16px',
    },

    lineHeight: {
      1: 1,
      2: 1.5,
      3: 1.75,
      4: 2,
      default: 1.75,
    },

    weight: {
      1: 400,
      2: 500,
      3: 600,
      4: 700,
      5: 800,
      6: 900,
      default: 400,
    },
  };

  return merge(font)(defaults);
}
