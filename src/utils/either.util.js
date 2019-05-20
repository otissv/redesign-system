import { isFunction } from './isFunction.util';

export const either = (left, right) => condition =>
  condition ? (isFunction(left) ? left() : left) : isFunction(right) ? right() : right;
