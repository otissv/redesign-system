"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorMessage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _errorMessage = require("./errorMessage.theme");

var ErrorMessage = _react.default.memo(function ErrorMessage(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "CardFooter ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_errorMessage.errorMessageTheme, _errorMessage.errorMessageAppearanceTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_errorMessage.errorMessageTheme, _errorMessage.errorMessageAppearanceTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children);
});

exports.ErrorMessage = ErrorMessage;
ErrorMessage.defaultProps = {
  themed: []
};
ErrorMessage.propTypes = {
  themed: _propTypes.default.array
};
var _default = ErrorMessage;
exports.default = _default;