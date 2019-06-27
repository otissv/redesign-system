import * as tslib_1 from "tslib";
import React from 'react';
import Button from '../Button/Button';
import { useButtonGroup } from './ButtonGroup';
export var ButtonGroupButton = function ButtonGroupButton(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var buttonGroup = useButtonGroup();
    var classNames = "ButtonGroupButton " + (className || '');
    return (React.createElement(Button, tslib_1.__assign({ className: classNames }, buttonGroup, { themed: themed }, propsRest), children));
};
export default ButtonGroupButton;
//# sourceMappingURL=ButtonGroupButton.js.map