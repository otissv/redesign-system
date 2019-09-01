import { isFunction } from './isFunction.util'

export function either(left: any, right: any) {
  return (conditions: any) => {
    const isLeft = Array.isArray(conditions)
      ? conditions
          .map(condition => !!condition)
          .some((bool: boolean) => bool === true)
      : !!conditions

    if (isLeft) {
      return isFunction(left) ? left() : left
    } else {
      return isFunction(right) ? right() : right
    }
  }
}
