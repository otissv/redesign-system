"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _appBar = require("./appBar.theme");

var AppBar = _react.default.memo(function AppBar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "AppBar ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_appBar.appBarTheme, _appBar.appBarAppearanceTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_appBar.appBarTheme, _appBar.appBarAppearanceTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed,
    "aria-orientation": "horizontal"
  }, propsRest), children);
});

exports.AppBar = AppBar;
AppBar.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['accent', 'action', 'danger', 'success', 'warning']),
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  themed: _propTypes.default.array
};
AppBar.defaultProps = {
  position: 'static',
  themed: []
};
var _default = AppBar;
exports.default = _default;