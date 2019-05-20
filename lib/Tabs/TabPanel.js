"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tabPanel = exports.TabPanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _TabContext = require("./TabContext");

var _tabs = require("./tabs.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TabPanelStyled = _styledComponents.default.section(_templateObject(), _tabs.tabsPanelTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var TabPanel = _react.default.memo(function TabPanel(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var _useContext3 = (0, _react.useContext)(_TabContext.TabContext),
      _useContext4 = (0, _slicedToArray2.default)(_useContext3, 1),
      selected = _useContext4[0].selected;

  var children = props.children,
      uid = props.uid;

  function getActiveStyle() {
    return selected && selected.uid === uid ? 'display: block;' : 'display: none';
  }

  return _react.default.createElement(TabPanelStyled, (0, _extends2.default)({
    className: "Tab-panel",
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props, {
    "data-uid": uid,
    styled: getActiveStyle()
  }), children);
});

exports.TabPanel = TabPanel;
TabPanel.propTypes = {
  children: _propTypes.default.node,
  theme: _propTypes.default.object,
  uid: _propTypes.default.string
};
var tabPanel = (0, _styledComponents.default)(TabPanel);
exports.tabPanel = tabPanel;
var _default = TabPanel;
exports.default = _default;