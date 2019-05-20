"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _utils = require("../utils");

var _card = require("./card.theme");

var _CardContext = require("./CardContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", "\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CardStyled = _styledComponents.default.div(_templateObject(), _card.cardTheme, _card.cardContextTheme, _card.cardSizeTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var Card = _react.default.memo(function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      hover = _ref.hover,
      size = _ref.size,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "context", "hover", "size", "themed"]);
  var classNames = "Card ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_card.cardTheme, _card.cardContextTheme, _card.cardSizeTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_card.cardTheme, _card.cardContextTheme, _card.cardSizeTheme, propsThemed]);
  var value = (0, _react.useMemo)(function () {
    return {
      context: context,
      hover: hover,
      size: size
    };
  }, [context, hover, size]);
  return _react.default.createElement(_CardContext.CardProvider, {
    value: value
  }, _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed,
    context: context,
    hover: hover,
    size: size
  }, propsRest), children));
});

exports.Card = Card;
Card.defaultProps = {
  hover: false,
  themed: []
};
Card.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  context: _propTypes.default.oneOf(['accent', 'action', 'danger', 'success', 'warning']),
  hover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large', 'collapse']),
  themed: _propTypes.default.array
};
var _default = Card;
exports.default = _default;