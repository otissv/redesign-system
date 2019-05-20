"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Textarea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _textarea = require("./textarea.theme");

var Textarea = _react.default.memo(function Textarea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  var classNames = "Textarea ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_textarea.textareaTheme, _textarea.textareaAppearanceTheme, _textarea.textareaWidthsTheme];
  }, [_textarea.textareaTheme, _textarea.textareaAppearanceTheme, _textarea.textareaWidthsTheme]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    el: "textarea",
    className: classNames,
    themed: themed,
    disabled: propsRest.appearance === 'disabled'
  }, propsRest), children);
});

exports.Textarea = Textarea;
Textarea.propTypes = {
  active: _propTypes.default.bool,
  appearance: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'accent', 'primary-accent', 'secondary-accent', 'tertiary-accent', 'action', 'primary-action', 'secondary-action', 'tertiary-action', 'danger', 'primary-danger', 'secondary-danger', 'tertiary-danger', 'success', 'primary-success', 'secondary-success', 'tertiary-success', 'warning', 'primary-warning', 'secondary-warning', 'tertiary-warning', 'disabled', 'primary-disabled', 'secondary-disabled', 'tertiary-disabled']),
  widths: _propTypes.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
};
var _default = Textarea;
exports.default = _default;