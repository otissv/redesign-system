import { isFunction } from './isFunction.util';
import { either } from './either.util';

export const isChildrenFunction = props => context =>
  either(() => props.children(context), props.children)(isFunction(props.children));
