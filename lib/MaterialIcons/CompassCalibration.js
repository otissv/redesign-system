"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompassCalibration = CompassCalibration;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CompassCalibration(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), ",", _react.default.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}