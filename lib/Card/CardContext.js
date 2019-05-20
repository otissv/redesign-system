"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCard = useCard;
exports.CardProvider = CardProvider;
exports.CardContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var CardContext = _react.default.createContext({});

exports.CardContext = CardContext;

function useCard() {
  return (0, _react.useContext)(CardContext);
}

function CardProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react.default.createElement(CardContext.Provider, {
    value: value
  }, children);
}