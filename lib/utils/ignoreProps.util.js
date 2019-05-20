"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreProps = ignoreProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function ignoreProps(ignore) {
  return function (props) {
    return Object.keys(props).reduce(function (previous, key) {
      if (ignore.includes(key)) return previous;
      return (0, _objectSpread3.default)({}, previous, (0, _defineProperty2.default)({}, key, props[key]));
    }, {});
  };
}