"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = Tabs;
exports.default = exports.tabs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _TabContext = require("./TabContext");

var _TabList = require("./TabList");

var _TabPanel = require("./TabPanel");

var _tabs = require("./tabs.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TabStyled = _styledComponents.default.div(_templateObject(), _tabs.tabsTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Tabs(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  var active = props.active,
      children = props.children,
      items = props.items,
      tabListProps = props.tabListProps,
      tabPanelProps = props.tabPanelProps;

  function getItems() {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_TabList.TabList, (0, _extends2.default)({
      className: "Tab-list",
      theme: themeContext
    }, tabListProps, {
      items: items,
      active: active
    })), items.map(function (item) {
      var Component = item.component;
      return _react.default.createElement(_TabPanel.TabPanel, {
        className: "Tab-panel",
        key: item.uid,
        theme: themeContext,
        uid: item.uid
      }, _react.default.createElement(Component, (0, _extends2.default)({
        theme: themeContext
      }, item.props)));
    }));
  }

  return _react.default.createElement(_TabContext.TabProvider, {
    active: active,
    items: items
  }, _react.default.createElement(TabStyled, (0, _extends2.default)({
    className: "Tabs",
    theme: themeContext
  }, props), children, items.length > 0 && getItems()));
}

Tabs.propTypes = {
  active: _propTypes.default.string,
  children: _propTypes.default.node,
  tabListProps: _propTypes.default.shape({
    items: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.string,
      uid: _propTypes.default.string,
      theme: _propTypes.default.object
    }))
  }),
  tabPanelProps: _propTypes.default.shape({
    theme: _propTypes.default.object,
    uid: _propTypes.default.string
  }),
  theme: _propTypes.default.object
};
Tabs.defaultProps = {
  items: []
};
var tabs = (0, _styledComponents.default)(Tabs);
exports.tabs = tabs;
var _default = Tabs;
exports.default = _default;