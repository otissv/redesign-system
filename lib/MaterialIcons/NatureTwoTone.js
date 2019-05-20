"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NatureTwoTone = NatureTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function NatureTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12.17 4.17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88h-.03c3.49-.4 6.2-3.36 6.2-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.25 5-5 5z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12.17 4.17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88h-.03c3.49-.4 6.2-3.36 6.2-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.25 5-5 5z"
  })));
}