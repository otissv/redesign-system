"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.either = void 0;

var _isFunction = require("./isFunction.util");

var either = function either(left, right) {
  return function (condition) {
    return condition ? (0, _isFunction.isFunction)(left) ? left() : left : (0, _isFunction.isFunction)(right) ? right() : right;
  };
};

exports.either = either;