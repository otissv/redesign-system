"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Typography = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _typography = require("./typography.theme");

var Typography = _react.default.memo(function Typography(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  var classNames = "Typography ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_typography.typographyContextTheme, _typography.typographyElementTheme, _typography.typographyTheme, _typography.typographyModifyTheme, _typography.typographyWrapTheme, _typography.typographyTextAlignTheme, _typography.typographyTransformTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_typography.typographyContextTheme, _typography.typographyElementTheme, _typography.typographyTheme, _typography.typographyModifyTheme, _typography.typographyWrapTheme, _typography.typographyTextAlignTheme, _typography.typographyTransformTheme, propsThemed]);
  var attributes = (0, _objectSpread2.default)({}, propsRest.as === 'hr' ? {
    'aria-role': 'separator',
    'aria-orientation': 'horizontal'
  } : {});
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, attributes, propsRest), children);
});

exports.Typography = Typography;
Typography.defaultProps = {
  as: 'p',
  themed: []
};
Typography.propTypes = {
  context: _propTypes.default.oneOf(['accent', 'action', 'danger', 'disabled', 'success', 'warning']),
  href: _propTypes.default.string,
  textWrap: _propTypes.default.oneOf(['truncate', 'break', 'nowrap']),
  element: _propTypes.default.oneOf(['a', 'abbr', 'code', 'del', 'dfn', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'ins', 'mark', 'q', 'p', 'span', 'strong']),
  textAlign: _propTypes.default.oneOf(['left', 'leftSmall', 'leftMedium', 'leftLarge', 'right', 'rightSmall', 'rightMedium', 'rightLarge', 'center', 'centerSmall', 'centerMedium', 'centerLarge', 'justify']),
  theme: _propTypes.default.object
};
var _default = Typography; // textVertical='top'	Aligns text to the top.
// textVertical='middle'	Centers text vertically.
// textVertical='bottom'	Aligns text to the bottom.
//   }
// }

exports.default = _default;