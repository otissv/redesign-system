import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';
export function useNotEqualEffect(callback, args) {
    useEffect(function () {
        !isEqual(args[0], args[1]) && callback();
    });
}
//# sourceMappingURL=useNotEqualEffect.js.map