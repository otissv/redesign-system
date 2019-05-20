"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mayBe = mayBe;

function mayBe(value, empty) {
  return value ? value : empty || null;
}