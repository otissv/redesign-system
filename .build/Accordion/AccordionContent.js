import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { accordionContentTheme } from './accordion.theme';
import { useAccordion } from './AccordionContext';
import { useAccordionItem } from './AccordionItem';
export function AccordionContent(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "AccordionContent " + className;
    var _themed = useMemo(function () { return [accordionContentTheme].concat(themed); }, [
        accordionContentTheme,
        themed,
    ]);
    var _b = useAccordion(), active = _b.active, animate = _b.animate;
    var uid = useAccordionItem().uid;
    var _animate = useMemo(function () {
        return (animate || {
            open: { height: 'auto' },
            close: { height: 0 },
        });
    }, [animate]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(Base, { animate: _animate, state: active === uid ? 'open' : 'close' }, children)));
}
AccordionContent.defaultProps = {
    className: '',
    themed: [],
};
export default AccordionContent;
//# sourceMappingURL=AccordionContent.js.map