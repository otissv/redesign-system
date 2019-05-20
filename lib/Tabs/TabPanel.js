"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabPanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeContext = require("../ThemeContext");

var _TabContext = require("./TabContext");

var _tabs = require("./tabs.theme");

var _Base = _interopRequireDefault(require("../Base/Base"));

var TabPanel = _react.default.memo(function TabPanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      uid = _ref.uid,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "uid"]);
  var classNames = "TabPanel ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_tabs.tabsPanelTheme];
  }, [_tabs.tabsPanelTheme]);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var _useTabs = (0, _TabContext.useTabs)(),
      selected = _useTabs.selected,
      active = _useTabs.active;

  var getActiveStyle = active === uid ? 'display: block;' : 'display: none';
  return active === uid ? _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest, {
    css: getActiveStyle,
    "data-uid": uid
  }), children) : null;
});

exports.TabPanel = TabPanel;
TabPanel.propTypes = {
  children: _propTypes.default.node,
  theme: _propTypes.default.object,
  uid: _propTypes.default.string
};
var _default = TabPanel;
exports.default = _default;