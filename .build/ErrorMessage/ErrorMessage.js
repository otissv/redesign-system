import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { errorMessageTheme, errorMessageAppearanceTheme, } from './errorMessage.theme';
export var ErrorMessage = function ErrorMessage(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "ErrorMessage " + className;
    var _themed = useMemo(function () { return [errorMessageTheme, errorMessageAppearanceTheme].concat(themed); }, [errorMessageTheme, errorMessageAppearanceTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), children));
};
ErrorMessage.defaultProps = {
    className: '',
    themed: [],
};
export default ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map