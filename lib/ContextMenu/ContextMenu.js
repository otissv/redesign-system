"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = ContextMenu;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _useContextMenu3 = require("./useContextMenu");

var _contextMenu = require("./contextMenu.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ContextMenuStyled = _styledComponents.default.ul(_templateObject(), _contextMenu.contextMenuTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function ContextMenu(_ref) {
  var area = _ref.area,
      children = _ref.children,
      offset = _ref.offset,
      onClosed = _ref.onClosed,
      onOpened = _ref.onOpened,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["area", "children", "offset", "onClosed", "onOpened"]);

  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      theme = _useContext.theme;

  var _useContextMenu = (0, _useContextMenu3.useContextMenu)({
    offset: offset,
    area: area,
    onOpened: onOpened,
    onClosed: onClosed
  }),
      _useContextMenu2 = (0, _slicedToArray2.default)(_useContextMenu, 1),
      _useContextMenu2$ = _useContextMenu2[0],
      contextMenuRef = _useContextMenu2$.contextMenuRef,
      visible = _useContextMenu2$.visible;

  return _react.default.createElement(ContextMenuStyled, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(restProps.theme, theme),
    style: {
      display: visible ? 'block' : 'none'
    },
    ref: contextMenuRef
  }, restProps), children);
}

ContextMenu.defaultProps = {
  offset: 0
};