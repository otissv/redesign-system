import * as tslib_1 from "tslib";
import React, { useContext, useMemo } from 'react';
import Base from '../Base/Base';
import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme';
export var ButtonGroupContext = React.createContext({});
export function useButtonGroup() {
    return useContext(ButtonGroupContext);
}
export var ButtonGroup = function ButtonGroup(_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, propsThemed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "onClick", "themed"]);
    var classNames = "ButtonGroup " + className;
    var themed = useMemo(function () { return [buttonGroupTheme, buttonStretchGroupTheme].concat(propsThemed); }, [buttonGroupTheme, buttonStretchGroupTheme, propsThemed]);
    var appearance = propsRest.appearance, context = propsRest.context, size = propsRest.size, stretch = propsRest.stretch;
    var value = useMemo(function () { return ({ appearance: appearance, context: context, size: size, stretch: stretch }); }, [
        appearance,
        context,
        size,
        stretch,
    ]);
    return (React.createElement(ButtonGroupContext.Provider, { value: value },
        React.createElement(Base, tslib_1.__assign({ role: "group", className: classNames, themed: themed }, propsRest), children)));
};
ButtonGroup.defaultProps = {
    className: '',
    themed: [],
};
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map