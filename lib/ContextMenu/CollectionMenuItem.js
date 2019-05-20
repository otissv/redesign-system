"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionMenuItem = CollectionMenuItem;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _collectionMenuItem = require("./collectionMenuItem.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CollectionMenuItemStyled = _styledComponents.default.li(_templateObject(), _collectionMenuItem.collectionMenuItemTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function CollectionMenuItem(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      theme = _useContext.theme;

  return _react.default.createElement(CollectionMenuItemStyled, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props), props.children);
}