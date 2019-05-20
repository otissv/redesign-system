"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _input = require("./input.theme");

var Input = _react.default.memo(function Input(_ref) {
  var children = _ref.children,
      className = _ref.className,
      valid = _ref.valid,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "valid", "themed"]);
  var classNames = "Input ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_input.inputTheme, _input.inputAppearanceTheme, _input.inputSizeTheme, _input.inputWidthsTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_input.inputTheme, _input.inputAppearanceTheme, _input.inputSizeTheme, _input.inputWidthsTheme, propsThemed]);
  var isDisabled = propsRest.appearance === 'disabled' || propsRest.appearance === 'primary-disabled' || propsRest.appearance === 'secondary-disabled' || propsRest.appearance === 'tertiary-disabled';
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    el: "input",
    className: classNames,
    themed: themed,
    disabled: isDisabled,
    "aria-invalid": valid
  }, propsRest), children);
});

exports.Input = Input;
Input.propTypes = {
  appearance: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'primary-accent', 'secondary-accent', 'tertiary-accent', 'primary-action', 'secondary-action', 'tertiary-action', 'primary-danger', 'secondary-danger', 'tertiary-danger', 'primary-success', 'secondary-success', 'tertiary-success', 'primary-warning', 'secondary-warning', 'tertiary-warning', 'primary-disabled', 'secondary-disabled', 'tertiary-disabled']),
  innerRef: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'large']),
  styled: _propTypes.default.string,
  valid: _propTypes.default.bool,
  value: _propTypes.default.string,
  widths: _propTypes.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
};
Input.defaultProps = {
  context: null,
  onBlur: function onBlur(e) {},
  onChange: function onChange() {},
  onFocus: function onFocus(e) {},
  placeholder: null,
  size: null,
  themed: [],
  valid: true,
  widths: null
};
var _default = Input;
exports.default = _default;