"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alert = require("./Alert");

Object.keys(_Alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alert[key];
    }
  });
});

var _alert = require("./alert.theme");

Object.keys(_alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alert[key];
    }
  });
});