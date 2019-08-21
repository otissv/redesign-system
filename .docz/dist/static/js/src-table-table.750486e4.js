;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    './src/AppBar/AppBar.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        r = n('./src/Base/Base.tsx'),
        i = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        b = function(e) {
          return {
            background: 'hsla(0,0%,0%,0.1)',
            border: '1px solid #0000',
            flex: 0,
            '&::placeholder': { color: e['grey-900'] },
            '&:hover': { background: 'hsla(0,0%,0%,0.2)' },
            '&:focus': { background: 'hsla(0,0%,0%,0.2)' },
            '&:active': { background: 'hsla(0,0%, 0%,0.2)' },
          }
        }
      function d(e) {
        var t = e.theme.color
        return {
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          flexShrink: 0,
          minHeight: '56px',
          position: 'relative',
          width: '100%',
          zIndex: '1100',
          backgroundColor: t.default,
          color: t.white,
          '>button.Button': {
            minHeight: 'inherit',
            border: '1px solid #0000',
            borderRadius: 0,
            '>svg.Icon': { paddingRight: 0 },
          },
          'input.Input': Object(i.a)({}, b(t), { color: t.foregroundInvert }),
        }
      }
      function s(e) {
        var t = e.appearance,
          n = e.theme.color,
          a = { 'input.Input': Object(i.a)({}, b(n), { color: n.wite }) }
        switch (t) {
          case 'action':
            return Object(i.a)(
              { backgroundColor: n.action, color: '#ffffff' },
              a
            )
          case 'accent':
            return Object(i.a)({ background: n.accent, color: '#ffffff' }, a)
          case 'danger':
            return Object(i.a)(
              { backgroundColor: n.danger, color: '#ffffff' },
              a
            )
          case 'success':
            return Object(i.a)(
              { backgroundColor: n.success, color: '#ffffff' },
              a
            )
          case 'warning':
            return Object(i.a)(
              { backgroundColor: n.warning, color: '#ffffff' },
              a
            )
          default:
            return {}
        }
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'appBarTheme',
            filename: 'src/AppBar/appBar.theme.ts',
          },
        }),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'appBarAppearanceTheme',
              filename: 'src/AppBar/appBar.theme.ts',
            },
          }),
        n.d(t, 'a', function() {
          return u
        })
      var u = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? '' : n,
          b = e.themed,
          u = void 0 === b ? [] : b,
          m = Object(o.a)(e, ['children', 'className', 'themed']),
          p = Object(l.useMemo)(
            function() {
              return 'AppBar '.concat(i)
            },
            [i]
          ),
          f = Object(l.useMemo)(
            function() {
              return [d, s].concat(Object(a.a)(u))
            },
            [d, s, u]
          )
        return c.a.createElement(
          r.b,
          Object.assign(
            { className: p, themed: f, 'aria-orientation': 'horizontal' },
            m
          ),
          t
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AppBar', filename: 'src/AppBar/AppBar.tsx' },
        })
      t.b = u
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AppBar', filename: 'src/AppBar/AppBar.tsx' },
        })
    },
    './src/AppBar/appBar.types.ts': function(e, t) {
      'undefined' !== typeof PositionType &&
        PositionType &&
        PositionType === Object(PositionType) &&
        Object.isExtensible(PositionType) &&
        Object.defineProperty(PositionType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'PositionType',
            filename: 'src/AppBar/appBar.types.ts',
          },
        }),
        'undefined' !== typeof AppBarInterface &&
          AppBarInterface &&
          AppBarInterface === Object(AppBarInterface) &&
          Object.isExtensible(AppBarInterface) &&
          Object.defineProperty(AppBarInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'AppBarInterface',
              filename: 'src/AppBar/appBar.types.ts',
            },
          })
    },
    './src/AppBar/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/AppBar/AppBar.tsx')
      n.d(t, 'AppBar', function() {
        return a.a
      })
      n('./src/AppBar/appBar.types.ts')
    },
    './src/ButtonIcon/ButtonIcon.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        )
      function i(e) {
        var t = e.dimension,
          n = e.theme,
          a = n.animation,
          o = n.unit
        return Object(r.a)(
          {
            position: 'relative',
            whiteSpace: 'nowrap',
            transition: a.easeFast(),
            lineHeight: 'inherit',
          },
          t ? { height: t, width: t, padding: 0 } : {},
          {
            '>svg.Icon': Object(r.a)(
              {},
              t ? { height: t, width: t } : { transform: 'translateY(4px)' }
            ),
            '>span.ButtonIconContent': {
              display: 'inline-block',
              paddingLeft: o[2],
            },
          }
        )
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonIconTheme',
            filename: 'src/ButtonIcon/buttonIcon.theme.ts',
          },
        })
      var b = n('./src/Button/Button.tsx')
      n.d(t, 'a', function() {
        return d
      })
      var d = c.a.memo(function(e) {
        var t = e.alt,
          n = e.children,
          r = e.className,
          d = void 0 === r ? '' : r,
          s = e.height,
          u = void 0 === s ? '24px' : s,
          m = e.icon,
          p = e.iconProps,
          f = e.onClick,
          j = e.themed,
          h = void 0 === j ? [] : j,
          O = (e.title, e.uid),
          x = e.viewBox,
          T = void 0 === x ? '0 0 24 24' : x,
          g = e.width,
          v = void 0 === g ? '24px' : g,
          y = Object(o.a)(e, [
            'alt',
            'children',
            'className',
            'height',
            'icon',
            'iconProps',
            'onClick',
            'themed',
            'title',
            'uid',
            'viewBox',
            'width',
          ]),
          _ = Object(l.useMemo)(
            function() {
              return 'ButtonIcon '.concat(d)
            },
            [d]
          ),
          C = Object(l.useMemo)(
            function() {
              return [i].concat(Object(a.a)(h))
            },
            [i, h]
          )
        return c.a.createElement(
          b.b,
          Object.assign(
            {
              className: _,
              'data-uid': O,
              onClick: f,
              themed: C,
              width: v,
              height: u,
              viewBox: T,
            },
            y
          ),
          c.a.createElement(m, Object.assign({ alt: t }, p)),
          n
            ? c.a.createElement('span', { className: 'ButtonIconContent' }, n)
            : null
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonIcon',
            filename: 'src/ButtonIcon/ButtonIcon.tsx',
          },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonIcon',
            filename: 'src/ButtonIcon/ButtonIcon.tsx',
          },
        })
    },
    './src/ButtonIcon/buttonIcon.types.ts': function(e, t) {
      'undefined' !== typeof ButtonIconInterface &&
        ButtonIconInterface &&
        ButtonIconInterface === Object(ButtonIconInterface) &&
        Object.isExtensible(ButtonIconInterface) &&
        Object.defineProperty(ButtonIconInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonIconInterface',
            filename: 'src/ButtonIcon/buttonIcon.types.ts',
          },
        })
    },
    './src/ButtonIcon/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/ButtonIcon/ButtonIcon.tsx')
      n.d(t, 'ButtonIcon', function() {
        return a.a
      })
      n('./src/ButtonIcon/buttonIcon.types.ts')
    },
    './src/Checkbox/Checkbox.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        r = n('./src/Base/index.tsx'),
        i = n('./node_modules/lodash/fp/upperFirst.js'),
        b = n.n(i)
      function d(e) {
        var t = e.appearance,
          n = e.color
        return n[t] || n.default
      }
      function s(e) {
        var t = e.appearance,
          n = e.theme,
          a = n.color,
          o = n.animation,
          l = n.border,
          c = n.unit
        return {
          position: 'relative',
          height: c[5],
          width: c[5],
          border: l['thick'.concat(b()(t))] || l.thin,
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-block',
          top: '5px',
          input: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            opacity: 0,
            cursor: 'inherit',
          },
          '.CheckboxBackground': {
            width: 'inherit',
            height: 'inherit',
            pointerEvents: 'none',
            position: 'relative',
            top: '-2px',
            left: '-2px',
          },
          '.CheckboxCheckmark': {
            strokeWidth: '3.12px',
            strokeDasharray: 29.7833385,
            opacity: 0,
            transform: 'scale(0)',
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'center center',
            transition: o.easeFast(),
          },
          '.CheckboxBackground, .CheckboxCheckmark': {
            transition: o.easeFast(),
          },
          'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
            background: d({ appearance: t, color: a }),
            '.CheckboxCheckmark': { opacity: 1, transform: 'scale(0.7)' },
          },
        }
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'checkboxTheme',
            filename: 'src/Checkbox/checkbox.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return u
        })
      var u = c.a.memo(function(e) {
        var t = e.checked,
          n = e.className,
          i = void 0 === n ? '' : n,
          b = e.id,
          d = e.name,
          u = e.onChange,
          m = e.themed,
          p = void 0 === m ? [] : m,
          f = Object(o.a)(e, [
            'checked',
            'className',
            'id',
            'name',
            'onChange',
            'themed',
          ]),
          j = Object(l.useMemo)(
            function() {
              return 'Checkbox '.concat(i)
            },
            [i]
          ),
          h = Object(l.useMemo)(
            function() {
              return [s].concat(Object(a.a)(p))
            },
            [s, p]
          ),
          O = Object(l.useMemo)(
            function() {
              return 'disabled' === f.appearance
            },
            [f.appearance]
          )
        return c.a.createElement(
          r.Base,
          Object.assign({ className: j, themed: h }, f),
          c.a.createElement('input', {
            checked: t,
            className: 'CheckboxInput',
            disabled: O,
            id: b,
            name: d,
            onChange: u,
            type: 'checkbox',
          }),
          c.a.createElement(
            'div',
            { className: 'CheckboxBackground' },
            c.a.createElement(
              'svg',
              { className: 'CheckboxCheckmark', viewBox: '0 0 24 24' },
              c.a.createElement('path', {
                className: 'mdc-checkbox__checkmark-path',
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              })
            )
          )
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
      t.b = u
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
    },
    './src/Checkbox/checkbox.types.ts': function(e, t) {
      'undefined' !== typeof CheckboxInterface &&
        CheckboxInterface &&
        CheckboxInterface === Object(CheckboxInterface) &&
        Object.isExtensible(CheckboxInterface) &&
        Object.defineProperty(CheckboxInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CheckboxInterface',
            filename: 'src/Checkbox/checkbox.types.ts',
          },
        })
    },
    './src/Checkbox/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/Checkbox/Checkbox.tsx')
      n.d(t, 'Checkbox', function() {
        return a.a
      })
      n('./src/Checkbox/checkbox.types.ts')
    },
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        r = n('./node_modules/lodash/kebabCase.js'),
        i = n.n(r)
      function b(e) {
        var t = e.alignItems,
          n = e.basis,
          a = e.display,
          o = e.grow,
          l = e.justifyContent,
          c = e.shrink,
          r = e.wrap
        return {
          display: a || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: o ? ''.concat(o) : '',
          shrink: c ? ''.concat(c) : '',
          justifyContent: (l && [i()(l)]) || '',
          alignItems: (t && [i()(t)]) || '',
          flexWrap: (r && [i()(r)]) || '',
        }
      }
      function d(e) {
        switch (e.direction) {
          case 'row':
            return { flexDirection: 'row' }
          case 'column':
            return { flexDirection: 'column' }
          case 'rowReverse':
            return { flexDirection: 'rowReverse' }
          case 'columnReverse':
            return { flexDirection: 'columnReverse' }
          default:
            return {}
        }
      }
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof d &&
          d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var s = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return u
      })
      var u = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          r = void 0 === n ? '' : n,
          i = e.themed,
          u = void 0 === i ? [] : i,
          m = Object(o.a)(e, ['children', 'className', 'themed']),
          p = Object(l.useMemo)(
            function() {
              return 'Flex '.concat(r)
            },
            [r]
          ),
          f = Object(l.useMemo)(
            function() {
              return [b, d].concat(Object(a.a)(u))
            },
            [b, d, u]
          )
        return c.a.createElement(
          s.Base,
          Object.assign({ className: p, themed: f }, m),
          t
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      t.b = u
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Icon/Icon.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c)
      function i(e) {
        var t = e.hoverColor
        return Object(a.a)(
          {
            display: 'inline-block',
            color: 'inherit',
            fill: 'currentcolor',
            height: 'auto',
            position: 'relative',
          },
          t && { '&:hover': { color: t } }
        )
      }
      function b(e) {
        var t = e.appearance,
          n = e.theme.color
        switch (t) {
          case 'accent':
            return { color: n.accent, '&:hover': { color: n.accent2 } }
          case 'action':
            return { color: n.action, '&:hover': { color: n.action2 } }
          case 'active':
            return { color: n.active, '&:hover': { color: n.active2 } }
          case 'danger':
          case 'error':
            return { color: n.danger, '&:hover': { color: n.danger2 } }
          case 'success':
            return { color: n.success, '&:hover': { color: n.success2 } }
          case 'warning':
            return { color: n.warning, '&:hover': { color: n.warning2 } }
          case 'disabled':
            return { color: n.disabled, '&:hover': { color: n.disabled2 } }
          default:
            return {}
        }
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'iconTheme', filename: 'src/Icon/icon.theme.ts' },
        }),
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'iconAppearanceTheme',
              filename: 'src/Icon/icon.theme.ts',
            },
          })
      var d = n('./src/Base/Base.tsx')
      n.d(t, 'a', function() {
        return s
      })
      var s = r.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          s = void 0 === n ? '' : n,
          u = e.height,
          m = void 0 === u ? '24px' : u,
          p = e.themed,
          f = void 0 === p ? [] : p,
          j = e.title,
          h = e.viewBox,
          O = void 0 === h ? '0 0 24 24' : h,
          x = e.width,
          T = void 0 === x ? '24px' : x,
          g = Object(l.a)(e, [
            'children',
            'className',
            'height',
            'themed',
            'title',
            'viewBox',
            'width',
          ]),
          v = Object(c.useMemo)(
            function() {
              return 'Icon '.concat(s)
            },
            [s]
          ),
          y = Object(c.useMemo)(
            function() {
              return [i, b].concat(Object(o.a)(f))
            },
            [i, b, f]
          ),
          _ = Object(a.a)({ height: m, viewBox: O, width: T }, g)
        return r.a.createElement(
          d.b,
          Object.assign(
            {
              as: 'svg',
              className: v,
              themed: y,
              xmlns: 'http://www.w3.org/2000/svg',
            },
            _
          ),
          j ? r.a.createElement('title', null, j) : null,
          t
        )
      })
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
    },
    './src/Icon/icon.types.ts': function(e, t) {
      'undefined' !== typeof IconInterface &&
        IconInterface &&
        IconInterface === Object(IconInterface) &&
        Object.isExtensible(IconInterface) &&
        Object.defineProperty(IconInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'IconInterface', filename: 'src/Icon/icon.types.ts' },
        })
    },
    './src/Icon/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/Icon/Icon.tsx')
      n.d(t, 'Icon', function() {
        return a.a
      })
      n('./src/Icon/icon.types.ts')
    },
    './src/MaterialIcons/CaretRight.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          Object.assign({ viewBox: '0 0 480 480' }, e),
          o.a.createElement('path', {
            id: 'path4',
            d: 'M 190,340 290,240 190,140 Z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CaretRight',
            filename: 'src/MaterialIcons/CaretRight.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CaretRight',
              filename: 'src/MaterialIcons/CaretRight.tsx',
            },
          })
    },
    './src/MaterialIcons/Code.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
          })
    },
    './src/MaterialIcons/Copy.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Copy', filename: 'src/MaterialIcons/Copy.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Copy', filename: 'src/MaterialIcons/Copy.tsx' },
          })
    },
    './src/MaterialIcons/Delete.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Delete', filename: 'src/MaterialIcons/Delete.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Delete', filename: 'src/MaterialIcons/Delete.tsx' },
          })
    },
    './src/MaterialIcons/Download.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'Download',
            filename: 'src/MaterialIcons/Download.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'Download',
              filename: 'src/MaterialIcons/Download.tsx',
            },
          })
    },
    './src/MaterialIcons/Edit.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Edit', filename: 'src/MaterialIcons/Edit.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Edit', filename: 'src/MaterialIcons/Edit.tsx' },
          })
    },
    './src/MaterialIcons/PlayCircle.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'PlayCircle',
            filename: 'src/MaterialIcons/PlayCircle.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'PlayCircle',
              filename: 'src/MaterialIcons/PlayCircle.tsx',
            },
          })
    },
    './src/MaterialIcons/Plus.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Plus', filename: 'src/MaterialIcons/Plus.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Plus', filename: 'src/MaterialIcons/Plus.tsx' },
          })
    },
    './src/MaterialIcons/ViewList.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        l = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          l.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ViewList',
            filename: 'src/MaterialIcons/ViewList.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ViewList',
              filename: 'src/MaterialIcons/ViewList.tsx',
            },
          })
    },
    './src/Table/table.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        l = n.n(o),
        c = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        r = n('./node_modules/docz/dist/index.esm.js'),
        i = n('./src/Flex/Flex.tsx'),
        b = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        d = n('./src/ThemeContext/ThemeProvider.tsx'),
        s = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        u = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        )
      function p(e, t, n) {
        var a = Object(o.useState)(t),
          l = Object(m.a)(a, 2),
          c = l[0],
          r = l[1],
          i =
            'sessionStorage' === n
              ? window.sessionStorage
              : window.localStorage,
          b = Object(o.useCallback)(
            function(t) {
              if (t !== c) {
                var n = JSON.stringify(t)
                return r(t), i.setItem(e, n)
              }
            },
            [e, c, i]
          ),
          d = Object(o.useCallback)(
            function() {
              r(void 0), i.removeItem(e)
            },
            [e, r, i]
          )
        return (
          Object(o.useEffect)(function() {
            var n = i.getItem(e),
              a = n ? JSON.parse(n) : n
            b(a || t)
          }, []),
          Object(o.useMemo)(
            function() {
              return { state: c, setItem: b, removeItem: d }
            },
            [c, b, d]
          )
        )
      }
      p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useCacheState',
            filename: 'src/reusable/cacheState/useCacheState.ts',
          },
        })
      var f = n('./src/Base/Base.tsx'),
        j = l.a.memo(function(e) {
          var t = e.items
          return l.a.createElement(
            'pre',
            null,
            l.a.createElement(
              'code',
              { className: 'language-javascript' },
              JSON.stringify(t, null, 2)
            )
          )
        })
      'undefined' !== typeof j &&
        j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      'undefined' !== typeof j &&
        j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      var h = n('./src/MaterialIcons/Copy.tsx'),
        O = n('./src/MaterialIcons/Delete.tsx'),
        x = n('./src/MaterialIcons/Edit.tsx'),
        T = n('./src/MaterialIcons/Download.tsx'),
        g = n('./src/ButtonIcon/index.ts'),
        v = l.a.memo(function(e) {
          var t = e.icon,
            n = e.uid,
            c = Object(a.a)(e, ['icon', 'uid']),
            r = Object(o.useMemo)(
              function() {
                return t
              },
              [t]
            )
          return l.a.createElement(
            g.ButtonIcon,
            Object.assign({ 'data-uid': n, icon: r }, c)
          )
        })
      function y(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(o.useMemo)(
            function() {
              return h.a
            },
            [h.a]
          )
        return l.a.createElement(
          v,
          Object.assign({ name: 'copy', onClick: t, icon: c, title: 'Copy' }, n)
        )
      }
      'undefined' !== typeof v &&
        v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        }),
        y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableCopyButton',
              filename: 'src/Table/TableButton.tsx',
            },
          })
      var _ = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(o.useMemo)(
            function() {
              return O.a
            },
            [O.a]
          )
        return l.a.createElement(
          v,
          Object.assign(
            { name: 'delete', onClick: t, icon: c, title: 'Delete' },
            n
          )
        )
      }
      _ &&
        _ === Object(_) &&
        Object.isExtensible(_) &&
        Object.defineProperty(_, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDeleteButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var C = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(o.useMemo)(
            function() {
              return T.a
            },
            [T.a]
          )
        return l.a.createElement(
          v,
          Object.assign(
            { name: 'Download', onClick: t, icon: c, title: 'Download' },
            n
          )
        )
      }
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDownloadButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var E = function(e) {
        var t = e.children,
          n = e.uid,
          c = Object(a.a)(e, ['children', 'uid']),
          r = Object(o.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return l.a.createElement(
          v,
          Object.assign(
            { as: 'a', name: 'Edit', icon: r, title: 'Edit', 'data-uid': n },
            c
          ),
          t
        )
      }
      E &&
        E === Object(E) &&
        Object.isExtensible(E) &&
        Object.defineProperty(E, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableEditLink',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      'undefined' !== typeof v &&
        v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        })
      var k = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        I = n('./src/Base/index.tsx'),
        P = n('./src/MaterialIcons/CaretRight.tsx')
      function w() {
        var e = Object(k.a)(['\n  ', '\n'])
        return (
          (w = function() {
            return e
          }),
          e
        )
      }
      var B = l.a.createContext({})
      function D() {
        return Object(o.useContext)(B)
      }
      function S(e) {
        var t = e.children,
          n = e.checked,
          c = void 0 !== n && n,
          r = e.expanded,
          i = void 0 !== r && r,
          b = e.tableName,
          d = e.data,
          m = Object(a.a)(e, [
            'children',
            'checked',
            'expanded',
            'tableName',
            'data',
          ]),
          f = p(''.concat(b, '_').concat(d[m.uidKey], '_checked'), c),
          j = f.state,
          h = f.setItem,
          O = p(''.concat(b, '_').concat(d[m.uidKey], '_expanded'), i),
          x = O.state,
          T = O.setItem
        Object(o.useEffect)(
          function() {
            h(c)
          },
          [c]
        ),
          Object(o.useEffect)(
            function() {
              T(i)
            },
            [i]
          )
        var g = l.a.useRef(function() {
            return null
          }),
          v = l.a.useRef(!1),
          y = Object(o.useMemo)(
            function() {
              return Array.isArray(t)
                ? t.reduce(function(e, t) {
                    return 'detail' === t.props.uid
                      ? ((g.current = function() {
                          return t
                        }),
                        (v.current = !0),
                        e)
                      : [].concat(Object(u.a)(e), [t])
                  }, [])
                : t
            },
            [t, g]
          ),
          _ = Object(o.useMemo)(
            function() {
              return Object(s.a)({}, m, {
                data: d,
                checked: j,
                expanded: x,
                setChecked: h,
                setExpanded: T,
              })
            },
            [j, h, x, T, m]
          )
        return l.a.createElement(
          B.Provider,
          { value: _ },
          l.a.createElement(
            'tr',
            null,
            v.current && l.a.createElement(A, { expanded: x, setExpanded: T }),
            y
          ),
          l.a.createElement(
            M,
            { expanded: x, colSpan: t.length },
            l.a.createElement(g.current, null)
          )
        )
      }
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableColumnContext',
            filename: 'src/Table/TableColumnContext.tsx',
          },
        }),
        D &&
          D === Object(D) &&
          Object.isExtensible(D) &&
          Object.defineProperty(D, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableColumn',
              filename: 'src/Table/TableColumnContext.tsx',
            },
          }),
        S &&
          S === Object(S) &&
          Object.isExtensible(S) &&
          Object.defineProperty(S, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableColumnProvider',
              filename: 'src/Table/TableColumnContext.tsx',
            },
          })
      var M = l.a.memo(function(e) {
          var t = e.children,
            n = e.colSpan,
            a = e.expanded,
            c = Object(o.useMemo)(function() {
              return {
                expanded: {
                  height: 'auto',
                  opacity: 1,
                  delay: 100,
                  applyAtStart: { display: 'block' },
                },
                collapsed: {
                  height: 0,
                  opacity: 0,
                  delay: 300,
                  applyAtEnd: { display: 'none' },
                },
              }
            }, [])
          return l.a.createElement(
            'tr',
            {
              className: 'RowDetail',
              style: { display: a ? 'table-row' : 'none' },
            },
            l.a.createElement(
              'td',
              { colSpan: n },
              l.a.createElement(
                I.Base,
                { animate: c, state: a ? 'expanded' : 'collapsed', as: 'div' },
                t
              )
            )
          )
        }),
        R = b.default.button(w(), function(e) {
          var t = e.expanded
          return '\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 30px;\n  margin: 3px;\n  outline: none;\n  padding-right: 0;\n  text-align: left;\n  transform: rotate('.concat(
            t ? '45deg' : '0deg',
            ');\n  transition: all 0.2s ease;\n\n  &:hover,\n  &:active {\n    background: none;\n    border-bottom: #0000;\n  }\n'
          )
        }),
        A = l.a.memo(function(e) {
          var t = e.expanded,
            n = e.setExpanded,
            o = Object(a.a)(e, ['expanded', 'setExpanded']),
            c = l.a.useCallback(
              function(e) {
                e.preventDefault(), n(!t)
              },
              [n, t]
            )
          return l.a.createElement(
            'td',
            Object.assign({}, o, {
              className: 'RowIndicator',
              style: { padding: 0, width: '50px' },
            }),
            l.a.createElement(
              R,
              { onClick: c, expanded: t },
              l.a.createElement(P.a, { alt: 'indicator' })
            )
          )
        }),
        N = l.a.memo(function(e) {
          var t = e.baseRoute,
            n = void 0 === t ? '' : t,
            c = e.children,
            r = e.data,
            i = e.dispatch,
            b = e.onAdd,
            d = e.onDeleteSelected,
            s = e.itemsToArray,
            u = e.loading,
            m = e.onRowClick,
            p = (e.rows, e.selected),
            f = e.tableName,
            j = e.uidKey,
            h = void 0 === j ? 'id' : j,
            O = Object(a.a)(e, [
              'baseRoute',
              'children',
              'data',
              'dispatch',
              'onAdd',
              'onDeleteSelected',
              'itemsToArray',
              'loading',
              'onRowClick',
              'rows',
              'selected',
              'tableName',
              'uidKey',
            ]),
            x = Object(o.useCallback)(
              function(e) {
                i({
                  type: 'TOGGLE_SELECTED_ITEMS',
                  selected: [e.currentTarget.name],
                })
              },
              [i]
            ),
            T = Object(o.useCallback)(function(e) {
              e.preventDefault()
            }, []),
            g = Object(o.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                m && m(e, t)
              },
              [m]
            ),
            v = Object(o.useMemo)(
              function() {
                return {
                  Copy: function(e) {
                    return l.a.createElement(y, e)
                  },
                  Edit: function(e) {
                    return l.a.createElement(
                      E,
                      Object.assign({}, e, { href: ''.concat(n, '/edit') })
                    )
                  },
                  Delete: function(e) {
                    return l.a.createElement(
                      _,
                      Object.assign({ onClick: T }, e)
                    )
                  },
                  Download: function(e) {
                    return l.a.createElement(C, e)
                  },
                  dispatch: i,
                  itemsToArray: s,
                  loading: u,
                  onAdd: b,
                  onChange: x,
                  onDelete: T,
                  onDeleteSelected: d,
                  onRowClick: g,
                  selected: p,
                }
              },
              [y, _, C, E, i, x, T, g, s, u, b, d, p]
            ),
            k = Object(o.useMemo)(
              function() {
                return r.map(function(e, t) {
                  return l.a.createElement(
                    S,
                    Object.assign(
                      {
                        key: e[h],
                        data: e,
                        checked: p.includes(e[h]),
                        index: t,
                        tableName: f,
                        uidKey: h,
                      },
                      v
                    ),
                    c
                  )
                })
              },
              [c, r, v, h, p, f]
            )
          return l.a.createElement(
            'tbody',
            Object.assign({ className: 'TableBody' }, O),
            k
          )
        })
      'undefined' !== typeof N &&
        N &&
        N === Object(N) &&
        Object.isExtensible(N) &&
        Object.defineProperty(N, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var H = N
      'undefined' !== typeof N &&
        N &&
        N === Object(N) &&
        Object.isExtensible(N) &&
        Object.defineProperty(N, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var V = l.a.createContext({})
      function z() {
        return Object(o.useContext)(V)
      }
      function L(e) {
        var t = e.allSelected,
          n = void 0 !== t && t,
          a = e.children,
          c = e.data,
          r = e.onAllSelectedChange,
          i = Object(o.useMemo)(
            function() {
              return { allSelected: n, data: c, onAllSelectedChange: r }
            },
            [n, r]
          )
        return l.a.createElement(V.Provider, { value: i }, a)
      }
      'undefined' !== typeof V &&
        V &&
        V === Object(V) &&
        Object.isExtensible(V) &&
        Object.defineProperty(V, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableHeadingsContext',
            filename: 'src/Table/TableHeadingsContext.tsx',
          },
        }),
        z &&
          z === Object(z) &&
          Object.isExtensible(z) &&
          Object.defineProperty(z, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableHeading',
              filename: 'src/Table/TableHeadingsContext.tsx',
            },
          }),
        L &&
          L === Object(L) &&
          Object.isExtensible(L) &&
          Object.defineProperty(L, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableHeadingsProvider',
              filename: 'src/Table/TableHeadingsContext.tsx',
            },
          })
      var F = l.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          c = void 0 === n ? '' : n,
          r = e.children,
          i = void 0 === r ? [] : r,
          b = e.data,
          d = e.dispatch,
          s = e.itemsToArray,
          m = e.loading,
          p = e.onAdd,
          f = e.onAllSelectedChange,
          j = e.onDeleteSelected,
          h = e.selected,
          O = e.tableName,
          x = Object(a.a)(e, [
            'allSelected',
            'baseRoute',
            'children',
            'data',
            'dispatch',
            'itemsToArray',
            'loading',
            'onAdd',
            'onAllSelectedChange',
            'onDeleteSelected',
            'selected',
            'tableName',
          ]),
          T = Object(o.useCallback)(
            function() {
              return Array.isArray(i)
                ? i.reduce(function(e, t, n) {
                    var a = t.props,
                      o = a.heading
                    return 'detail' === a.uid
                      ? [l.a.createElement('th', { key: n })].concat(
                          Object(u.a)(e)
                        )
                      : [].concat(Object(u.a)(e), [
                          l.a.createElement('th', { key: n }, o),
                        ])
                  }, [])
                : 'detail' === i.props.uid
                ? l.a.createElement('th', null)
                : l.a.createElement('th', null, i.props.heading)
            },
            [i]
          ),
          g = Object(o.useMemo)(
            function() {
              return l.a.createElement(
                'thead',
                null,
                l.a.createElement('tr', null, T())
              )
            },
            [i]
          )
        return l.a.createElement(
          o.Fragment,
          null,
          l.a.createElement(
            L,
            { allSelected: t, data: b, onAllSelectedChange: f },
            g,
            l.a.createElement(
              H,
              Object.assign(
                {
                  baseRoute: c,
                  className: 'TableView',
                  dispatch: d,
                  onAdd: p,
                  onDeleteSelected: j,
                  tableName: O,
                  loading: m,
                  selected: h,
                  itemsToArray: s,
                  data: b,
                },
                x
              ),
              i
            )
          )
        )
      })
      'undefined' !== typeof F &&
        F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      'undefined' !== typeof F &&
        F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      var J = n(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function K(e) {
        return { height: e.height || '100%', overflow: 'auto' }
      }
      function W(e) {
        var t = e.condensed,
          n = e.hover,
          a = e.theme,
          o = a.animation,
          l = a.border,
          c = a.color,
          r = a.elevate,
          i = a.unit
        return {
          borderCollapse: 'collapse',
          transition: o.easeMedium(),
          'td, th': {
            lineHeight: t ? 2 : 2.5,
            padding: 0,
            '&:first-child': { paddingLeft: i[4] },
            '&:last-child': { paddingRight: i[4] },
          },
          td: { borderTop: l.thin },
          'tr:hover': {
            background: n ? c['background-600'] : '',
            boxShadow: n ? r[2] : '',
          },
          '.TableView': {
            '.RowDetail >td': { padding: '0 0 '.concat(i[7], ' 0') },
          },
          a: {
            background: 'none',
            display: 'block',
            height: '100%',
            marginRight: '3px',
            border: l.thinTransparent,
          },
          'a:hover, a:active': {
            background: 'none',
            border: l.thinTransparent,
            color: c.link,
          },
        }
      }
      function G(e) {
        return Object(J.a)(e.theme), { height: 0, visibility: 'hidden' }
      }
      function X(e) {
        return Object(J.a)(e.theme), { display: 'flex', marginLeft: 'auto' }
      }
      function Y(e) {
        var t = e.theme.unit
        return { padding: ''.concat(t[2], ' 0') }
      }
      function Z(e) {
        var t = e.theme,
          n = t.color,
          a = t.unit
        return {
          background: n.active,
          padding: ''.concat(a[2], ' ').concat(a[4]),
        }
      }
      K &&
        K === Object(K) &&
        Object.isExtensible(K) &&
        Object.defineProperty(K, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'tableContainerTheme',
            filename: 'src/Table/table.theme.ts',
          },
        }),
        'undefined' !== typeof W &&
          W &&
          W === Object(W) &&
          Object.isExtensible(W) &&
          Object.defineProperty(W, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'tableTheme', filename: 'src/Table/table.theme.ts' },
          }),
        'undefined' !== typeof G &&
          G &&
          G === Object(G) &&
          Object.isExtensible(G) &&
          Object.defineProperty(G, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableCaptionTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof X &&
          X &&
          X === Object(X) &&
          Object.isExtensible(X) &&
          Object.defineProperty(X, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableViewsButtonTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        Y &&
          Y === Object(Y) &&
          Object.isExtensible(Y) &&
          Object.defineProperty(Y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof Z &&
          Z &&
          Z === Object(Z) &&
          Object.isExtensible(Z) &&
          Object.defineProperty(Z, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableSelectedToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          })
      var q = function(e) {
        var t = e.children,
          n = e.className,
          c = e.themed,
          r = Object(a.a)(e, ['children', 'className', 'themed']),
          i = Object(o.useMemo)(
            function() {
              return 'TableCaption '.concat(n)
            },
            [n]
          ),
          b = Object(o.useMemo)(
            function() {
              return [G].concat(Object(u.a)(c))
            },
            [G, c]
          )
        return l.a.createElement(
          f.b,
          Object.assign({ as: 'caption', className: i, themed: b }, r),
          t
        )
      }
      q &&
        q === Object(q) &&
        Object.isExtensible(q) &&
        Object.defineProperty(q, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        }),
        (q.defaultProps = { className: '', themed: [] })
      q &&
        q === Object(q) &&
        Object.isExtensible(q) &&
        Object.defineProperty(q, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        })
      var Q = n('./src/ButtonIcon/ButtonIcon.tsx'),
        U = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            c = Object(o.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(o.useMemo)(
              function() {
                return O.a
              },
              [O.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'delete',
                appearance: 'active',
                uid: 'delete',
                onClick: c,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Delete'
          )
        }
      U &&
        U === Object(U) &&
        Object.isExtensible(U) &&
        Object.defineProperty(U, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      U &&
        U === Object(U) &&
        Object.isExtensible(U) &&
        Object.defineProperty(U, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      var $ = n('./src/Toolbar/Toolbar.tsx')
      function ee() {
        var e = Object(k.a)(['\n  display: inline-block;\n'])
        return (
          (ee = function() {
            return e
          }),
          e
        )
      }
      var te = b.default.span(ee()),
        ne = l.a.memo(function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            c = e.selected,
            r = e.handleDeleteSelected,
            i = e.themed,
            b = void 0 === i ? [] : i,
            d = Object(a.a)(e, [
              'className',
              'selected',
              'handleDeleteSelected',
              'themed',
            ]),
            s = Object(o.useMemo)(
              function() {
                return 'TableSelectToolbar '.concat(n)
              },
              [n]
            ),
            m = Object(o.useMemo)(
              function() {
                return [Z].concat(Object(u.a)(b))
              },
              [Z, b]
            )
          return l.a.createElement(
            $.a,
            Object.assign({ className: s, themed: m }, d),
            l.a.createElement(te, null, c, ' selected '),
            l.a.createElement(U, {
              alt: 'delete',
              onClick: r,
              title: 'Delete Collection',
            })
          )
        })
      'undefined' !== typeof ne &&
        ne &&
        ne === Object(ne) &&
        Object.isExtensible(ne) &&
        Object.defineProperty(ne, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'SelectToolbar',
            filename: 'src/Table/SelectToolbar.tsx',
          },
        })
      var ae = n('./src/MaterialIcons/Plus.tsx'),
        oe = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            c = Object(o.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(o.useMemo)(
              function() {
                return ae.a
              },
              [ae.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                as: 'a',
                alt: 'add',
                appearance: 'active',
                uid: 'add',
                onClick: c,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Add'
          )
        }
      oe &&
        oe === Object(oe) &&
        Object.isExtensible(oe) &&
        Object.defineProperty(oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      oe &&
        oe === Object(oe) &&
        Object.isExtensible(oe) &&
        Object.defineProperty(oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      var le = n('./node_modules/react-copy-to-clipboard/lib/index.js'),
        ce = function(e) {
          var t = e.data,
            n = e.onClick,
            c = Object(a.a)(e, ['data', 'onClick']),
            r = Object(o.useMemo)(
              function() {
                return 'string' === typeof t ? t : JSON.stringify(t, null, 2)
              },
              [t]
            ),
            i = Object(o.useCallback)(
              function(e) {
                e.preventDefault(), n && n(e)
              },
              [n]
            ),
            b = Object(o.useMemo)(
              function() {
                return h.a
              },
              [h.a]
            )
          return l.a.createElement(
            le.CopyToClipboard,
            { text: r, copy: i },
            l.a.createElement(
              Q.b,
              Object.assign(
                {
                  alt: 'copy',
                  appearance: 'active',
                  uid: 'copy',
                  icon: b,
                  css:
                    '\n          svg.Icon {\n            padding-right: 5px;\n          }\n        ',
                },
                c
              ),
              'Copy'
            )
          )
        }
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      var re = n('./node_modules/js-file-download/file-download.js'),
        ie = n.n(re),
        be = function(e) {
          var t = e.onClick,
            n = e.data,
            c = e.fileName,
            r = Object(a.a)(e, ['onClick', 'data', 'fileName']),
            i = Object(o.useMemo)(
              function() {
                return 'string' === typeof n ? n : JSON.stringify(n, null, 2)
              },
              [n]
            ),
            b = Object(o.useCallback)(
              function(e) {
                e.preventDefault(), i && ie()(i, c), t && t(e)
              },
              [t]
            ),
            d = Object(o.useMemo)(
              function() {
                return T.a
              },
              [T.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'download',
                appearance: 'active',
                uid: 'delete',
                onClick: b,
                icon: d,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              r
            ),
            'Download'
          )
        }
      be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      var de = function(e) {
        var t = e.onClick,
          n = Object(a.a)(e, ['onClick']),
          c = Object(o.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          r = Object(o.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return l.a.createElement(
          Q.b,
          Object.assign(
            {
              as: 'a',
              alt: 'edit',
              appearance: 'active',
              uid: 'edit',
              onClick: c,
              icon: r,
              css:
                '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
            },
            n
          ),
          'Edit'
        )
      }
      de &&
        de === Object(de) &&
        Object.isExtensible(de) &&
        Object.defineProperty(de, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      de &&
        de === Object(de) &&
        Object.isExtensible(de) &&
        Object.defineProperty(de, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      var se = n('./src/MaterialIcons/PlayCircle.tsx'),
        ue = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            c = Object(o.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(o.useMemo)(
              function() {
                return se.a
              },
              [se.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'execute',
                appearance: 'active',
                uid: 'execute',
                onClick: c,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Run'
          )
        }
      ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      var me = n('./src/ButtonGroup/ButtonGroup.tsx'),
        pe = n('./src/MaterialIcons/Code.tsx'),
        fe = n('./src/MaterialIcons/ViewList.tsx'),
        je = function(e) {
          var t = e.className,
            n = e.currentView,
            c = e.onClick,
            r = e.themed,
            i = Object(a.a)(e, [
              'className',
              'currentView',
              'onClick',
              'themed',
            ]),
            b = Object(o.useMemo)(
              function() {
                return 'ToolbarViewsButton '.concat(t)
              },
              [t]
            ),
            d = Object(o.useMemo)(
              function() {
                return [X].concat(Object(u.a)(r))
              },
              [X, r]
            ),
            s = Object(o.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                c && c(e, { id: t })
              },
              [c]
            ),
            m = Object(o.useCallback)(
              function(e) {
                return n === e ? 'border-bottom: 1px solid #fff;' : ''
              },
              [n]
            ),
            p = Object(o.useMemo)(
              function() {
                return fe.a
              },
              [fe.a]
            ),
            f = Object(o.useMemo)(
              function() {
                return pe.a
              },
              [pe.a]
            )
          return l.a.createElement(
            I.Base,
            Object.assign({ className: b, themed: d }, i),
            l.a.createElement(
              me.b,
              null,
              l.a.createElement(
                Q.b,
                {
                  alt: 'Tabular',
                  appearance: 'active',
                  icon: p,
                  onClick: s,
                  styled: m('table'),
                  title: 'Table',
                  uid: 'table',
                  css:
                    '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
                },
                'Tabular'
              ),
              l.a.createElement(
                Q.b,
                {
                  Json: !0,
                  alt: 'json',
                  appearance: 'secondary',
                  icon: f,
                  onClick: s,
                  styled: m('json'),
                  title: 'JSON',
                  uid: 'json',
                  css:
                    '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
                },
                'JSON'
              )
            )
          )
        }
      je &&
        je === Object(je) &&
        Object.isExtensible(je) &&
        Object.defineProperty(je, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        }),
        (je.defaultProps = { className: '', themed: [] })
      je &&
        je === Object(je) &&
        Object.isExtensible(je) &&
        Object.defineProperty(je, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        })
      var he = l.a.memo(function(e) {
        var t = e.baseRoute,
          n = e.items,
          a = e.onDeleteSelected,
          c = e.onSwitchView,
          r = e.currentView,
          i = e.data,
          b = e.onAdd,
          d = e.onCopy,
          s = e.onDelete,
          u = e.onDownload,
          m = e.onEdit,
          p = e.onExecute,
          f = e.toolbar,
          j = function(e) {
            switch (e) {
              case 'add':
                return l.a.createElement(oe, {
                  alt: 'add',
                  key: 'add',
                  onClick: b,
                  href: '/'.concat(t, '/new'),
                })
              case 'copy':
                return l.a.createElement(ce, {
                  alt: 'copy',
                  key: 'copy',
                  data: i,
                  onClick: d,
                })
              case 'edit':
                return l.a.createElement(de, {
                  alt: 'edit',
                  key: 'edit',
                  onClick: m,
                  href: '/'.concat(t, '/edit'),
                })
              case 'delete':
                return l.a.createElement(U, {
                  alt: 'delete',
                  key: 'delete',
                  onClick: s,
                  title: 'Delete',
                })
              case 'download':
                return l.a.createElement(be, {
                  alt: 'download',
                  key: 'download',
                  data: i,
                  onClick: u,
                  fileName: 'guru_download.json',
                })
              case 'execute':
                return l.a.createElement(ue, {
                  alt: 'execute',
                  key: 'execute',
                  onClick: p,
                  title: 'Execute',
                })
              case 'views':
                return l.a.createElement(je, {
                  key: 'views',
                  onClick: c,
                  currentView: r,
                })
              default:
                return null
            }
          },
          h = Object(o.useMemo)(
            function() {
              return l.a.createElement(
                o.Fragment,
                null,
                f.map(function(e) {
                  return 'function' === typeof e
                    ? e({ onSwitchView: c, currentView: r, onAdd: b })
                    : j(e)
                })
              )
            },
            [j, r, b, c, f]
          ),
          O = Object(o.useCallback)(
            function(e) {
              e.preventDefault(), a && a(e)
            },
            [a]
          ),
          x = Object(o.useMemo)(
            function() {
              return [Y]
            },
            [Y]
          )
        return n.length > 0
          ? l.a.createElement(ne, {
              selected: n.length,
              handleDeleteSelected: O,
            })
          : l.a.createElement(
              $.a,
              {
                className: 'TableToolbar',
                baseRoute: t,
                onSwitchView: c,
                borderBottom: 'thin',
                paddingBottom: 2,
                themed: x,
              },
              h
            )
      })
      'undefined' !== typeof he &&
        he &&
        he === Object(he) &&
        Object.isExtensible(he) &&
        Object.defineProperty(he, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableToolbar',
            filename: 'src/Table/TableToolbar.tsx',
          },
        })
      var Oe = l.a.memo(function(e) {
        var t = e.baseRoute,
          n = void 0 === t ? '' : t,
          c = e.caption,
          r = e.children,
          i = e.className,
          b = void 0 === i ? '' : i,
          d = e.condensed,
          m = e.height,
          h = e.hook,
          O = e.hover,
          x = e.initialValue,
          T = e.name,
          g = (e.numbered, e.onAdd),
          v = e.onCopy,
          y = e.onDelete,
          _ = e.onDeleteSelected,
          C = e.onDownload,
          E = e.onEdit,
          k = e.onExecute,
          I = e.onRowClick,
          P = e.themed,
          w = void 0 === P ? [] : P,
          B = e.toolbar,
          D = void 0 === B ? [] : B,
          S = e.uidKey,
          M = Object(a.a)(e, [
            'baseRoute',
            'caption',
            'children',
            'className',
            'condensed',
            'height',
            'hook',
            'hover',
            'initialValue',
            'name',
            'numbered',
            'onAdd',
            'onCopy',
            'onDelete',
            'onDeleteSelected',
            'onDownload',
            'onEdit',
            'onExecute',
            'onRowClick',
            'themed',
            'toolbar',
            'uidKey',
          ]),
          R = Object(o.useMemo)(
            function() {
              return 'TableContainer '.concat(b)
            },
            [b]
          ),
          A = Object(o.useMemo)(
            function() {
              return [W].concat(Object(u.a)(w))
            },
            [W, w]
          ),
          N = h(),
          H = N.loading,
          V = N.selected,
          z = N.dispatch,
          L = N.itemsToArray,
          J = N.items,
          G = Object(o.useMemo)(
            function() {
              return J
            },
            [J]
          ),
          X = Object(o.useMemo)(
            function() {
              return x || L()
            },
            [x, L]
          )
        Object(o.useEffect)(
          function() {
            Z({ type: 'SET_ITEM_LIST', itemList: X })
          },
          [X]
        )
        var Y = Object(o.useCallback)(function(e, t) {
            switch (t.type) {
              case 'SET_ITEM_LIST':
                return Object(s.a)({}, e, { itemList: t.itemList })
              case 'SET_VARIABLES':
                return Object(s.a)({}, e, { variables: t.variables })
              default:
                return e
            }
          }, []),
          Z = Object(o.useReducer)(Y, { variables: {}, itemList: [] })[1],
          Q = p(''.concat(T, '_Table'), 'table'),
          U = Q.state,
          $ = Q.setItem,
          ee = Object(o.useCallback)(
            function(e) {
              e.preventDefault(), g && g(e)
            },
            [g]
          ),
          te = Object(o.useCallback)(
            function(e) {
              e.preventDefault(), y && y(e)
            },
            [y]
          ),
          ae = Object(o.useCallback)(
            function(e) {
              e.preventDefault(),
                window.confirm(
                  'Delete selected items?\n'.concat(V.join('\n'))
                ) &&
                  _ &&
                  _(e)
            },
            [_]
          ),
          oe = Object(o.useCallback)(
            function(e) {
              e.preventDefault(), E && E(e)
            },
            [E]
          ),
          le = Object(o.useCallback)(
            function(e) {
              e.preventDefault(),
                k().then(function(e) {
                  e && Z({ type: 'SET_ITEM_LIST', itemList: e })
                })
            },
            [Z, k]
          ),
          ce = Object(o.useCallback)(
            function(e, t) {
              var n = t.id
              e.preventDefault(), n !== U && $(n)
            },
            [$]
          ),
          re = p(
            ''.concat(T, '_allSelected'),
            0 !== V.length && V.length === X.length
          ),
          ie = re.state,
          be = re.setItem
        Object(o.useEffect)(
          function() {
            be(0 !== V.length && V.length === X.length)
          },
          [X, V]
        )
        var de = l.a.useCallback(
          function(e) {
            var t = e.currentTarget.checked
              ? X.map(function(e) {
                  return e[S]
                })
              : []
            z({ type: 'SET_SELECTED', selected: t })
          },
          [z, X, S]
        )
        return l.a.createElement(
          o.Fragment,
          null,
          D.length > 0
            ? l.a.createElement(he, {
                baseRoute: n,
                borderBottom: 'thin',
                currentView: U,
                data: X,
                items: V,
                onAdd: ee,
                onCopy: v,
                onDelete: te,
                onDeleteSelected: ae,
                onDownload: C,
                onEdit: oe,
                onExecute: le,
                onSwitchView: ce,
                paddingBottom: 2,
                selectToolbar: ne,
                toolbar: D,
              })
            : null,
          'table' === U
            ? l.a.createElement(
                f.b,
                Object.assign({ className: R, themed: [K], height: m }, M),
                l.a.createElement(
                  f.b,
                  {
                    as: 'table',
                    className: 'Table',
                    themed: A,
                    condensed: d,
                    hover: O,
                  },
                  c ? l.a.createElement(q, null, c) : null,
                  l.a.createElement(
                    F,
                    {
                      allSelected: ie,
                      baseRoute: n,
                      data: X,
                      dispatch: z,
                      itemsToArray: L,
                      loading: H,
                      onAdd: ee,
                      onAllSelectedChange: de,
                      onDeleteSelected: ae,
                      onRowClick: I,
                      selected: V,
                      tableName: T,
                      uidKey: S,
                    },
                    r
                  )
                )
              )
            : l.a.createElement(
                f.b,
                Object.assign({ className: R, themed: [K], height: m }, M),
                l.a.createElement(j, { items: G })
              )
        )
      })
      'undefined' !== typeof Oe &&
        Oe &&
        Oe === Object(Oe) &&
        Object.isExtensible(Oe) &&
        Object.defineProperty(Oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      'undefined' !== typeof Oe &&
        Oe &&
        Oe === Object(Oe) &&
        Object.isExtensible(Oe) &&
        Object.defineProperty(Oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      var xe = n('./src/reusable/collectionHash/index.ts'),
        Te = Object(u.a)(new Array(100))
      function ge() {
        var e = {
            uid: 'id',
            items: Te.map(function(e, t) {
              return {
                id: 'id_'.concat(t),
                name: 'Project '.concat(t),
                endpoint: 'http://project'.concat(t, '.com'),
                ip: '0.0.0.'.concat(t),
                repo: 'repo'.concat(t),
                port: ''.concat(t, '000'),
              }
            }),
          },
          t = Object(xe.useCollectionHashReducer)(e),
          n = Object(m.a)(t, 2),
          a = n[0],
          l = n[1]
        return Object(o.useMemo)(
          function() {
            return Object(s.a)({}, a, {
              dispatch: l,
              itemsToArray: function() {
                return Object(xe.itemsToArray)(a.items)
              },
            })
          },
          [a, l]
        )
      }
      ge &&
        ge === Object(ge) &&
        Object.isExtensible(ge) &&
        Object.defineProperty(ge, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'useTable', filename: 'src/Table/table.example.tsx' },
        })
      var ve = n('./src/Checkbox/index.ts'),
        ye = function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            o = Object(a.a)(e, ['className']),
            c = 'TableRowSelect '.concat(n),
            r = D(),
            i = r.checked,
            b = r.data,
            d = r.onChange,
            s = r.setChecked,
            u = b[r.uidKey]
          return l.a.createElement(
            'td',
            { className: c },
            l.a.createElement(
              ve.Checkbox,
              Object.assign(
                {
                  checked: i,
                  onChange: function(e) {
                    s(e.currentTarget.checked), d && d(e)
                  },
                  name: u,
                },
                o
              )
            )
          )
        }
      'undefined' !== typeof ye &&
        ye &&
        ye === Object(ye) &&
        Object.isExtensible(ye) &&
        Object.defineProperty(ye, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      'undefined' !== typeof ye &&
        ye &&
        ye === Object(ye) &&
        Object.isExtensible(ye) &&
        Object.defineProperty(ye, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      var _e = l.a.memo(function(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          c = Object(a.a)(e, ['className']),
          r = 'AllSelectedHeading '.concat(n),
          i = z(),
          b = i.allSelected,
          d = i.onAllSelectedChange,
          s = Object(o.useCallback)(
            function(e) {
              d && d(e)
            },
            [d]
          )
        return l.a.createElement(
          ve.Checkbox,
          Object.assign(
            { className: r, checked: b, name: 'allSelected', onChange: s },
            c
          )
        )
      })
      'undefined' !== typeof _e &&
        _e &&
        _e === Object(_e) &&
        Object.isExtensible(_e) &&
        Object.defineProperty(_e, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        })
      function Ce(e) {
        var t = e.children,
          n = e.prop,
          c = e.uid,
          r = Object(a.a)(e, ['children', 'prop', 'uid']),
          i = D(),
          b = i.data,
          d = i.index,
          u = Object(o.useMemo)(
            function() {
              return 'function' === typeof t
                ? l.a.createElement(
                    'td',
                    { 'data-uid': c },
                    t(
                      Object(s.a)({ data: b, prop: n, uid: c }, r, { index: d })
                    )
                  )
                : t
            },
            [t, b, d, n, c, r]
          )
        return l.a.createElement(
          l.a.Fragment,
          null,
          u ||
            l.a.createElement(
              I.Base,
              Object.assign({ as: 'td', uid: c }, r),
              '__index' === n ? d : b[n]
            )
        )
      }
      function Ee(e) {
        var t = e.children,
          n = Object(a.a)(e, ['children']),
          c = D(),
          r = c.data,
          i = c.index,
          b = l.a.cloneElement(t, Object(s.a)({ data: r }, n, { index: i }))
        return Object(o.useMemo)(
          function() {
            return 'function' === typeof t
              ? t(Object(s.a)({ data: r }, n, { index: i }))
              : b
          },
          [t, b, r, i, n]
        )
      }
      'undefined' !== typeof _e &&
        _e &&
        _e === Object(_e) &&
        Object.isExtensible(_e) &&
        Object.defineProperty(_e, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        }),
        Ce &&
          Ce === Object(Ce) &&
          Object.isExtensible(Ce) &&
          Object.defineProperty(Ce, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableColumn',
              filename: 'src/Table/TableColumn.tsx',
            },
          }),
        Ee &&
          Ee === Object(Ee) &&
          Object.isExtensible(Ee) &&
          Object.defineProperty(Ee, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableRowDetail',
              filename: 'src/Table/TableRowDetail.tsx',
            },
          }),
        n.d(t, 'default', function() {
          return Pe
        })
      var ke = {},
        Ie = 'wrapper'
      function Pe(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components'])
        return Object(c.b)(
          Ie,
          Object.assign({}, ke, n, { components: t, mdxType: 'MDXLayout' }),
          Object(c.b)('h1', { id: 'table' }, 'Table'),
          Object(c.b)('h2', { id: 'properties' }, 'Properties'),
          Object(c.b)(r.d, { of: Oe, mdxType: 'Props' }),
          Object(c.b)('h2', { id: 'default' }, 'Default'),
          Object(c.b)(
            r.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableDeafult"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n    uidKey="id"\n  >\n    <TableColumn uid="select" heading={<AllSelectedHeading />}>\n      <TableRowSelect />\n    </TableColumn>\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableDeafult',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ge,
                  uidKey: 'id',
                  mdxType: 'Table',
                },
                Object(c.b)(
                  Ce,
                  {
                    uid: 'select',
                    heading: Object(c.b)(_e, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(c.b)(ye, { mdxType: 'TableRowSelect' })
                ),
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'selectable' }, 'Selectable'),
          Object(c.b)(
            r.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Table height="250px" name="TableSelect" selectable hook={useTable}>\n    <TableColumn uid="select" heading={<AllSelectedHeading />}>\n      <TableRowSelect />\n    </TableColumn>\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableSelect',
                  selectable: !0,
                  hook: ge,
                  mdxType: 'Table',
                },
                Object(c.b)(
                  Ce,
                  {
                    uid: 'select',
                    heading: Object(c.b)(_e, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(c.b)(ye, { mdxType: 'TableRowSelect' })
                ),
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'hover' }, 'Hover'),
          Object(c.b)(
            r.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableHover"\n    hover\n    headings={[\'ID\', \'Name\', \'Endpoint\']}\n    hook={useTable}\n  >\n    <TableColumn heading="ID" uid="id" prop="id" />\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableHover',
                  hover: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ge,
                  mdxType: 'Table',
                },
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'condensed' }, 'Condensed'),
          Object(c.b)(
            r.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableCondensed"\n    condensed\n    headings={[\'ID\', \'Name\', \'Endpoint\']}\n    hook={useTable}\n  >\n    <TableColumn heading="ID" uid="id" prop="id" />\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableCondensed',
                  condensed: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ge,
                  mdxType: 'Table',
                },
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'toolbar' }, 'Toolbar'),
          Object(c.b)(
            r.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    baseRoute="/table/#"\n    name="TableToolbar"\n    caption="Table caption"\n    hook={useTable}\n    toolbar={[\'add\', \'copy\', \'download\', \'views\']}\n  >\n    <TableColumn uid="select" heading={<AllSelectedHeading />}>\n      <TableRowSelect />\n    </TableColumn>\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  baseRoute: '/table/#',
                  name: 'TableToolbar',
                  caption: 'Table caption',
                  hook: ge,
                  toolbar: ['add', 'copy', 'download', 'views'],
                  mdxType: 'Table',
                },
                Object(c.b)(
                  Ce,
                  {
                    uid: 'select',
                    heading: Object(c.b)(_e, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(c.b)(ye, { mdxType: 'TableRowSelect' })
                ),
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'row-detail' }, 'Row Detail'),
          Object(c.b)(
            r.c,
            {
              __position: 6,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableRowDetail"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <a href="/table/#" onClick={e => e.preventDefault()}>\n          {data.endpoint}\n        </a>\n      )}\n    </TableColumn>\n\n    <TableRowDetail uid="detail">\n      <table>\n        <thead>\n          <tr>\n            <th>IP</th>\n            <th>Repository</th>\n            <th>Port</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>0.0.0.1</td>\n            <td>repo1</td>\n            <td>8081</td>\n          </tr>\n        </tbody>\n      </table>\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableRowDetail',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ge,
                  mdxType: 'Table',
                },
                Object(c.b)(Ce, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(
                  Ce,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'a',
                      {
                        href: '/table/#',
                        onClick: function(e) {
                          return e.preventDefault()
                        },
                      },
                      t.endpoint
                    )
                  }
                ),
                Object(c.b)(
                  Ee,
                  { uid: 'detail', mdxType: 'TableRowDetail' },
                  Object(c.b)(
                    'table',
                    null,
                    Object(c.b)(
                      'thead',
                      null,
                      Object(c.b)(
                        'tr',
                        null,
                        Object(c.b)('th', null, 'IP'),
                        Object(c.b)('th', null, 'Repository'),
                        Object(c.b)('th', null, 'Port')
                      )
                    ),
                    Object(c.b)(
                      'tbody',
                      null,
                      Object(c.b)(
                        'tr',
                        null,
                        Object(c.b)('td', null, '0.0.0.1'),
                        Object(c.b)('td', null, 'repo1'),
                        Object(c.b)('td', null, '8081')
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(c.b)(
            'h3',
            { id: 'render-props-detail' },
            'Render Props Detail'
          ),
          Object(c.b)(
            r.c,
            {
              __position: 7,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableRowDetailRenderProps"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <a href="/table/#" onClick={e => e.preventDefault()}>\n          {data.endpoint}\n        </a>\n      )}\n    </TableColumn>\n\n    <TableRowDetail uid="detail" css="width: 50px">\n      {({ data }) => (\n        <table>\n          <thead>\n            <tr>\n              <th>IP</th>\n              <th>Repository</th>\n              <th>Port</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{data.ip}</td>\n              <td>{data.repo}</td>\n              <td>{data.port}</td>\n            </tr>\n          </tbody>\n        </table>\n      )}\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: b.default,
                ThemeProvider: d.a,
                Table: Oe,
                useTable: ge,
                TableRowSelect: ye,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableRowDetailRenderProps',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ge,
                  mdxType: 'Table',
                },
                Object(c.b)(Ce, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(
                  Ce,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'a',
                      {
                        href: '/table/#',
                        onClick: function(e) {
                          return e.preventDefault()
                        },
                      },
                      t.endpoint
                    )
                  }
                ),
                Object(c.b)(
                  Ee,
                  {
                    uid: 'detail',
                    css: 'width: 50px',
                    mdxType: 'TableRowDetail',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'table',
                      null,
                      Object(c.b)(
                        'thead',
                        null,
                        Object(c.b)(
                          'tr',
                          null,
                          Object(c.b)('th', null, 'IP'),
                          Object(c.b)('th', null, 'Repository'),
                          Object(c.b)('th', null, 'Port')
                        )
                      ),
                      Object(c.b)(
                        'tbody',
                        null,
                        Object(c.b)(
                          'tr',
                          null,
                          Object(c.b)('td', null, t.ip),
                          Object(c.b)('td', null, t.repo),
                          Object(c.b)('td', null, t.port)
                        )
                      )
                    )
                  }
                )
              )
            )
          )
        )
      }
      Pe &&
        Pe === Object(Pe) &&
        Object.isExtensible(Pe) &&
        Object.defineProperty(Pe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Table/table.mdx' },
        }),
        (Pe.isMDXComponent = !0)
    },
    './src/Toolbar/Toolbar.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        r = n('./src/AppBar/index.ts')
      function i(e) {
        var t = e.theme.color
        return {
          paddingLeft: 0,
          paddingRight: 0,
          minHeight: 'auto',
          background: 'none',
          '>button': { minHeight: '31px' },
          '>a': { minHeight: '33px' },
          '>button, >a': {
            color: t.foreground,
            background: 'none',
            borderColor: t.transparent,
            borderRadius: 0,
            '&:active': { color: t.foreground },
            svg: { width: '24px', height: '24px' },
          },
          '.ToolbarViewsContainer': {
            'button:first-child, a:first-child': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            'button:last-child, a:last-child': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        }
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'toolbarTheme',
            filename: 'src/Toolbar/toolbar.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return b
        })
      var b = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          d = e.onSwitchView,
          s = e.toolbar,
          u = (e.selectToolbar, e.themed),
          m = void 0 === u ? [] : u,
          p = Object(o.a)(e, [
            'children',
            'className',
            'onSwitchView',
            'toolbar',
            'selectToolbar',
            'themed',
          ]),
          f = Object(l.useMemo)(
            function() {
              return 'Toolbar '.concat(b)
            },
            [b]
          ),
          j = Object(l.useMemo)(
            function() {
              return [i].concat(Object(a.a)(m))
            },
            [i, m]
          ),
          h = Object(l.useCallback)(
            function(e) {
              e.preventDefault()
              var t = e.currentTarget.dataset.uid
              d && d(e, { id: t })
            },
            [d]
          ),
          O = Object(l.useMemo)(
            function() {
              return 'function' === typeof t
                ? t({ handleSwitchView: h, toolbar: s })
                : t
            },
            [t, h, s]
          )
        return c.a.createElement(
          r.AppBar,
          Object.assign({ className: f, themed: j }, p),
          O
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Toolbar', filename: 'src/Toolbar/Toolbar.tsx' },
        })
      t.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Toolbar', filename: 'src/Toolbar/Toolbar.tsx' },
        })
    },
  },
])
//# sourceMappingURL=src-table-table.ddc2b2ec94e08ab89efa.js.map
