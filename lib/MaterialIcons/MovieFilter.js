"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieFilter = MovieFilter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MovieFilter(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}