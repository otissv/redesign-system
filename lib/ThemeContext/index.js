"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ThemeContext = require("./ThemeContext");

Object.keys(_ThemeContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ThemeContext[key];
    }
  });
});