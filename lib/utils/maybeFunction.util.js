"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeFunction = maybeFunction;

function maybeFunction(value, context) {
  return function (component) {
    return typeof value === 'function' ? value(context) : component || value;
  };
}