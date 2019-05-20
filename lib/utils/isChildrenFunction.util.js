"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChildrenFunction = void 0;

var _isFunction = require("./isFunction.util");

var _either = require("./either.util");

var isChildrenFunction = function isChildrenFunction(props) {
  return function (context) {
    return (0, _either.either)(function () {
      return props.children(context);
    }, props.children)((0, _isFunction.isFunction)(props.children));
  };
};

exports.isChildrenFunction = isChildrenFunction;