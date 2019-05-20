"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = Flex;
exports.default = exports.flex = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _flex = require("./flex.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FlexStyled = _styledComponents.default.div(_templateObject(), _flex.flexTheme, _flex.flexDirectionTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Flex(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(FlexStyled, (0, _extends2.default)({
    className: "Flex"
  }, props, {
    theme: (0, _utils.setTheme)(props.theme, theme)
  }), props.children);
}

Flex.propTypes = {
  /**
   * Any valid react child node
   */
  children: _propTypes.default.node,
  alignItems: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'stretch', 'spaceAround', 'spaceEvenly', 'spaceBetween']),
  justifyItems: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'stretch', 'spaceAround', 'spaceEvenly', 'spaceBetween']),
  direction: _propTypes.default.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  flow: _propTypes.default.string,
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrapReverse']),
  justifyContent: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'spaceEvenly', 'stretch']),
  alignContent: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'spaceEvenly', 'stretch']),
  styled: _propTypes.default.string,
  themed: _propTypes.default.object // grow: PropTypes.number,
  // shrink: PropTypes.number,
  // basis: PropTypes.number,

};
var flex = (0, _styledComponents.default)(Flex);
exports.flex = flex;
var _default = Flex;
exports.default = _default;