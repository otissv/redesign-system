import { baseDefaults } from '../../utils'
import merge from 'lodash/fp/merge'

export function radiusTheme({ radius } = baseDefaults) {
  const defaults = {
    rounded: '5px',
    circle: '100%',
    none: 'none',
  }

  return merge(radius)(defaults)
}
