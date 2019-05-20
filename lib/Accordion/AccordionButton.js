"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionButton = AccordionButton;
exports.default = exports.accordionButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _AccordionContext = require("./AccordionContext");

var _AccordionItem = require("./AccordionItem");

var _Icon = require("../Icon");

var _utils = require("../utils");

var _accordion = require("./accordion.theme");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n", "\n", ";\n", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionButtonStyled = _styledComponents.default.button(_templateObject(), _accordion.accordionButtonTheme, _utils.sharedStyles, function (props) {
  return props.styled;
}, function (props) {
  return props.styled;
});

var Icon = (0, _Icon.icon)(_templateObject2(), _accordion.accordionButtonIconTheme, _utils.sharedStyles, function (props) {
  return props.styled;
}, function (props) {
  return props.styled;
});

function AccordionButton(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var _useContext3 = (0, _react.useContext)(_AccordionContext.AccordionContext),
      _useContext4 = (0, _slicedToArray2.default)(_useContext3, 2),
      active = _useContext4[0],
      setActiveItem = _useContext4[1];

  var _useContext5 = (0, _react.useContext)(_AccordionItem.AccordionItemContext),
      _useContext6 = (0, _slicedToArray2.default)(_useContext5, 1),
      uid = _useContext6[0];

  var children = props.children,
      title = props.title;
  var themeContext = (0, _utils.setTheme)(props.theme, theme);

  function handleClick(e) {
    e.preventDefault();
    props.handleOnClick ? props.handleOnClick(e) : setActiveItem(e.target.dataset.uid);
  }

  function handleFocus(e) {
    e.preventDefault();
    props.onFocus ? props.onFocus(e) : setActiveItem(e.target.dataset.uid);
  }

  return _react.default.createElement(AccordionButtonStyled, (0, _extends2.default)({
    className: "Accordion-button",
    onClick: handleClick,
    "data-uid": uid,
    theme: themeContext,
    onFocus: handleFocus
  }, props), title || children);
} // <Icon
//                       theme={themeContext}
//                       onClick={setActiveItem}
//                       styled={
//                         state.hover
//                           ? styles('accordion.button.icon.&:hover')(props)
//                           : ''
//                       }
//                       {...iconProps}
//                     />


AccordionButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  theme: _propTypes.default.object,
  title: _propTypes.default.string,
  toggleProps: _propTypes.default.object
};
var accordionButton = (0, _styledComponents.default)(AccordionButton);
exports.accordionButton = accordionButton;
var _default = AccordionButton;
exports.default = _default;