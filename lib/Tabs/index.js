"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabContext = require("./TabContext");

Object.keys(_TabContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabContext[key];
    }
  });
});

var _TabList = require("./TabList");

Object.keys(_TabList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabList[key];
    }
  });
});

var _TabPanel = require("./TabPanel");

Object.keys(_TabPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabPanel[key];
    }
  });
});

var _Tabs = require("./Tabs");

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tabs[key];
    }
  });
});

var _tabs = require("./tabs.theme");

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});