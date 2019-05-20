"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatLabelProvider = FloatLabelProvider;
exports.FloatLabelContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function noop() {}

var FloatLabelContext = _react.default.createContext({});

exports.FloatLabelContext = FloatLabelContext;

function FloatLabelProvider(_ref) {
  var children = _ref.children,
      _ref$value = _ref.value,
      active = _ref$value.active,
      floating = _ref$value.floating,
      onBlur = _ref$value.onBlur,
      onFocus = _ref$value.onFocus;

  var _useState = (0, _react.useState)(active || false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeState = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(floating || false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      floatingState = _useState4[0],
      setFloating = _useState4[1];

  var _useState5 = (0, _react.useState)(onBlur || noop),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      onBlurState = _useState6[0],
      setOnBlur = _useState6[1];

  var _useState7 = (0, _react.useState)(onFocus || noop),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      onFocusState = _useState8[0],
      setOnFocus = _useState8[1];

  var state = [activeState, floatingState, onBlurState, onFocusState];
  var setState = [setActive, setFloating, setOnBlur, setOnFocus];
  return _react.default.createElement(FloatLabelContext.Provider, {
    value: [state, setState]
  }, children);
}