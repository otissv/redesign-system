"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _badge = require("./badge.theme");

var Badge = _react.default.memo(function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Badge ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_badge.badgeTheme, _badge.badgeContextTheme, _badge.badgePillTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_badge.badgeTheme, _badge.badgeContextTheme, _badge.badgePillTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children);
});

exports.Badge = Badge;
Badge.defaultProps = {
  themed: []
};
Badge.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'action', 'success', 'warning', 'danger']),
  onClose: _propTypes.default.func,
  themed: _propTypes.default.array
};
var _default = Badge;
exports.default = _default;