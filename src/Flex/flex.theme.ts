import { FlexInterface } from './flex.types';

import kebabCase from 'lodash/kebabCase';

export function flexTheme({
  alignItems,
  basis,
  display,
  grow,
  justifyContent,
  shrink,
  wrap,
}: FlexInterface) {
  return {
    display: display || 'flex',
    basis: basis ? `${basis}` : '',
    grow: grow ? `${grow}` : '',
    shrink: shrink ? `${shrink}` : '',
    justifyContent: (justifyContent && [kebabCase(justifyContent)]) || '',
    alignItems: (alignItems && [kebabCase(alignItems)]) || '',
    flexWrap: (wrap && [kebabCase(wrap)]) || '',
  };
}

export function flexDirectionTheme({ direction }: FlexInterface) {
  switch (direction) {
    case 'row':
      return { flexDirection: 'row' };
    case 'column':
      return { flexDirection: 'column' };
    case 'rowReverse':
      return { flexDirection: 'rowReverse' };
    case 'columnReverse':
      return { flexDirection: 'columnReverse' };
    default:
      return {};
  }
}
