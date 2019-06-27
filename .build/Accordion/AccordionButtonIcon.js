import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Icon } from '../Icon';
import { accordionIconTheme } from './accordion.theme';
import { ChevronRight } from '../MaterialIcons/ChevronRight';
export function AccordionIcon(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "AccordionIcon " + className;
    var _themed = useMemo(function () { return [accordionIconTheme].concat(themed); }, [
        accordionIconTheme
    ].concat(themed));
    return (React.createElement(Icon, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest, { icon: ChevronRight }), children));
}
AccordionIcon.defaultProps = {
    className: '',
    themed: [],
};
export default AccordionIcon;
//# sourceMappingURL=AccordionButtonIcon.js.map