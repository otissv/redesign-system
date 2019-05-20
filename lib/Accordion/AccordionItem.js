"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = AccordionItem;
exports.default = exports.accordionItem = exports.AccordionItemContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _accordion = require("./accordion.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionItemContext = _react.default.createContext('');

exports.AccordionItemContext = AccordionItemContext;

var AccordionItemStyled = _styledComponents.default.li(_templateObject(), _accordion.accordionItemTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function AccordionItem(props) {
  var state = (0, _react.useState)(props.uid);

  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  return _react.default.createElement(AccordionItemContext.Provider, {
    value: state
  }, _react.default.createElement(AccordionItemStyled, (0, _extends2.default)({
    className: "Accordion-item",
    theme: themeContext
  }, props), props.children));
}

AccordionItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  theme: _propTypes.default.object,
  uid: _propTypes.default.string
};
var accordionItem = (0, _styledComponents.default)(AccordionItem);
exports.accordionItem = accordionItem;
var _default = AccordionItem;
exports.default = _default;