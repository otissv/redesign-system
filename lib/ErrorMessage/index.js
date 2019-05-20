"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorMessage = require("./ErrorMessage");

Object.keys(_ErrorMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorMessage[key];
    }
  });
});

var _errorMessage = require("./errorMessage.theme");

Object.keys(_errorMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _errorMessage[key];
    }
  });
});