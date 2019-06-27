import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { buttonTheme, buttonSizeTheme, buttonStretchTheme, buttonAppearanceTheme, } from './button.theme';
export var Button = function Button(_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "onClick", "themed"]);
    var classNames = "Button " + className;
    var disabled = propsRest.disabled, appearance = propsRest.appearance;
    var _themed = useMemo(function () { return [
        buttonTheme,
        buttonAppearanceTheme,
        buttonSizeTheme,
        buttonStretchTheme
    ].concat(themed); }, [
        buttonTheme,
        buttonAppearanceTheme,
        buttonSizeTheme,
        buttonStretchTheme,
        themed,
    ]);
    function handleOnClick(e) {
        e.preventDefault();
        onClick && onClick(e);
    }
    return (React.createElement(Base, tslib_1.__assign({ as: "button", className: classNames, themed: _themed, onClick: handleOnClick, role: "button", tabIndex: 0 }, (disabled ||
        appearance === 'disabled' ||
        appearance === 'primary-disabled' ||
        appearance === 'secondary-disabled' ||
        appearance === 'tertiary-disabled'
        ? { disabled: true }
        : {}), propsRest), children));
};
Button.defaultProps = {
    className: '',
    themed: [],
};
export default Button;
//# sourceMappingURL=Button.js.map