import * as tslib_1 from "tslib";
import React from 'react';
import styled from 'styled-components';
import { Base } from '../Base';
import { alertTheme, alertAppearanceTheme } from './alert.theme';
var Close = styled.a(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  fill: currentcolor;\n  line-height: 0;\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  fill: currentcolor;\n  line-height: 0;\n"])), function (props) { return (props.onClose ? 'inline-block' : 'none'); });
export var Alert = function Alert(_a) {
    var children = _a.children, className = _a.className, _b = _a.themed, themed = _b === void 0 ? [] : _b, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Alert " + className;
    var _themed = React.useMemo(function () { return [alertTheme, alertAppearanceTheme].concat(themed); }, [alertTheme, alertAppearanceTheme, themed]);
    function handleOnClose(e) {
        e.preventDefault();
    }
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(Close, { onClick: handleOnClose },
            React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("line", { fill: "none", stroke: "#000", strokeWidth: "1.1", x1: "1", y1: "1", x2: "13", y2: "13" }),
                React.createElement("line", { fill: "none", stroke: "#000", strokeWidth: "1.1", x1: "13", y1: "1", x2: "1", y2: "13" }))),
        children));
};
Alert.defaultProps = {
    className: '',
    themed: [],
};
export default Alert;
var templateObject_1;
//# sourceMappingURL=Alert.js.map