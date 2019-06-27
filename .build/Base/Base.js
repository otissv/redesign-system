import * as tslib_1 from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { setTheme } from '../utils/setTheme.util';
import { sharedStyles } from '../utils/sharedStyles.utils';
import { useTheme } from '../ThemeContext';
export function Base(_a) {
    var animate = _a.animate, children = _a.children, css = _a.css, el = _a.as, state = _a.state, propsTheme = _a.theme, _b = _a.themed, themed = _b === void 0 ? [] : _b, propsRest = tslib_1.__rest(_a, ["animate", "children", "css", "as", "state", "theme", "themed"]);
    var theme = useTheme().theme;
    var buildStyledThemed = function (props) {
        return themed.reduce(function (acc, themeFn) {
            return tslib_1.__assign({}, acc, themeFn(props));
        }, {});
    };
    var poseRef = React.useRef(posed[el || 'div'](animate));
    var styledRef = React.useRef(styled(poseRef.current)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n    ", "\n  "])), buildStyledThemed, sharedStyles, css));
    var Component = styledRef.current;
    var _theme = setTheme(propsTheme, theme);
    return (React.createElement(Component, tslib_1.__assign({ pose: state, theme: _theme }, propsRest), children));
}
export default Base;
var templateObject_1;
//# sourceMappingURL=Base.js.map