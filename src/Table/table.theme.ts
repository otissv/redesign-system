import { TableInterface } from './table.types';
export function tableTheme({
  condensed,
  hover,
  theme: { animation, border, color, unit, elevate },
}: TableInterface) {
  return {
    width: '100%',
    position: 'relative',
    background: color.background,
    borderCollapse: 'collapse',
    transition: animation.easeMedium(),

    th: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      background: color.background,
      textAlign: 'left',
    },

    'td, th': {
      padding: condensed ? `${unit[1]} ${unit[4]}` : `${unit[2]} ${unit[4]}`,
    },

    td: {
      borderTop: border.thin,
      height: '100%',
    },

    'tbody tr:hover': {
      background: hover ? color['grey-800'] : '',
      boxShadow: hover ? elevate[2] : '',
    },
  };
}

export function tableCaptionTheme({ theme: {} }: TableInterface) {
  return {
    height: 0,
  };
}

export function tableViewsButtonTheme({ theme: {} }: TableInterface) {
  return {
    display: 'flex',
    marginLeft: 'auto',
  };
}
