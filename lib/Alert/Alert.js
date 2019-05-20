"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _alert = require("./alert.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  fill: currentcolor;\n  line-height: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Close = _styledComponents.default.a(_templateObject(), function (props) {
  return props.onClose ? 'inline-block' : 'none';
});

var Alert = _react.default.memo(function Alert(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Alert ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_alert.alertTheme, _alert.alertAppearanceTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_alert.alertTheme, _alert.alertAppearanceTheme, propsThemed]);

  function handleOnClose(e) {
    e.preventDefault();
  }

  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), _react.default.createElement(Close, {
    onClick: handleOnClose
  }, _react.default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("line", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.1",
    x1: "1",
    y1: "1",
    x2: "13",
    y2: "13"
  }), _react.default.createElement("line", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.1",
    x1: "13",
    y1: "1",
    x2: "1",
    y2: "13"
  }))), children);
});

exports.Alert = Alert;
Alert.defaultProps = {
  themed: []
};
Alert.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['primary', 'secondary']),
  context: _propTypes.default.oneOf(['accent', 'action', 'success', 'warning', 'danger']),
  onClose: _propTypes.default.func,
  themed: _propTypes.default.array
};
var _default = Alert;
exports.default = _default;