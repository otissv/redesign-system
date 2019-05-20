"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Img = require("./Img");

Object.keys(_Img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Img[key];
    }
  });
});

var _img = require("./img.theme");

Object.keys(_img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _img[key];
    }
  });
});