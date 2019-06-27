import * as tslib_1 from "tslib";
import React, { useCallback, useMemo } from 'react';
import { Button } from '../Button/Button';
import { ChevronRight } from '../MaterialIcons/ChevronRight';
import { useAccordion } from './AccordionContext';
import { useAccordionItem } from './AccordionItem';
import { accordionButtonTheme, accordionIconTheme } from './accordion.theme';
export function AccordionButton(_a) {
    var children = _a.children, className = _a.className, onFocus = _a.onFocus, handleOnClick = _a.handleOnClick, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "onFocus", "handleOnClick", "themed"]);
    var classNames = "AccordionButton " + className;
    var _b = useAccordion(), active = _b.active, setActiveItem = _b.setActiveItem;
    var uid = useAccordionItem().uid;
    var handleClick = useCallback(function handleClick(e) {
        e.preventDefault();
        handleOnClick ? handleOnClick(e) : setActiveItem(e.target.dataset.uid);
    }, [handleOnClick, setActiveItem]);
    var handleFocus = useCallback(function handleFocus(e) {
        e.preventDefault();
        onFocus ? onFocus(e) : setActiveItem(e.target.dataset.uid);
    }, [onFocus, setActiveItem]);
    var _themed = useMemo(function () { return [accordionButtonTheme].concat(themed); }, [
        accordionButtonTheme
    ].concat(themed));
    var iconThemed = useMemo(function () { return [accordionIconTheme].concat(themed); }, [
        accordionIconTheme
    ].concat(themed));
    return (React.createElement(Button, tslib_1.__assign({ className: classNames, onClick: handleClick, "data-uid": uid, onFocus: handleFocus, stretch: true, themed: _themed }, propsRest),
        children,
        React.createElement(ChevronRight, { "data-uid": uid, className: "AccordionIcon", active: active === uid, css: "padding: 0;", themed: iconThemed, alt: active === uid ? 'Expand' : 'Collapse' })));
}
AccordionButton.defaultProps = {
    className: '',
    themed: [],
};
export default AccordionButton;
//# sourceMappingURL=AccordionButton.js.map