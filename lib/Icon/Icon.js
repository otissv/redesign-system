"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _icon = require("./icon.theme");

var _Base = _interopRequireDefault(require("../Base/Base"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var IconStyled = _styledComponents.default.svg(_templateObject(), _icon.iconTheme, _icon.iconAppearanceTheme, _utils.sharedStyles, function (props) {
  return props.css;
});

function Icon(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Icon ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_icon.iconTheme, _icon.iconAppearanceTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_icon.iconTheme, _icon.iconAppearanceTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    el: "svg",
    className: classNames,
    themed: themed,
    xmlns: "http://www.w3.org/2000/svg"
  }, propsRest), children);
}

Icon.propTypes = {
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'inverted', 'primary', 'success', 'warning']),
  children: _propTypes.default.node,
  height: _propTypes.default.string,
  hoverColor: _propTypes.default.string,
  css: _propTypes.default.string,
  viewBox: _propTypes.default.string,
  width: _propTypes.default.string,
  themed: _propTypes.default.array
};
Icon.defaultProps = {
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24',
  themed: []
};
var _default = Icon;
exports.default = _default;