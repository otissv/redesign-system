"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = require("./Footer");

Object.keys(_Footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Footer[key];
    }
  });
});

var _footer = require("./footer.theme");

Object.keys(_footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _footer[key];
    }
  });
});