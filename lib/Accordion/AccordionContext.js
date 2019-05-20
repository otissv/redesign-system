"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionProvider = AccordionProvider;
exports.AccordionContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var AccordionContext = _react.default.createContext({
  active: ''
});

exports.AccordionContext = AccordionContext;

function AccordionProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  var active = (0, _react.useState)(value);
  return _react.default.createElement(AccordionContext.Provider, {
    value: active
  }, children);
}