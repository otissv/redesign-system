"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionContent = AccordionContent;
exports.default = exports.accordionContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccordionContext = require("./AccordionContext");

var _AccordionItem = require("./AccordionItem");

var _ThemeContext = require("../ThemeContext");

var _accordion = require("./accordion.theme");

var _utils = require("../utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionContentStyled = _styledComponents.default.div(_templateObject(), _accordion.accordionContentTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function AccordionContent(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var _useContext3 = (0, _react.useContext)(_AccordionContext.AccordionContext),
      _useContext4 = (0, _slicedToArray2.default)(_useContext3, 1),
      active = _useContext4[0];

  var _useContext5 = (0, _react.useContext)(_AccordionItem.AccordionItemContext),
      _useContext6 = (0, _slicedToArray2.default)(_useContext5, 1),
      uid = _useContext6[0];

  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  return _react.default.createElement(AccordionContentStyled, (0, _extends2.default)({
    className: "Accordion-content",
    styled: active === uid ? 'display:block;' : '',
    theme: themeContext
  }, props));
}

AccordionContent.propTypes = {
  children: _propTypes.default.any.isRequired,
  theme: _propTypes.default.object
};
var accordionContent = (0, _styledComponents.default)(AccordionContent);
exports.accordionContent = accordionContent;
var _default = AccordionContent;
exports.default = _default;