"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatLineSpacingTwoTone = FormatLineSpacingTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatLineSpacingTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M10 5h12v2H10zM10 17h12v2H10zM1.5 17L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zM10 11h12v2H10z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M10 5h12v2H10zM10 17h12v2H10zM1.5 17L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zM10 11h12v2H10z"
  })));
}