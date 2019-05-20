"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = Tabs;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _TabList = _interopRequireDefault(require("./TabList"));

var _TabPanel = _interopRequireDefault(require("./TabPanel"));

var _TabContext = require("./TabContext");

var _tabs = require("./tabs.theme");

function Tabs(_ref) {
  var className = _ref.className,
      children = _ref.children,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  var classNames = "Tabs ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_tabs.tabsTheme];
  }, [_tabs.tabsTheme]);
  return _react.default.createElement(_TabContext.TabProvider, null, _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children));
}

Tabs.propTypes = {
  children: _propTypes.default.node
};
var _default = Tabs;
exports.default = _default;