import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
export var Portal = function (_a) {
    var children = _a.children, rootRef = _a.rootRef;
    var elementRef = useRef(document.createElement('div'));
    useLayoutEffect(function () {
        rootRef.current && rootRef.current.appendChild(elementRef.current);
        return function () {
            rootRef.current && rootRef.current.removeChild(elementRef.current);
        };
    }, [rootRef.current, elementRef.current]);
    return createPortal(children, rootRef.current);
};
export default Portal;
//# sourceMappingURL=Portal.js.map