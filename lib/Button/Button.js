"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _button = require("./button.theme");

var Button = _react.default.memo(function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onClick", "themed"]);
  var classNames = "Button ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_button.buttonTheme, _button.buttonAppearanceTheme, _button.buttonSizeTheme, _button.buttonStretchTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_button.buttonTheme, _button.buttonAppearanceTheme, _button.buttonSizeTheme, _button.buttonStretchTheme, propsThemed]);

  function handleOnClick(e) {
    e.preventDefault();
    onClick && onClick(e);
  } // console.log(propsRest.stretch)


  var appearance = (0, _objectSpread2.default)({}, propsRest.appearance === 'disabled' || propsRest.appearance === 'primary-disabled' || propsRest.appearance === 'secondary-disabled' || propsRest.appearance === 'tertiary-disabled' ? 'aria-disabled' : {});
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    el: "button",
    className: classNames,
    themed: themed,
    onClick: handleOnClick,
    role: "button",
    tabIndex: 0
  }, propsRest), children);
});

exports.Button = Button;
Button.defaultProps = {
  themed: []
};
Button.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'accent', 'primary-accent', 'secondary-accent', 'tertiary-accent', 'action', 'primary-action', 'secondary-action', 'tertiary-action', 'danger', 'primary-danger', 'secondary-danger', 'tertiary-danger', 'success', 'primary-success', 'secondary-success', 'tertiary-success', 'warning', 'primary-warning', 'secondary-warning', 'tertiary-warning', 'disabled', 'primary-disabled', 'secondary-disabled', 'tertiary-disabled']),
  size: _propTypes.default.oneOf(['small', 'large']),
  stretch: _propTypes.default.bool,
  themed: _propTypes.default.array
};
var _default = Button;
exports.default = _default;