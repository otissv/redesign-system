import { PageHeaderInterface } from './pageHeader.types';

export function pageHeaderTheme({  }: PageHeaderInterface) {
  return {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '*': {
      margin: 0,
    },
  };
}
