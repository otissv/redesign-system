import { baseDefaults } from '../utils'
import merge from 'lodash/fp/merge'
import { hsla } from 'polished'

export function scrollbarTheme({ color, scrollbar, unit } = baseDefaults) {
  const defaults = {
    width: unit[3],

    height: unit[3],
    backgroundColor: color.background,

    corner: {
      backgroundColor: color.background,
    },
    thumb: {
      backgroundColor: '#7d7d7d94',
      outline: 'none',
      transition: 'background-color ease 0.2s',
      hover: {
        backgroundColor: '#7d7d7d',
      },
    },
  }

  return merge(scrollbar)(defaults)
}
