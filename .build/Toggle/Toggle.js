import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { 
// toggleAppearanceTheme,
toggleInputTheme, toggleLabelTheme, toggleTheme, toggleContentTheme, } from './toggle.theme';
export function ToggleInput(_a) {
    var checked = _a.checked, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["checked", "className", "themed"]);
    var classNames = "ToggleInput " + className;
    var _themed = useMemo(function () { return [toggleInputTheme]; }, [toggleInputTheme]);
    return (React.createElement(Base, tslib_1.__assign({ as: "input", type: "checkbox", className: classNames, themed: _themed }, propsRest)));
}
ToggleInput.defaultProps = {
    className: '',
};
export function ToggleLabel(_a) {
    var checked = _a.checked, className = _a.className, propsRest = tslib_1.__rest(_a, ["checked", "className"]);
    var classNames = "ToggleLabel " + className;
    var _themed = useMemo(function () { return [toggleLabelTheme]; }, [toggleLabelTheme, ,]);
    return (React.createElement(Base, tslib_1.__assign({ as: "label", className: classNames, themed: _themed }, propsRest)));
}
export function ToggleContent(_a) {
    var checked = _a.checked, className = _a.className, propsRest = tslib_1.__rest(_a, ["checked", "className"]);
    var classNames = "ToggleContent " + className;
    var _themed = useMemo(function () { return [toggleContentTheme]; }, [toggleContentTheme, ,]);
    return (React.createElement(Base, tslib_1.__assign({ as: "label", className: classNames, themed: _themed }, propsRest)));
}
ToggleContent.defaultProps = {
    className: '',
    width: '90px',
    height: '90px',
    themed: [],
};
export function Toggle(_a) {
    var id = _a.id, children = _a.children, className = _a.className, hideText = _a.hideText, height = _a.height, toggle = _a.toggle, width = _a.width, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["id", "children", "className", "hideText", "height", "toggle", "width", "themed"]);
    var classNames = "Toggle " + className;
    var _themed = useMemo(function () { return [toggleTheme].concat(themed); }, [
        toggleTheme,
        themed,
    ]);
    var state = toggle[0], setState = toggle[1];
    function handleClick(e) {
        e.preventDefault();
        setState(!state);
    }
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(ToggleInput, { checked: state, height: height, id: id, type: "checkbox", width: width }),
        React.createElement(ToggleLabel, { checked: state, height: height, hideText: hideText, htmlFor: id, onClick: handleClick, width: width }, children || (React.createElement(ToggleContent, { elevate: 1, toggle: state, width: "20px", height: "20px" })))));
}
Toggle.defaultProps = {
    className: '',
    width: '40px',
    height: '20px',
    themed: [],
};
export default Toggle;
//# sourceMappingURL=Toggle.js.map