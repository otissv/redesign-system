"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Badge = require("./Badge");

Object.keys(_Badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Badge[key];
    }
  });
});

var _badge = require("./badge.theme");

Object.keys(_badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badge[key];
    }
  });
});