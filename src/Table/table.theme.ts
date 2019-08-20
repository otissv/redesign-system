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
      background: hover ? color['background-600'] : '',
      boxShadow: hover ? elevate[2] : '',
    },

    '.TableView': {
      '.RowDetail >td': {
        padding: `0 0 ${unit[7]} 0`,
      },
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

export function tableToolbarTheme({ theme: { unit } }: TableInterface) {
  return {
    padding: `${unit[2]} 0`,
  }
}

export function tableSelectedToolbarTheme({
  theme: { color, unit },
}: TableInterface) {
  return {
    background: color.active,
    padding: `${unit[2]} ${unit[4]}`,
  }
}
