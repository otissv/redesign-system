"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Flex = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _flex = require("./flex.theme");

var _Base = _interopRequireDefault(require("../Base/Base"));

var Flex = _react.default.memo(function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Flex ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_flex.flexTheme, _flex.flexDirectionTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_flex.flexTheme, _flex.flexDirectionTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: "Flex",
    themed: themed
  }, propsRest), children);
});

exports.Flex = Flex;
Flex.defaultProps = {
  themed: []
};
Flex.propTypes = {
  children: _propTypes.default.node,
  css: _propTypes.default.string,
  alignItems: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'stretch', 'spaceAround', 'spaceEvenly', 'spaceBetween']),
  justifyItems: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'stretch', 'spaceAround', 'spaceEvenly', 'spaceBetween']),
  direction: _propTypes.default.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  flow: _propTypes.default.string,
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrapReverse']),
  justifyContent: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'spaceEvenly', 'stretch']),
  alignContent: _propTypes.default.oneOf(['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'spaceEvenly', 'stretch']),
  themed: _propTypes.default.array // grow: PropTypes.number,
  // shrink: PropTypes.number,
  // basis: PropTypes.number,

};
var _default = Flex;
exports.default = _default;