"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContextMenu = useContextMenu;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useContextMenu(_ref) {
  var offset = _ref.offset,
      area = _ref.area,
      listenTo = _ref.listenTo,
      onClosed = _ref.onClosed,
      onOpened = _ref.onOpened;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var contextMenuRef = (0, _react.useRef)();

  function handleContextMenu(e) {
    e.preventDefault();

    if (area != null && e.target.dataset.contextarea !== area) {
      return;
    }

    setVisible(true);
    var clickX = e.clientX;
    var clickY = e.clientY;
    var screenW = window.innerWidth;
    var screenH = window.innerHeight;
    var rootW = contextMenuRef.current.offsetWidth;
    var rootH = contextMenuRef.current.offsetHeight;
    var right = screenW - clickX > rootW;
    var left = !right;
    var top = screenH - clickY > rootH;
    var bottom = !top;

    if (right) {
      contextMenuRef.current.style.left = "".concat(clickX + offset, "px");
    }

    if (left) {
      contextMenuRef.current.style.left = "".concat(clickX - rootW - offset, "px");
    }

    if (top) {
      contextMenuRef.current.style.top = "".concat(clickY + offset, "px");
    }

    if (bottom) {
      contextMenuRef.current.style.top = "".concat(clickY - rootH - offset, "px");
    }

    onOpened && onOpened(e, true);
  }

  function handleClick(e) {
    e.preventDefault();
    if (!visible) return;
    setVisible(false);
    onClosed && onClosed(e, false);
  }

  function handleScroll(e) {
    if (visible) setVisible(false);
  }

  (0, _react.useEffect)(function () {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    return function () {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  });
  return [{
    contextMenuRef: contextMenuRef,
    visible: visible
  }];
}