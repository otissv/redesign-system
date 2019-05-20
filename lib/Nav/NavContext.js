"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavProvider = NavProvider;
exports.NavContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var NavContext = _react.default.createContext('');

exports.NavContext = NavContext;

function NavProvider(props) {
  var _useState = (0, _react.useState)(props.active),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return _react.default.createElement(NavContext.Provider, {
    value: {
      active: active,
      setActive: setActive
    }
  }, props.children);
}