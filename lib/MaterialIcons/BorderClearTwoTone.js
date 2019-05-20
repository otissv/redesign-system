"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderClearTwoTone = BorderClearTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BorderClearTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M7 3h2v2H7zM7 19h2v2H7zM3 3h2v2H3zM19 3h2v2h-2zM19 7h2v2h-2zM19 11h2v2h-2zM3 7h2v2H3zM3 19h2v2H3zM19 19h2v2h-2zM19 15h2v2h-2zM3 15h2v2H3zM3 11h2v2H3zM7 11h2v2H7zM15 11h2v2h-2zM11 19h2v2h-2zM15 19h2v2h-2zM15 3h2v2h-2zM11 3h2v2h-2zM11 7h2v2h-2zM11 15h2v2h-2zM11 11h2v2h-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M7 3h2v2H7zM7 19h2v2H7zM3 3h2v2H3zM19 3h2v2h-2zM19 7h2v2h-2zM19 11h2v2h-2zM3 7h2v2H3zM3 19h2v2H3zM19 19h2v2h-2zM19 15h2v2h-2zM3 15h2v2H3zM3 11h2v2H3zM7 11h2v2H7zM15 11h2v2h-2zM11 19h2v2h-2zM15 19h2v2h-2zM15 3h2v2h-2zM11 3h2v2h-2zM11 7h2v2h-2zM11 15h2v2h-2zM11 11h2v2h-2z"
  })));
}