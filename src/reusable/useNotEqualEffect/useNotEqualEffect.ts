import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';

export function useNotEqualEffect<T>(callback: () => any, args: T[]) {
  useEffect(() => {
    !isEqual(args[0], args[1]) && callback();
  });
}
