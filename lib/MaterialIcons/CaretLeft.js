"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaretLeft = CaretLeft;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CaretLeft(props) {
  return _react.default.createElement(_Icon.default, (0, _extends2.default)({}, props, {
    viewBox: "0 0 480 480"
  }), _react.default.createElement("path", {
    id: "path4",
    d: "M 190,340 290,240 190,140 Z"
  }));
}