"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderTheme = borderTheme;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _upperFirst = _interopRequireDefault(require("lodash/fp/upperFirst"));

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function borderTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      border = _ref.border,
      color = _ref.color;

  var rounded = '3px';
  var circle = '100%';
  var style = 'solid';
  var dash = 'dashed';
  var thickWidth = '2px';
  var thickColor = color.foreground;
  var thinWidth = '1px';
  var thinColor = color.foreground;
  var defaults = (0, _objectSpread3.default)({
    none: 'none',
    rounded: rounded,
    circle: circle,
    style: style,
    dash: dash,
    thickWidth: thickWidth,
    thickColor: thickColor,
    thinWidth: thinWidth,
    thinColor: thinColor,
    // thick
    thick: "".concat(thickWidth, " ").concat(style, " ").concat(thickColor),
    thickInvert: "".concat(thickWidth, " ").concat(style, " ").concat(thickColor),
    thickDashed: "".concat(thickWidth, " ").concat(dash, " ").concat(thickColor),
    thickDashedInvert: "".concat(thickWidth, " ").concat(dash, " ").concat(thickColor),
    thickTransparent: "".concat(thickWidth, " ").concat(style, " rgba(0, 0, 0, 0);"),
    // thin
    thin: "".concat(thinWidth, " ").concat(style, " ").concat(thinColor),
    thinDashed: "".concat(thinWidth, " ").concat(dash, "  ").concat(thinColor),
    thinDashedInvert: "".concat(thinWidth, " ").concat(dash, "  ").concat(thinColor),
    thinInvert: "".concat(thinWidth, " ").concat(style, " ").concat(thinColor),
    thinTransparent: "".concat(thinWidth, " ").concat(style, " rgba(0, 0, 0, 0);")
  }, Object.keys(color).reduce(function (previous, key) {
    var _objectSpread2;

    return (0, _objectSpread3.default)({}, previous, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, key, color[key]), (0, _defineProperty2.default)(_objectSpread2, "thick".concat((0, _upperFirst.default)(key)), "".concat(thickWidth, " ").concat(style, " ").concat(color[key])), (0, _defineProperty2.default)(_objectSpread2, "thin".concat((0, _upperFirst.default)(key)), "".concat(thinWidth, " ").concat(style, " ").concat(color[key])), (0, _defineProperty2.default)(_objectSpread2, "thickDashed".concat((0, _upperFirst.default)(key)), "".concat(thickWidth, " ").concat(dash, " ").concat(color[key])), (0, _defineProperty2.default)(_objectSpread2, "thinDashed".concat((0, _upperFirst.default)(key)), "".concat(thinWidth, " ").concat(dash, " ").concat(color[key])), _objectSpread2));
  }, {}));
  return (0, _merge.default)(border)(defaults);
}