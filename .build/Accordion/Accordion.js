import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AccordionProvider } from './AccordionContext';
import Base from '../Base/Base';
import { accordionTheme } from './accordion.theme';
export function Accordion(_a) {
    var active = _a.active, children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["active", "children", "className", "themed"]);
    var classNames = "Accordion " + className;
    var _themed = useMemo(function () { return [accordionTheme].concat(themed); }, [
        accordionTheme,
        themed,
    ]);
    return (React.createElement(AccordionProvider, { active: active },
        React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), children)));
}
Accordion.defaultProps = {
    themed: [],
};
Accordion.propTypes = {
    active: PropTypes.string,
    children: PropTypes.node,
    className: '',
    item: PropTypes.object,
    theme: PropTypes.object,
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map