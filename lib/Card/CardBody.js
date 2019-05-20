"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cardBody = exports.CardBody = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _card = require("./card.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CardBodyStyled = _styledComponents.default.div(_templateObject(), _card.cardBodyTheme, _card.cardAppearanceTheme, _card.cardCollapseTheme, _card.cardSizeTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var CardBody = _react.default.memo(function CardBody(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var children = props.children;
  return _react.default.createElement(CardBodyStyled, (0, _extends2.default)({
    className: "Card-body",
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props), children);
});

exports.CardBody = CardBody;
CardBody.propTypes = {
  backgroundImage: _propTypes.default.string,
  children: _propTypes.default.node,
  collapse: _propTypes.default.bool,
  appearance: _propTypes.default.oneOf(['accent', 'ghost', 'danger', 'primary', 'success', 'warning']),
  size: _propTypes.default.oneOf(['small', 'large']),
  styled: _propTypes.default.string,
  theme: _propTypes.default.object
};
CardBody.defaultProps = {
  collapse: false
};
var cardBody = (0, _styledComponents.default)(CardBody);
exports.cardBody = cardBody;
var _default = CardBody;
exports.default = _default;