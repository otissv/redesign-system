import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { inputTheme, inputAppearanceTheme, inputSizeTheme, inputWidthsTheme, } from './input.theme';
export var Input = function Input(_a) {
    var children = _a.children, className = _a.className, valid = _a.valid, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "valid", "themed"]);
    var classNames = "Input " + className;
    var _themed = useMemo(function () { return [
        inputTheme,
        inputAppearanceTheme,
        inputSizeTheme,
        inputWidthsTheme
    ].concat(themed); }, [inputTheme, inputAppearanceTheme, inputSizeTheme, inputWidthsTheme, themed]);
    var isDisabled = propsRest.appearance === 'disabled' ||
        propsRest.appearance === 'primary-disabled' ||
        propsRest.appearance === 'secondary-disabled' ||
        propsRest.appearance === 'tertiary-disabled';
    return (React.createElement(Base, tslib_1.__assign({ as: "input", className: classNames, themed: _themed, disabled: isDisabled, "aria-invalid": valid }, propsRest), children));
};
Input.defaultProps = {
    className: '',
    context: null,
    onBlur: function () { },
    onChange: function () { },
    onFocus: function () { },
    placeholder: null,
    size: null,
    themed: [],
    valid: true,
    widths: null,
};
export default Input;
//# sourceMappingURL=Input.js.map