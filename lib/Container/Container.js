"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("./container.theme");

var _Base = _interopRequireDefault(require("../Base/Base"));

var Container = _react.default.memo(function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Container ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_container.containerContextTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_container.containerContextTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children);
});

exports.Container = Container;
Container.defaultProps = {
  themed: []
};
Container.propTypes = {
  children: _propTypes.default.node,
  css: _propTypes.default.string,
  themed: _propTypes.default.array,
  context: _propTypes.default.oneOf(['accent', 'primary', 'success', 'warning', 'danger'])
};
var _default = Container;
exports.default = _default;