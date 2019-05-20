import upperFirst from 'lodash/fp/upperFirst'
import { baseDefaults } from '../utils'

export function unitPositions({ unit, style }) {
  const isValidStringValue = value =>
    typeof value === 'string' || value.trim() !== ''

  const isValidNumberValue = value => typeof value === 'number' || value < 0

  const isValidUnitValue = value =>
    value !== 'string' &&
    isValidStringValue(value) &&
    value.match(/%|px|rem|em|auto/)

  function allPositions(value, prop) {
    switch (true) {
      case value === 'default':
        return { [prop]: unit.default }
      case isValidNumberValue(value):
        return { [prop]: unit[value] }
      case isValidUnitValue(value) || isValidStringValue(value):
        return { [prop]: value }
      default:
        return
    }
  }

  const reducer = (accumulator, key) => {
    if (key === 'default') return accumulator

    const prop = `${style}${upperFirst(key)}`

    return {
      ...accumulator,
      [prop]: value => {
        if (!isValidStringValue(value)) return {}

        let positions = value.split(' ')
        return Object.keys(positions).reduce(
          (accum, pos) => ({
            ...accum,
            [`${style}-${positions[pos]}`]: unit[key],
          }),
          {}
        )
      },
    }
  }

  const initial = {
    [style]: value => allPositions(value, style),
    [`${style}Bottom`]: value => allPositions(value, `${style}Bottom`),
    [`${style}Left`]: value => allPositions(value, `${style}Left`),
    [`${style}Right`]: value => allPositions(value, `${style}Right`),
    [`${style}Top`]: value => allPositions(value, `${style}Top`),
  }

  return Object.keys(unit).reduce(reducer, initial)
}

export function sharedTheme({
  border,
  elevate,
  radius,
  shared,
  unit,
  font,
} = baseDefaults) {
  return {
    ...unitPositions({ unit, style: 'margin' }),
    ...unitPositions({ unit, style: 'padding' }),
    border: value => ({ border: border[value] }),
    borderBottom: value => ({ borderBottom: border[value] }),
    borderLeft: value => ({ borderLeft: border[value] }),
    borderRight: value => ({ borderRight: border[value] }),
    borderTop: value => ({ borderTop: border[value] }),
    radius: value => ({ borderRadius: radius[value] }),
    elevate: value => ({
      boxShadow: elevate[value],
    }),
    centered: () => ({ margin: '0 auto' }),

    flex: value => ({ flex: value }),
    flexGrow: value => ({ flexGrow: value }),
    order: value => ({ order: value }),
    display: value => ({ display: value }),

    widthSize: value => ({ width: value }),
    fontSize: value => ({
      fontSize: value === 'default' ? font.size.default : font.size[value],
    }),
    lineHeight: value => ({
      lineHeight:
        value === 'default' ? font.lineHeight.default : font.lineHeight[value],
    }),
    fontWeight: value => ({
      fontWeight:
        value === 'default' ? font.weight.default : font.weight[value],
    }),
    ...shared,
  }
}
