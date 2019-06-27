import * as tslib_1 from "tslib";
import React, { useCallback, useMemo, useState } from 'react';
import { CaretDown } from '../MaterialIcons/CaretDown';
import { dropdownTheme, dropdownContainerTheme, dropdownContentTheme, } from './dropdown.theme';
import { Button } from '../Button/Button';
import Base from '../Base/Base';
export function Dropdown(_a) {
    var children = _a.children, className = _a.className, label = _a.label, animate = _a.animate, themed = _a.themed, stretch = _a.stretch, propsRest = tslib_1.__rest(_a, ["children", "className", "label", "animate", "themed", "stretch"]);
    var _b = useState(false), opened = _b[0], setOpened = _b[1];
    var classNames = "Dropdown " + className;
    var themedDropdownContainer = useMemo(function () { return [dropdownContainerTheme]; }, [
        dropdownContainerTheme,
    ]);
    var themedContent = useMemo(function () { return [dropdownTheme, dropdownContentTheme].concat(themed); }, [dropdownTheme, dropdownContentTheme, themed]);
    var handleClick = useCallback(function handleClick(e) {
        e.preventDefault;
        setOpened(!opened);
    }, [setOpened]);
    var _animate = useMemo(function () {
        return (animate || {
            opened: {
                opacity: 1,
            },
            closed: {
                opacity: 0,
            },
        });
    }, [animate]);
    console.log(propsRest);
    return (React.createElement(Base, { className: "DropdownContainer", themed: themedDropdownContainer, stretch: stretch },
        React.createElement(Button, tslib_1.__assign({ className: classNames, onClick: handleClick }, propsRest, { stretch: stretch }),
            label,
            " ",
            React.createElement(CaretDown, { alt: "dropdown arrow" })),
        React.createElement(Base, tslib_1.__assign({ className: classNames, as: "ul", themed: themedContent, state: opened ? 'opened' : 'closed' }, propsRest, { animate: _animate }), children)));
}
Dropdown.defaultProps = {
    className: '',
    themed: [],
    stretch: false,
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map