"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Typography = require("./Typography");

Object.keys(_Typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typography[key];
    }
  });
});

var _typography = require("./typography.theme");

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});