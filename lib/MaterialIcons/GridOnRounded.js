"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridOnRounded = GridOnRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function GridOnRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H5c-.55 0-1-.45-1-1v-3h4v4zm0-6H4v-4h4v4zm0-6H4V5c0-.55.45-1 1-1h3v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1zm1-6h-4v-4h4v4zm0-6h-4V4h3c.55 0 1 .45 1 1v3z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H5c-.55 0-1-.45-1-1v-3h4v4zm0-6H4v-4h4v4zm0-6H4V5c0-.55.45-1 1-1h3v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1zm1-6h-4v-4h4v4zm0-6h-4V4h3c.55 0 1 .45 1 1v3z"
  })));
}