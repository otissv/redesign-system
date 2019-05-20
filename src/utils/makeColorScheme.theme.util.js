import upperFirst from 'lodash/fp/upperFirst'

export function makeColorScheme(colors) {
  return Object.keys(colors).reduce(
    (previous, key) => ({
      ...previous,
      [key]: colors[key],
      [`border${upperFirst(key)}`]: colors[key],
      [`active${upperFirst(key)}`]: colors[key],
      [`focus${upperFirst(key)}`]: colors[key],
      [`hover${upperFirst(key)}`]: colors[key],
      [`visited${upperFirst(key)}`]: colors[key],
    }),
    {}
  )
}
