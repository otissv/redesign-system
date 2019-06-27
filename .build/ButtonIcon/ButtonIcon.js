import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { buttonIconTheme } from './buttonIcon.theme';
import Button from '../Button/Button';
export function ButtonIcon(_a) {
    var alt = _a.alt, children = _a.children, className = _a.className, Component = _a.icon, onClick = _a.onClick, themed = _a.themed, title = _a.title, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["alt", "children", "className", "icon", "onClick", "themed", "title", "uid"]);
    var classNames = "ButtonIcon " + className;
    var _themed = useMemo(function () { return [buttonIconTheme].concat(themed); }, [
        buttonIconTheme,
        themed,
    ]);
    return (React.createElement(Button, tslib_1.__assign({ className: classNames, "data-uid": uid, onClick: onClick, themed: _themed }, propsRest),
        React.createElement(Component, { alt: alt }),
        children ? React.createElement("span", { className: "ButtonIconContent" }, children) : null));
}
ButtonIcon.defaultProps = {
    height: '24px',
    themed: [],
    viewBox: '0 0 24 24',
    width: '24px',
    className: '',
};
export default ButtonIcon;
//# sourceMappingURL=ButtonIcon.js.map