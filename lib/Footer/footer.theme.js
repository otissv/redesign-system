"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerTheme = footerTheme;

function footerTheme(_ref) {
  var theme = _ref.theme,
      font = _ref.theme.font;
  return {
    background: '#fff',
    borderTop: '1px solid #e7eaec',
    color: ' #5f5f5f',
    display: 'flex',
    height: ' 40px',
    padding: '10px 20px',
    position: 'relative',
    zIndex: 1,
    fontSize: font.small,
    a: {
      color: '#2a8cde',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      display: 'inline-block',
      outline: 0,
      '&:hover': {
        color: '#1a63a2'
      },
      '&:focus': {
        color: '#1a63a2'
      }
    }
  };
}