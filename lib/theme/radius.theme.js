"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radiusTheme = radiusTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function radiusTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      radius = _ref.radius;

  var defaults = {
    rounded: '3px',
    circle: '100%'
  };
  return (0, _merge.default)(radius)(defaults);
}