"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTabs = useTabs;
exports.TabProvider = TabProvider;
exports.TabContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cuid = _interopRequireDefault(require("cuid"));

var _collectionHash = require("../reusable/collectionHash");

var TabContext = _react.default.createContext({});

exports.TabContext = TabContext;

function useTabs() {
  return (0, _react.useContext)(TabContext);
}

function TabProvider(_ref) {
  var active = _ref.active,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? {} : _ref$selected,
      children = _ref.children,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  var initialState = {
    collections: [],
    selected: selected,
    active: active
  };

  var _useCollectionHashRed = (0, _collectionHash.useCollectionHashReducer)(null, initialState),
      _useCollectionHashRed2 = (0, _slicedToArray2.default)(_useCollectionHashRed, 2),
      collection = _useCollectionHashRed2[0],
      dispatch = _useCollectionHashRed2[1];

  var context = (0, _react.useMemo)(function () {
    return (0, _objectSpread2.default)({}, collection, {
      dispatch: dispatch
    });
  }, [collection, dispatch]);
  return _react.default.createElement(TabContext.Provider, {
    value: context
  }, children);
}