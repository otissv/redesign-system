import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { textareaTheme, textareaAppearanceTheme, textareaWidthsTheme, } from './textarea.theme';
export var Textarea = function Textarea(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Textarea " + className;
    var _themed = useMemo(function () { return [
        textareaTheme,
        textareaAppearanceTheme,
        textareaWidthsTheme
    ].concat(themed); }, [textareaTheme, textareaAppearanceTheme, textareaWidthsTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ as: "textarea", className: classNames, themed: _themed, disabled: propsRest.appearance === 'disabled' }, propsRest), children));
};
Textarea.defaultProps = {
    className: '',
    themed: [],
};
export default Textarea;
//# sourceMappingURL=Textarea.js.map