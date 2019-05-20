"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTheme = void 0;

var _either = require("./either.util");

var setTheme = function setTheme(propsTheme, theme) {
  return (0, _either.either)(propsTheme, theme)(propsTheme);
};

exports.setTheme = setTheme;