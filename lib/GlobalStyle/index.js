"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GlobalStyle = require("./GlobalStyle");

Object.keys(_GlobalStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GlobalStyle[key];
    }
  });
});