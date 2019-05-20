"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CoverImg = require("./CoverImg");

Object.keys(_CoverImg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CoverImg[key];
    }
  });
});

var _coverImg = require("./coverImg.theme");

Object.keys(_coverImg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _coverImg[key];
    }
  });
});