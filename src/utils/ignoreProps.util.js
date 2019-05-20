export function ignoreProps(ignore) {
  return function(props) {
    return Object.keys(props).reduce((previous, key) => {
      if (ignore.includes(key)) return previous
      return {
        ...previous,
        [key]: props[key],
      }
    }, {})
  }
}