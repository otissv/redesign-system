"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationTheme = animationTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function animationTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      animation = _ref.animation;

  var xslow = '3s';
  var slow = '0.5s';
  var medium = '0.3s';
  var fast = '0.1s';
  var defaults = {
    xslow: xslow,
    slow: slow,
    medium: medium,
    fast: fast,
    // ease
    easeFast: function easeFast() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(fast, " ease ").concat(delay || '');
    },
    easeMedium: function easeMedium() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(medium, " ease ").concat(delay || '');
    },
    easeSlow: function easeSlow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(slow, " ease ").concat(delay || '');
    },
    easeXslow: function easeXslow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(xslow, " ease ").concat(delay || '');
    },
    // easIn
    easeInFast: function easeInFast() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(fast, " ease-in-out ").concat(delay || '');
    },
    easeInMedium: function easeInMedium() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(medium, " ease-in-out ").concat(delay || '');
    },
    easeInSlow: function easeInSlow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(slow, " ease-in-out ").concat(delay || '');
    },
    easeInXslow: function easeInXslow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(xslow, " ease-in-out ").concat(delay || '');
    },
    // easeInOut
    easeInOutFast: function easeInOutFast() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(fast, " ease-in-out ").concat(delay || '');
    },
    easeInOutMedium: function easeInOutMedium() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(medium, " ease-in-out ").concat(delay || '');
    },
    easeInOutSlow: function easeInOutSlow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(slow, " ease-in-out ").concat(delay || '');
    },
    easeInOutXslow: function easeInOutXslow() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(property, " ").concat(xslow, " ease-in-out ").concat(delay || '');
    }
  };
  return (0, _merge.default)(animation)(defaults);
}