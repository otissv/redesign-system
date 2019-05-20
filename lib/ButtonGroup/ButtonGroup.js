"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useButtonGroup = useButtonGroup;
exports.default = exports.ButtonGroup = exports.ButtonGroupContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _buttonGroup = require("./buttonGroup.theme");

var ButtonGroupContext = _react.default.createContext({});

exports.ButtonGroupContext = ButtonGroupContext;

function useButtonGroup() {
  return (0, _react.useContext)(ButtonGroupContext);
}

var ButtonGroup = _react.default.memo(function ButtonGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onClick", "themed"]);
  var classNames = "ButtonGroup ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_buttonGroup.buttonGroupTheme, _buttonGroup.buttonStretchGroupTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_buttonGroup.buttonGroupTheme, _buttonGroup.buttonStretchGroupTheme, propsThemed]);
  var appearance = propsRest.appearance,
      context = propsRest.context,
      size = propsRest.size,
      stretch = propsRest.stretch;
  var value = (0, _react.useMemo)(function () {
    return {
      appearance: appearance,
      context: context,
      size: size,
      stretch: stretch
    };
  }, [appearance, context, size, stretch]);
  return _react.default.createElement(ButtonGroupContext.Provider, {
    value: value
  }, _react.default.createElement(_Base.default, (0, _extends2.default)({
    role: "group",
    className: classNames,
    themed: themed
  }, propsRest), children));
});

exports.ButtonGroup = ButtonGroup;
ButtonGroup.defaultProps = {
  themed: []
};
ButtonGroup.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'accent', 'primary-accent', 'secondary-accent', 'tertiary-accent', 'primary-action', 'accent', 'primary-action', 'secondary-action', 'tertiary-action', 'danger', 'primary-danger', 'secondary-danger', 'tertiary-danger', 'success', 'primary-success', 'secondary-success', 'tertiary-success', 'warning', 'primary-warning', 'secondary-warning', 'tertiary-warning', 'disabled', 'primary-disabled', 'secondary-disabled', 'tertiary-disabled']),
  size: _propTypes.default.oneOf(['small', 'large']),
  stretch: _propTypes.default.bool,
  themed: _propTypes.default.array
};
var _default = ButtonGroup;
exports.default = _default;