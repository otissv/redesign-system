"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _CardContext = require("./CardContext");

var _cardFooter = require("./cardFooter.theme");

var CardFooter = _react.default.memo(function CardFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var card = (0, _CardContext.useCard)();
  var classNames = "CardFooter ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_cardFooter.cardFooterTheme, _cardFooter.cardFooterContextTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_cardFooter.cardFooterTheme, _cardFooter.cardFooterContextTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames
  }, card, {
    themed: themed
  }, propsRest), children);
});

exports.CardFooter = CardFooter;
CardFooter.defaultProps = {
  themed: []
};
CardFooter.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'danger', 'ghost', 'primary', 'success', 'warning']),
  size: _propTypes.default.oneOf(['collapse', 'small', 'large']),
  themed: _propTypes.default.array
};
var _default = CardFooter;
exports.default = _default;