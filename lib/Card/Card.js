"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.card = exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

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

var CardStyled = _styledComponents.default.div(_templateObject(), _card.cardTheme, _card.cardAppearanceTheme, _card.cardCollapseTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var Card = _react.default.memo(function Card(props) {
  var _useContext = useContext(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var children = props.children,
      collapse = props.collapse,
      colors = props.colors;
  var context = {
    collapse: collapse,
    colors: colors // size,

  };
  return _react.default.createElement(CardContext, {
    value: context
  }, _react.default.createElement(CardStyled, (0, _extends2.default)({
    className: "Card",
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props), children));
});

exports.Card = Card;
Card.propTypes = {
  cardBodyProps: _propTypes.default.object,
  cardFooterProps: _propTypes.default.object,
  cardHeaderProps: _propTypes.default.object,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  collapse: _propTypes.default.bool,
  colors: _propTypes.default.oneOf(['accent', 'danger', 'ghost', 'primary', 'success', 'warning']),
  hover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large']),
  styled: _propTypes.default.string,
  theme: _propTypes.default.object
};
Card.defaultProps = {
  collapse: false,
  hover: false
};
var card = (0, _styledComponents.default)(Card);
exports.card = card;
var _default = Card;
exports.default = _default;