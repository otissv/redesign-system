"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _CardContext = require("./CardContext");

var _cardHeader = require("./cardHeader.theme");

var CardHeader = _react.default.memo(function CardHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var card = (0, _CardContext.useCard)();
  var classNames = "CardHeader ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_cardHeader.cardHeaderTheme, _cardHeader.cardHeaderContextTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_cardHeader.cardHeaderTheme, _cardHeader.cardHeaderContextTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames
  }, card, {
    themed: themed
  }, propsRest), children);
});

exports.CardHeader = CardHeader;
CardHeader.defaultProps = {
  themed: []
};
CardHeader.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'action', 'danger', 'primary', 'success', 'warning']),
  size: _propTypes.default.oneOf(['collapse', 'small', 'large']),
  themed: _propTypes.default.array
};
var _default = CardHeader;
exports.default = _default;