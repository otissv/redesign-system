"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _View = require("./View");

Object.keys(_View).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _View[key];
    }
  });
});