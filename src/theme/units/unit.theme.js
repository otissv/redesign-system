import { baseDefaults } from '../../utils'
import merge from 'lodash/fp/merge'

export function unitTheme({ unit } = baseDefaults) {
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
    // 11: 'px',
    // 12: 'px',
    // 13: 'px',
    // 14: 'px',
    // 15: 'px',
    // 16: 'px',
    // 17: 'px',
    // 18: 'px',
    // 19: 'px',
    default: '24px',
  }

  return merge(unit)(defaults)
}
