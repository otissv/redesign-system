"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TuneTwoTone = TuneTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function TuneTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 5h10v2H3zM7 11H3v2h4v2h2V9H7zM13 15h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zM11 11h10v2H11zM17 3h-2v6h2V7h4V5h-4z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 5h10v2H3zM7 11H3v2h4v2h2V9H7zM13 15h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zM11 11h10v2H11zM17 3h-2v6h2V7h4V5h-4z"
  })));
}