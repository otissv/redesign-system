"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedStyles = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var sharedStyles = function sharedStyles() {
  return function (props) {
    return props.theme ? Object.keys(props.theme.shared).reduce(function (previous, key) {
      return props[key] ? (0, _objectSpread2.default)({}, previous, props.theme.shared[key](props[key])) : previous;
    }, {}) : {};
  };
};

exports.sharedStyles = sharedStyles;