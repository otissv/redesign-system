"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = Typography;
exports.default = exports.typography = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _typography = require("./typography.theme");

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", " ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", " ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function getStyles(props) {
  return (0, _objectSpread2.default)({}, (0, _typography.typographyTheme)(props), (0, _typography.typographyAppearanceTheme)(props), (0, _typography.typographyModifyTheme)(props), (0, _typography.typographyWrapTheme)(props), (0, _typography.typographyTextAlignTheme)(props), (0, _typography.typographyTransformTheme)(props), (0, _utils.sharedStyles)()(props));
}

var Link = _styledComponents.default.a(_templateObject(), getStyles, function (props) {
  return props.styled;
});

var Abbr = _styledComponents.default.abbr(_templateObject2(), getStyles, function (props) {
  return props.styled;
});

var Code = _styledComponents.default.code(_templateObject3(), getStyles, _typography.typographyElementTheme, function (props) {
  return props.styled;
});

var Del = _styledComponents.default.del(_templateObject4(), getStyles, function (props) {
  return props.styled;
});

var Dfn = _styledComponents.default.dfn(_templateObject5(), getStyles, function (props) {
  return props.styled;
});

var Em = _styledComponents.default.em(_templateObject6(), getStyles, function (props) {
  return props.styled;
});

var H1 = _styledComponents.default.h1(_templateObject7(), getStyles, function (props) {
  return props.styled;
});

var H2 = _styledComponents.default.h2(_templateObject8(), getStyles, function (props) {
  return props.styled;
});

var H3 = _styledComponents.default.h3(_templateObject9(), getStyles, function (props) {
  return props.styled;
});

var H4 = _styledComponents.default.h4(_templateObject10(), getStyles, function (props) {
  return props.styled;
});

var H5 = _styledComponents.default.h5(_templateObject11(), getStyles, function (props) {
  return props.styled;
});

var H6 = _styledComponents.default.h6(_templateObject12(), getStyles, function (props) {
  return props.styled;
});

var Hr = _styledComponents.default.hr(_templateObject13(), getStyles, _typography.typographyElementTheme, function (props) {
  return props.styled;
});

var Ins = _styledComponents.default.ins(_templateObject14(), getStyles, function (props) {
  return props.styled;
});

var Q = _styledComponents.default.q(_templateObject15(), getStyles, _typography.typographyElementTheme, function (props) {
  return props.styled;
});

var Mark = _styledComponents.default.mark(_templateObject16(), getStyles, function (props) {
  return props.styled;
});

var P = _styledComponents.default.p(_templateObject17(), getStyles, function (props) {
  return props.styled;
});

var Sm = _styledComponents.default.small(_templateObject18(), getStyles, _typography.typographyElementTheme, function (props) {
  return props.styled;
});

var Span = _styledComponents.default.span(_templateObject19(), getStyles, function (props) {
  return props.styled;
});

var Strong = _styledComponents.default.strong(_templateObject20(), getStyles, function (props) {
  return props.styled;
});

function Typography(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var element = {
    a: function a(props) {
      return _react.default.createElement(Link, (0, _extends2.default)({
        href: props.href
      }, props), props.children);
    },
    abbr: function abbr(props) {
      return _react.default.createElement(Abbr, props, props.children);
    },
    code: function code(props) {
      return _react.default.createElement(Code, props, props.children);
    },
    del: function del(props) {
      return _react.default.createElement(Del, props, props.children);
    },
    dfn: function dfn(props) {
      return _react.default.createElement(Dfn, (0, _extends2.default)({}, props, {
        title: props.title
      }), props.children);
    },
    em: function em(props) {
      return _react.default.createElement(Em, props, props.children);
    },
    h1: function h1(props) {
      return _react.default.createElement(H1, props, props.children);
    },
    h2: function h2(props) {
      return _react.default.createElement(H2, props, props.children);
    },
    h3: function h3(props) {
      return _react.default.createElement(H3, props, props.children);
    },
    h4: function h4(props) {
      return _react.default.createElement(H4, props, props.children);
    },
    h5: function h5(props) {
      return _react.default.createElement(H5, props, props.children);
    },
    h6: function h6(props) {
      return _react.default.createElement(H6, props, props.children);
    },
    hr: function hr(props) {
      return _react.default.createElement(Hr, props);
    },
    ins: function ins(props) {
      return _react.default.createElement(Ins, props, props.children);
    },
    mark: function mark(props) {
      return _react.default.createElement(Mark, props, props.children);
    },
    q: function q(props) {
      return _react.default.createElement(Q, props, props.children);
    },
    p: function p(props) {
      return _react.default.createElement(P, props, props.children);
    },
    sm: function sm(props) {
      return _react.default.createElement(Sm, props, props.children);
    },
    span: function span(props) {
      return _react.default.createElement(Span, props, props.children);
    },
    strong: function strong(props) {
      return _react.default.createElement(Strong, props, props.children);
    }
  };
  var Component = element[props.element] || element['p'];
  return _react.default.createElement(Component, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props));
}

Typography.propTypes = {
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'muted', 'primary', 'success', 'warning']),
  href: _propTypes.default.string,
  textWrap: _propTypes.default.oneOf(['truncate', 'break', 'nowrap']),
  element: _propTypes.default.oneOf(['a', 'abbr', 'code', 'del', 'dfn', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'ins', 'mark', 'q', 'p', 'sm', 'span', 'strong']),
  textAlign: _propTypes.default.oneOf(['left', 'leftSmall', 'leftMedium', 'leftLarge', 'right', 'rightSmall', 'rightMedium', 'rightLarge', 'center', 'centerSmall', 'centerMedium', 'centerLarge', 'justify']),
  theme: _propTypes.default.object
};
Typography.defaultProps = {
  element: 'p'
};
var typography = (0, _styledComponents.default)(Typography);
exports.typography = typography;
var _default = Typography; // textVertical='top'	Aligns text to the top.
// textVertical='middle'	Centers text vertically.
// textVertical='bottom'	Aligns text to the bottom.
//   }
// }

exports.default = _default;