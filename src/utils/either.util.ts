import { isFunction } from './isFunction.util';

export const either = (left: any, right: any) => (condition: any) =>
  condition
    ? isFunction(left)
      ? left()
      : left
    : isFunction(right)
    ? right()
    : right;
