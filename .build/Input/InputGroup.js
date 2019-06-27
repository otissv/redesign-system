import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { inputGroupTheme } from './inputGroup.theme';
import { inputAppearanceTheme, inputSizeTheme, inputWidthsTheme, } from './input.theme';
export function InputGroup(_a) {
    var children = _a.children, className = _a.className, valid = _a.valid, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "valid", "themed"]);
    var classNames = "InputGroup " + className;
    var _themed = useMemo(function () { return [
        inputAppearanceTheme,
        inputSizeTheme,
        inputWidthsTheme,
        inputGroupTheme
    ].concat(themed); }, [
        inputGroupTheme,
        inputAppearanceTheme,
        inputSizeTheme,
        inputWidthsTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ role: "group", className: classNames, themed: _themed }, propsRest), children));
}
InputGroup.defaultProps = {
    className: '',
    themed: [],
};
export default InputGroup;
//# sourceMappingURL=InputGroup.js.map