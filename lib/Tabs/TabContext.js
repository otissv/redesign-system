"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabProvider = TabProvider;
exports.TabContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cuid = _interopRequireDefault(require("cuid"));

var _reusable = require("reusable");

var TabContext = _react.default.createContext({});

exports.TabContext = TabContext;

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
    initialActive: active
  };
  var collectionListReducer = (0, _reusable.useCollectionReducer)(null, initialState);

  var _useReducerDevtools = (0, _reusable.useReducerDevtools)(collectionListReducer, initialState, 'MainTabs'),
      _useReducerDevtools2 = (0, _slicedToArray2.default)(_useReducerDevtools, 2),
      collection = _useReducerDevtools2[0],
      dispatch = _useReducerDevtools2[1];

  function insert(item) {
    dispatch((0, _objectSpread2.default)({
      type: 'INSERT'
    }, item, {
      uid: item.uid || (0, _cuid.default)()
    }));
  }

  function remove(uid) {
    dispatch({
      type: 'REMOVE',
      query: function query(item) {
        return item.uid === uid;
      }
    });
  }

  function update(uid) {
    dispatch({
      type: 'UPDATE',
      query: function query(item) {
        return item.uid === uid;
      }
    });
  }

  function select(uid) {
    dispatch({
      type: 'SELECT',
      query: function query(item) {
        return item.uid === uid;
      }
    });
  }

  return _react.default.createElement(TabContext.Provider, {
    value: [collection, {
      insert: insert,
      remove: remove,
      update: update,
      select: select,
      dispatch: dispatch
    }]
  }, children);
}