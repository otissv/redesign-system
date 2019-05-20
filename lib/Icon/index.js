"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = require("./Icon");

Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icon[key];
    }
  });
});

var _icon = require("./icon.theme");

Object.keys(_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon[key];
    }
  });
});