"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflinePin = OfflinePin;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function OfflinePin(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"
  }), ",", _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"
  }));
}