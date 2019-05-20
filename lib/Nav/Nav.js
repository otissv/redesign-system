"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = Nav;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _utils = require("../utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavStyled = _styledComponents.default.ul(_templateObject(), _utils.sharedStyles, function (props) {
  return props.styled;
});

function Nav(_ref) {
  var propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["themed"]);

  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      theme = _useContext.theme; // componentWillReceiveProps() {
  //   const { active } = this.props
  //   active && this.setState({ active: active })
  // }


  return _react.default.createElement(NavProvider, null, _react.default.createElement(NavStyled, (0, _extends2.default)({
    theme: theme
  }, propsRest)));
}

Nav.defaultProps = {
  themed: []
};
Nav.propTypes = {
  themed: _propTypes.default.array
};
var _default = Nav;
exports.default = _default;