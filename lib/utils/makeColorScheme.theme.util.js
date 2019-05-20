"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeColorScheme = makeColorScheme;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _upperFirst = _interopRequireDefault(require("lodash/fp/upperFirst"));

function makeColorScheme(colors) {
  return Object.keys(colors).reduce(function (previous, key) {
    var _objectSpread2;

    return (0, _objectSpread3.default)({}, previous, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, key, colors[key]), (0, _defineProperty2.default)(_objectSpread2, "border".concat((0, _upperFirst.default)(key)), colors[key]), (0, _defineProperty2.default)(_objectSpread2, "active".concat((0, _upperFirst.default)(key)), colors[key]), (0, _defineProperty2.default)(_objectSpread2, "focus".concat((0, _upperFirst.default)(key)), colors[key]), (0, _defineProperty2.default)(_objectSpread2, "hover".concat((0, _upperFirst.default)(key)), colors[key]), (0, _defineProperty2.default)(_objectSpread2, "visited".concat((0, _upperFirst.default)(key)), colors[key]), _objectSpread2));
  }, {});
}