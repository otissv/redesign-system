"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRounded = StarRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function StarRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
  }), ",", _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
  }));
}