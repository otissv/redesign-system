"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccordion = useAccordion;
exports.AccordionProvider = AccordionProvider;
exports.AccordionContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var AccordionContext = _react.default.createContext({
  active: ''
});

exports.AccordionContext = AccordionContext;

function useAccordion() {
  return (0, _react.useContext)(AccordionContext);
}

function AccordionProvider(_ref) {
  var animate = _ref.animate,
      children = _ref.children,
      value = _ref.value;
  var state = (0, _react.useState)(value);
  var context = (0, _react.useMemo)(function () {
    return {
      active: state[0],
      animate: animate,
      setActiveItem: state[1]
    };
  }, [state]);
  return _react.default.createElement(AccordionContext.Provider, {
    value: context
  }, children);
}