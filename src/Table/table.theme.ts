import { TableInterface } from './table.types'

export function tableContainerTheme({ height }) {
  return {
    height: height || '100%',
    overflow: 'auto',
  }
}

export function tableTheme({
  condensed,
  hover,
  theme: { animation, border, color, elevate, unit },
}: TableInterface) {
  return {
    borderCollapse: 'collapse',
    transition: animation.easeMedium(),

    'td, th': {
      lineHeight: condensed ? 2 : 2.5,
      padding: 0,

      '&:first-child': {
        paddingLeft: unit[4],
      },
      '&:last-child': {
        paddingRight: unit[4],
      },
    },

    td: {
      borderTop: border.thin,
    },

    'tr:hover': {
      background: hover ? color['grey-800'] : '',
      boxShadow: hover ? elevate[2] : '',
    },

    a: {
      background: 'none',
      display: 'block',
      height: '100%',
      marginRight: '3px',
      border: border.thinTransparent,
    },

    'a:hover, a:active': {
      background: 'none',
      border: border.thinTransparent,
      color: color.link,
    },
  }
}

export function tableCaptionTheme({ theme: {} }: TableInterface) {
  return {
    height: 0,
    visibility: 'hidden',
  }
}

export function tableViewsButtonTheme({ theme: {} }: TableInterface) {
  return {
    display: 'flex',
    marginLeft: 'auto',
  }
}
