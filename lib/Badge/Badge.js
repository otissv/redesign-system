"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.badge = exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _badge = require("./badge.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", " ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BadgeStyled = _styledComponents.default.span(_templateObject(), _badge.badgeTheme, _badge.badgeContextTheme, _badge.badgePillTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var Badge = _react.default.memo(function Badge(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(BadgeStyled, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props), props.children);
});

exports.Badge = Badge;
Badge.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'primary', 'success', 'warning', 'danger']),
  onClose: _propTypes.default.func,
  theme: _propTypes.default.object
};
var badge = (0, _styledComponents.default)(Badge);
exports.badge = badge;
var _default = Badge;
exports.default = _default;