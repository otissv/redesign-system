;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/Button/Button.tsx': function(e, t, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/Base/index.tsx')
      function s(e) {
        var t = e.theme,
          n = t.animation,
          o = t.color,
          a = t.border,
          c = t.font,
          r = t.unit,
          i = { background: o.default, borderBottom: a.thinDefault }
        return {
          color: o.white,
          background: o.default,
          border: a.thinDefault,
          boxShadow: 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'inline-block',
          font: 'inherit',
          lineHeight: c.lineHeight[4],
          margin: 0,
          overflow: 'visible',
          padding: '0 '.concat(r[3]),
          textAlign: 'center',
          transition: n.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: o.default2, borderBottom: a.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(o.outline), zIndex: 2 },
          '&:active': i,
        }
      }
      function l(e) {
        var t = e.appearance,
          n = e.theme,
          o = n.color,
          a = n.border,
          c = {
            background: o.accent,
            border: a.thinAccent,
            color: o.white,
            '&:hover': { background: o.accent2, borderBottom: a.thinAccent2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.accent, border: a.thinAccent },
          },
          r = {
            background: o.active,
            border: a.thinActive,
            color: o.white,
            '&:hover': { background: o.active2, border: a.thinActive2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.active, border: a.thinActive },
          },
          i = {
            background: o.action,
            border: a.thinAction,
            color: o.white,
            '&:hover': { background: o.action2, border: a.thinAction2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:action': { background: o.action, border: a.thinAction },
          },
          s = {
            background: o.danger,
            border: a.thinDanger,
            color: o.white,
            '&:hover': { background: o.danger2, border: a.thinDanger2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.danger, border: a.thinDanger },
          },
          l = {
            background: o.success,
            border: a.thinSuccess,
            color: o.white,
            '&:hover': { background: o.success2, border: a.thinSuccess2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.success, border: a.thinSuccess },
          },
          u = {
            background: o.warning,
            border: a.thinWarning,
            color: o.white,
            '&:hover': { background: o.warning2, border: a.thinWarning2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.warning, border: a.thinWarning },
          },
          b = {
            background: o.disabled,
            border: a.thinDisabled,
            color: o['grey-900'],
            cursor: 'default',
            pointerEvents: 'none',
            '&:hover': {
              background: o.disabled,
              border: a.thinDisabled,
              color: o['grey-900'],
            },
            '&:active': {
              background: o.disabled,
              border: a.thinDisabled,
              color: o['grey-900'],
            },
            '&:focus': {
              background: o.disabled,
              border: a.thinDisabled,
              color: o['grey-900'],
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
          }
        switch (t) {
          case 'secondary':
            return {
              background: 'none',
              border: a.thinDefault,
              color: o.white,
              '&:hover': {
                background: o.default2,
                border: a.thinDefault2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                background: o.default2,
                border: a.thinDefault2,
                color: o.white,
              },
            }
          case 'tertiary':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.foreground,
              '&:hover': { borderBottom: a.thinDefault200 },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                borderBottom: a.thinDefault300,
                background: o['default-300'],
              },
            }
          case 'accent':
          case 'primary-accent':
            return c
          case 'secondary-accent':
            return {
              background: 'none',
              border: a.thinAccent,
              color: o.accent,
              '&:hover': {
                background: o.accent2,
                border: a.thinAccent2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                background: o.accent,
                border: '1px solid '.concat(o.accent),
                color: o.white,
              },
            }
          case 'tertiary-accent':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.accent,
              '&:hover': { borderBottom: a.thinAccent },
              '&:active': {
                background: o.accent2,
                borderBottom: a.thinAccent,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'active':
          case 'primary-active':
            return r
          case 'secondary-active':
            return {
              background: o.active,
              border: a.thinActive,
              color: o.white,
              '&:hover': {
                background: o.active2,
                border: a.thinActive2,
                color: o.white,
              },
              '&:active': {
                background: o.active,
                border: a.thinActive,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-active':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              borderBottom: a.thinActive,
              color: o.active,
              '&:hover': { borderBottom: a.thinActive2, color: o.active },
              '&:active': {
                background: o.active,
                borderBottom: a.thinActive,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'action':
          case 'primary-action':
            return i
          case 'secondary-action':
            return {
              background: 'none',
              border: a.thinAction,
              color: o.action,
              '&:hover': {
                background: o.action2,
                border: a.thinAction2,
                color: o.white,
              },
              '&:active': {
                background: o.action2,
                border: a.thinAction2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-action':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.action,
              '&:hover': { borderBottom: a.thinAction },
              '&:active': {
                background: o.action2,
                borderBottom: a.thinAction,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'danger':
          case 'primary-danger':
            return s
          case 'secondary-danger':
            return {
              background: 'none',
              border: a.thinDanger,
              color: o.danger,
              '&:hover': {
                background: o.danger2,
                border: a.thinDanger2,
                color: o.white,
              },
              '&:active': {
                background: o.danger2,
                border: a.thinDanger2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-danger':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.danger,
              '&:hover': { borderBottom: a.thinDanger },
              '&:active': {
                background: o.danger2,
                borderBottom: a.thinDanger,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'success':
          case 'primary-success':
            return l
          case 'secondary-success':
            return {
              background: 'none',
              border: a.thinSuccess,
              color: o.success,
              '&:hover': {
                background: o.success2,
                border: a.thinSuccess2,
                color: o.white,
              },
              '&:active': {
                background: o.success2,
                border: a.thinSuccess2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-success':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.success,
              '&:hover': { borderBottom: a.thinSuccess },
              '&:active': {
                background: o.success2,
                borderBottom: a.thinSuccess,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'warning':
          case 'primary-warning':
            return u
          case 'secondary-warning':
            return {
              background: 'none',
              border: a.thinWarning,
              color: o.warning,
              '&:hover': {
                background: o.warning2,
                border: a.thinWarning2,
                color: o.white,
              },
              '&:active': {
                background: o.warning2,
                border: a.thinWarning2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-warning':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.warning,
              '&:hover': { borderBottom: a.thinWarning },
              '&:active': {
                background: o.warning2,
                borderBottom: a.thinWarning,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'disabled':
          case 'primary-disabled':
            return b
          case 'secondary-disabled':
            return {
              background: 'none',
              border: a.thinDisabled,
              color: o.disabled,
              cursor: 'default',
              '&:hover': { color: o.disabled },
              '&:active': { color: o.disabled },
              '&:focus': {
                color: o.disabled,
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-disabled':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.disabled,
              cursor: 'default',
              '&:hover': {
                background: 'none',
                border: '1px solid '.concat(o.transparent),
                color: o.disabled,
              },
              '&:active': {
                background: 'none',
                border: '1px solid '.concat(o.transparent),
                color: o.disabled,
              },
              '&:focus': {
                background: 'none',
                border: '1px solid '.concat(o.transparent),
                color: o.disabled,
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          default:
            return {}
        }
      }
      function u(e) {
        var t = e.size,
          n = e.theme,
          o = n.font,
          a = n.unit
        switch (t) {
          case 1:
            return { padding: '0 '.concat(a[1]), fontSize: o.size[2] }
          case 2:
            return { padding: '0 '.concat(a[2]), fontSize: o.size[3] }
          case 3:
            return { padding: '0 '.concat(a[3]), fontSize: o.size[4] }
          case 4:
            return { padding: '0 '.concat(a[4]), fontSize: o.size[5] }
          case 5:
            return { padding: '0 '.concat(a[5]), fontSize: o.size[6] }
          case 6:
            return { padding: '0 '.concat(a[6]), fontSize: o.size[7] }
          case 7:
            return { padding: '0 '.concat(a[7]), fontSize: o.size[8] }
          case 8:
            return { padding: '0 '.concat(a[8]), fontSize: o.size[9] }
          case 9:
            return { padding: '0 '.concat(a[9]), fontSize: o.size[10] }
          case 10:
            return { padding: '0 '.concat(a[10]), fontSize: o.size[11] }
          default:
            return {}
        }
      }
      function b(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonTheme',
            filename: 'src/Button/button.theme.ts',
          },
        }),
        'undefined' !== typeof l &&
          l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonAppearanceTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonSizeTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        n.d(t, 'a', function() {
          return d
        })
      var d = r.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          d = void 0 === n ? '' : n,
          m = e.onClick,
          f = e.as,
          h = void 0 === f ? 'button' : f,
          p = e.themed,
          j = void 0 === p ? [] : p,
          v = Object(a.a)(e, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          O = Object(c.useMemo)(
            function() {
              return 'Button '.concat(d)
            },
            [d]
          ),
          y = v.disabled,
          g = v.appearance,
          x = Object(c.useMemo)(
            function() {
              return [s, l, u, b].concat(Object(o.a)(j))
            },
            [s, l, u, b, j]
          ),
          _ = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), m && m(e)
            },
            [m]
          )
        return r.a.createElement(
          i.Base,
          Object.assign(
            {
              as: h,
              className: O,
              themed: x,
              onClick: _,
              role: 'button',
              tabIndex: 0,
            },
            y ||
              'disabled' === g ||
              'primary-disabled' === g ||
              'secondary-disabled' === g ||
              'tertiary-disabled' === g
              ? { disabled: !0 }
              : {},
            v
          ),
          t
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
    },
    './src/ButtonGroup/ButtonGroup.tsx': function(e, t, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/Base/Base.tsx')
      function s(e) {
        var t = e.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: e.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: t ? 'column' : 'row',
        }
      }
      function l(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
          },
        }),
        'undefined' !== typeof l &&
          l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(t, 'c', function() {
          return b
        }),
        n.d(t, 'a', function() {
          return d
        })
      var u = r.a.createContext({})
      function b() {
        return Object(c.useContext)(u)
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupContext',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        }),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useButtonGroup',
              filename: 'src/ButtonGroup/ButtonGroup.tsx',
            },
          })
      var d = r.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          d = (e.onClick, e.themed),
          m = void 0 === d ? [] : d,
          f = Object(a.a)(e, ['children', 'className', 'onClick', 'themed']),
          h = Object(c.useMemo)(
            function() {
              return 'ButtonGroup '.concat(b)
            },
            [b]
          ),
          p = Object(c.useMemo)(
            function() {
              return [s, l].concat(Object(o.a)(m))
            },
            [s, l, m]
          ),
          j = f.appearance,
          v = f.context,
          O = f.size,
          y = f.stretch,
          g = Object(c.useMemo)(
            function() {
              return { appearance: j, context: v, size: O, stretch: y }
            },
            [j, v, O, y]
          )
        return r.a.createElement(
          u.Provider,
          { value: g },
          r.a.createElement(
            i.b,
            Object.assign({ role: 'group', className: h, themed: p }, f),
            t
          )
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
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
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
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
    },
    './src/ButtonGroup/ButtonGroupButton.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return s
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        r = n('./src/Button/Button.tsx'),
        i = n('./src/ButtonGroup/ButtonGroup.tsx'),
        s = c.a.memo(function(e) {
          var t = e.children,
            n = e.className,
            s = void 0 === n ? '' : n,
            l = e.themed,
            u = void 0 === l ? [] : l,
            b = Object(o.a)(e, ['children', 'className', 'themed']),
            d = Object(i.c)(),
            m = Object(a.useMemo)(
              function() {
                return 'ButtonGroupButton '.concat(s || '')
              },
              [s]
            )
          return c.a.createElement(
            r.b,
            Object.assign({ className: m }, d, { themed: u }, b),
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
          value: {
            name: 'ButtonGroupButton',
            filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
          },
        }),
        (t.b = s),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ButtonGroupButton',
              filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
            },
          })
    },
    './src/Tabs/TabContext.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return u
      }),
        n.d(t, 'a', function() {
          return b
        })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = n('./node_modules/react/index.js'),
        i = n.n(r),
        s = n('./src/reusable/collectionHash/index.ts'),
        l = i.a.createContext({})
      function u() {
        return Object(r.useContext)(l)
      }
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabContext', filename: 'src/Tabs/TabContext.tsx' },
        }),
        u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'useTabs', filename: 'src/Tabs/TabContext.tsx' },
          })
      var b = i.a.memo(function(e) {
        var t = e.active,
          n = (e.selected, e.children),
          u = e.stacked,
          b = Object(c.a)(e, ['active', 'selected', 'children', 'stacked']),
          d = { active: t, items: [], selected: [], stacked: u },
          m = Object(s.useCollectionHashReducer)(d),
          f = Object(a.a)(m, 2),
          h = f[0],
          p = f[1],
          j = Object(r.useMemo)(
            function() {
              return Object(o.a)({}, h, { dispatch: p }, b)
            },
            [h, p, b]
          )
        return i.a.createElement(l.Provider, { value: j }, n)
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabProvider', filename: 'src/Tabs/TabContext.tsx' },
        })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabContext', filename: 'src/Tabs/TabContext.tsx' },
        })
    },
    './src/Tabs/TabList.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/ButtonGroup/ButtonGroup.tsx'),
        s = n('./src/Tabs/tabs.theme.ts'),
        l = n('./src/Tabs/TabContext.tsx'),
        u = r.a.memo(function(e) {
          var t = e.active,
            n = e.children,
            u = e.className,
            b = void 0 === u ? '' : u,
            d = e.themed,
            m = void 0 === d ? [] : d,
            f = Object(a.a)(e, ['active', 'children', 'className', 'themed']),
            h = Object(c.useMemo)(
              function() {
                return 'TabList '.concat(b)
              },
              [b]
            ),
            p = Object(c.useMemo)(
              function() {
                return [s.b].concat(Object(o.a)(m))
              },
              [s.b, m]
            ),
            j = Object(l.b)(),
            v = j.dispatch,
            O = j.appearance,
            y = j.stacked,
            g = j.stretch,
            x = j.size,
            _ = Object(c.useCallback)(function(e) {
              e.preventDefault(),
                (e.currentTarget.scrollLeft =
                  -e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
            }, [])
          return (
            Object(c.useEffect)(
              function() {
                v({ type: 'SET_ACTIVE', active: t })
              },
              [t]
            ),
            r.a.createElement(
              i.b,
              Object.assign(
                {
                  className: h,
                  onWheel: _,
                  styled: 'overflow:hidden;',
                  appearance: O,
                  stretch: g,
                  size: x,
                  stacked: y,
                },
                f,
                { themed: p }
              ),
              n
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
          value: { name: 'TabList', filename: 'src/Tabs/TabList.tsx' },
        })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabList', filename: 'src/Tabs/TabList.tsx' },
        })
    },
    './src/Tabs/TabListButton.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/Tabs/tabs.theme.ts'),
        s = n('./src/ButtonGroup/ButtonGroupButton.tsx'),
        l = n('./src/Tabs/TabContext.tsx'),
        u = r.a.memo(function(e) {
          var t = e.children,
            n = e.className,
            u = void 0 === n ? '' : n,
            b = e.uid,
            d = e.onClick,
            m = e.themed,
            f = void 0 === m ? [] : m,
            h = Object(a.a)(e, [
              'children',
              'className',
              'uid',
              'onClick',
              'themed',
            ]),
            p = Object(c.useMemo)(
              function() {
                return 'TabListButton '.concat(u)
              },
              [u]
            ),
            j = Object(c.useMemo)(
              function() {
                return [i.a].concat(Object(o.a)(f))
              },
              [i.a, f]
            ),
            v = Object(l.b)(),
            O = v.active,
            y = v.appearance,
            g = v.dispatch,
            x = v.stacked,
            _ = Object(c.useCallback)(
              function(e) {
                e.preventDefault(),
                  g({
                    type: 'SET_ACTIVE',
                    active: e.currentTarget.dataset.uid,
                  }),
                  d && d(e)
              },
              [g]
            ),
            T = Object(c.useMemo)(
              function() {
                return O === b ? 'active' : y
              },
              [O, y, b]
            )
          return r.a.createElement(
            s.b,
            Object.assign({ className: p, themed: j }, h, {
              onClick: _,
              appearance: T,
              stacked: x,
              'data-uid': b,
            }),
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
          value: {
            name: 'TabListButton',
            filename: 'src/Tabs/TabListButton.tsx',
          },
        })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TabListButton',
            filename: 'src/Tabs/TabListButton.tsx',
          },
        })
    },
    './src/Tabs/TabPanel.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/Tabs/TabContext.tsx'),
        s = n('./src/Tabs/tabs.theme.ts'),
        l = n('./src/Base/Base.tsx'),
        u = r.a.memo(function(e) {
          var t = e.css,
            n = e.children,
            u = e.className,
            b = void 0 === u ? '' : u,
            d = e.uid,
            m = e.themed,
            f = void 0 === m ? [] : m,
            h = Object(a.a)(e, [
              'css',
              'children',
              'className',
              'uid',
              'themed',
            ]),
            p = Object(c.useMemo)(
              function() {
                return 'TabPanel '.concat(b)
              },
              [b]
            ),
            j = Object(c.useMemo)(
              function() {
                return [s.c].concat(Object(o.a)(f))
              },
              [s.c, f]
            ),
            v = Object(i.b)(),
            O = v.active,
            y = v.height,
            g = v.width,
            x = Object(c.useMemo)(
              function() {
                return O === d ? 'display: block;' : 'display: none;'
              },
              [O, d]
            )
          return Object(c.useMemo)(
            function() {
              return O === d
                ? r.a.createElement(
                    l.b,
                    Object.assign(
                      { className: p, height: y, width: g, themed: j },
                      h,
                      {
                        css: ''
                          .concat(x, ' height: ')
                          .concat(y, '; width: ')
                          .concat(g, '; ')
                          .concat(t),
                        'data-uid': d,
                      }
                    ),
                    n
                  )
                : null
            },
            [O, d, y, h, x, t, p, g, j, n]
          )
        })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabPanel', filename: 'src/Tabs/TabPanel.tsx' },
        })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabPanel', filename: 'src/Tabs/TabPanel.tsx' },
        })
    },
    './src/Tabs/Tabs.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        r = n.n(c),
        i = n('./src/Base/Base.tsx'),
        s = n('./src/Tabs/TabContext.tsx'),
        l = n('./src/Tabs/tabs.theme.ts'),
        u = r.a.memo(function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            u = e.children,
            b = e.appearance,
            d = e.stretch,
            m = e.size,
            f = e.themed,
            h = void 0 === f ? [] : f,
            p = e.height,
            j = e.width,
            v = e.stacked,
            O = Object(a.a)(e, [
              'className',
              'children',
              'appearance',
              'stretch',
              'size',
              'themed',
              'height',
              'width',
              'stacked',
            ]),
            y = Object(c.useMemo)(
              function() {
                return 'Tabs '.concat(n)
              },
              [n]
            ),
            g = Object(c.useMemo)(
              function() {
                return [l.d].concat(Object(o.a)(h))
              },
              [l.d, h]
            )
          return r.a.createElement(
            s.a,
            {
              appearance: b,
              height: p,
              width: j,
              stretch: d,
              size: m,
              stacked: v,
            },
            r.a.createElement(
              i.b,
              Object.assign({ className: y, themed: g, stacked: v }, O),
              u
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
          value: { name: 'Tabs', filename: 'src/Tabs/Tabs.tsx' },
        }),
        (t.b = u),
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Tabs', filename: 'src/Tabs/Tabs.tsx' },
          })
    },
    './src/Tabs/tabs.theme.ts': function(e, t, n) {
      'use strict'
      n.d(t, 'd', function() {
        return a
      }),
        n.d(t, 'a', function() {
          return c
        }),
        n.d(t, 'b', function() {
          return r
        }),
        n.d(t, 'c', function() {
          return i
        })
      var o = n(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function a(e) {
        return {
          display: 'flex',
          flexDirection: e.stacked ? 'row' : 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'stretch',
          alignContent: 'stretch',
        }
      }
      function c(e) {
        return e.item ? { width: 'auto', flex: 'none' } : {}
      }
      function r(e) {
        return Object(o.a)(e), { overflow: 'auto hidden', whiteSpace: 'nowrap' }
      }
      function i(e) {
        return Object(o.a)(e), { overflow: 'hidden auto', flex: 1 }
      }
      a &&
        a === Object(a) &&
        Object.isExtensible(a) &&
        Object.defineProperty(a, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'tabsTheme', filename: 'src/Tabs/tabs.theme.ts' },
        }),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsListButtonTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          }),
        r &&
          r === Object(r) &&
          Object.isExtensible(r) &&
          Object.defineProperty(r, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsListTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          }),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsPanelTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHash.hooks.ts': function(e, t, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        a = n('./node_modules/react/index.js')
      function c(e) {
        var t = e(),
          n = t.items,
          c = t.itemsToArray,
          r = Object(a.useState)([]),
          i = Object(o.a)(r, 2),
          s = i[0],
          l = i[1]
        return (
          Object(a.useEffect)(
            function() {
              l(c(n))
            },
            [n]
          ),
          Object(a.useMemo)(
            function() {
              return s
            },
            [s]
          )
        )
      }
      function r(e, t) {
        var n = Object(a.useState)(t),
          c = Object(o.a)(n, 2),
          r = c[0],
          i = c[1],
          s = e(),
          l = s.active,
          u = s.items
        return (
          Object(a.useEffect)(
            function() {
              u && u[l] && i(u[l])
            },
            [l, u]
          ),
          Object(a.useMemo)(
            function() {
              return r
            },
            [r]
          )
        )
      }
      function i(e) {
        var t = e(),
          n = t.active,
          o = t.dispatch
        Object(a.useEffect)(function() {
          '' !== n && o({ type: 'SET_ACTIVE', active: '' })
        }, [])
      }
      function s(e, t) {
        var n = e(),
          o = n.active,
          c = n.dispatch
        Object(a.useEffect)(
          function() {
            o !== t && c({ type: 'SET_ACTIVE', active: t })
          },
          [o, t]
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useGetItems',
            filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
          },
        }),
        r &&
          r === Object(r) &&
          Object.isExtensible(r) &&
          Object.defineProperty(r, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useGetActiveItem',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useResetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useSetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHash.types.ts': function(e, t) {
      'undefined' !== typeof CollectionHashType &&
        CollectionHashType &&
        CollectionHashType === Object(CollectionHashType) &&
        Object.isExtensible(CollectionHashType) &&
        Object.defineProperty(CollectionHashType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CollectionHashType',
            filename: 'src/reusable/collectionHash/collectionHash.types.ts',
          },
        }),
        'undefined' !== typeof CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface ===
            Object(CollectionHashInitialValueInterface) &&
          Object.isExtensible(CollectionHashInitialValueInterface) &&
          Object.defineProperty(
            CollectionHashInitialValueInterface,
            '__filemeta',
            {
              enumerable: !0,
              configurable: !0,
              value: {
                name: 'CollectionHashInitialValueInterface',
                filename: 'src/reusable/collectionHash/collectionHash.types.ts',
              },
            }
          ),
        'undefined' !== typeof CollectionHashStateInterface &&
          CollectionHashStateInterface &&
          CollectionHashStateInterface ===
            Object(CollectionHashStateInterface) &&
          Object.isExtensible(CollectionHashStateInterface) &&
          Object.defineProperty(CollectionHashStateInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashStateInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof BuildInitialValueType &&
          BuildInitialValueType &&
          BuildInitialValueType === Object(BuildInitialValueType) &&
          Object.isExtensible(BuildInitialValueType) &&
          Object.defineProperty(BuildInitialValueType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'BuildInitialValueType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CreateInitialStateType &&
          CreateInitialStateType &&
          CreateInitialStateType === Object(CreateInitialStateType) &&
          Object.isExtensible(CreateInitialStateType) &&
          Object.defineProperty(CreateInitialStateType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CreateInitialStateType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ReducerType &&
          ReducerType &&
          ReducerType === Object(ReducerType) &&
          Object.isExtensible(ReducerType) &&
          Object.defineProperty(ReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashActionInterface &&
          CollectionHashActionInterface &&
          CollectionHashActionInterface ===
            Object(CollectionHashActionInterface) &&
          Object.isExtensible(CollectionHashActionInterface) &&
          Object.defineProperty(CollectionHashActionInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashActionInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashReducerType &&
          CollectionHashReducerType &&
          CollectionHashReducerType === Object(CollectionHashReducerType) &&
          Object.isExtensible(CollectionHashReducerType) &&
          Object.defineProperty(CollectionHashReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ItemsToArrayType &&
          ItemsToArrayType &&
          ItemsToArrayType === Object(ItemsToArrayType) &&
          Object.isExtensible(ItemsToArrayType) &&
          Object.defineProperty(ItemsToArrayType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ItemsToArrayType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHashConstants.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var o = { active: '', items: [], loading: !1, selected: [], uid: 'id' }
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'COLLECTION_HASH_INITIAL_STATE',
            filename: 'src/reusable/collectionHash/collectionHashConstants.ts',
          },
        })
    },
    './src/reusable/collectionHash/collectionHashReducer.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      }),
        n.d(t, 'b', function() {
          return b
        })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        r = n('./node_modules/react/index.js'),
        i = n('./src/reusable/collectionHash/collectionHashConstants.ts'),
        s = function(e) {
          return Object(c.a)({}, i.a, e)
        },
        l = function(e) {
          return s(e)
        }
      l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'createInitialState',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var u = function(e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'itemsToArray',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var b = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function(e) {
                  return e
                },
          n = s(e)
        function i(e, t) {
          var n = {}
          for (var o in e) t.includes(o) || (n[o] = e[o])
          return n
        }
        function l(e) {
          if (Array.isArray(e)) {
            return e.reduce(function(e, t) {
              return Object(c.a)({}, e, Object(a.a)({}, t[n.uid], t))
            }, {})
          }
        }
        function u(e, t, n, r) {
          var s
          switch (t.type) {
            case 'INSERT_ITEMS':
              var u = Array.isArray(t.items)
                ? l(t.items)
                : Object(a.a)({}, t.items[n.uid], t.items)
              return Object(c.a)({}, e, { items: Object(c.a)({}, e.items, u) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (s = t.remove),
                Array.isArray(s)
                  ? Object(c.a)({}, e, {
                      active: t.remove.includes(e.active) ? '' : e.active,
                      selected: e.selected.filter(function(e) {
                        return !t.remove.includes(e)
                      }),
                      items: i(e.items, t.remove),
                    })
                  : e
              )
            case 'REPLACE_ITEMS':
              var b = l(t.items)
              return Object(c.a)({}, e, { items: b })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(c.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(c.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(c.a)({}, e, { selected: t.selected })
            case 'TOGGLE_SELECTED_ITEMS':
              var d = Object(o.a)(e.selected),
                m = !0,
                f = !1,
                h = void 0
              try {
                for (
                  var p, j = t.selected[Symbol.iterator]();
                  !(m = (p = j.next()).done);
                  m = !0
                ) {
                  var v = p.value,
                    O = d.indexOf(v),
                    y = v.trim()
                  e.items[O]
                    ? (d =
                        0 === O
                          ? d.slice(1)
                          : O === d.length - 1
                          ? d.slice(0, d.length - 1)
                          : [].concat(
                              Object(o.a)(d.slice(0, O)),
                              Object(o.a)(d.slice(O + 1))
                            ))
                    : d.push(y)
                }
              } catch (_) {
                ;(f = !0), (h = _)
              } finally {
                try {
                  m || null == j.return || j.return()
                } finally {
                  if (f) throw h
                }
              }
              return Object(c.a)({}, e, { selected: d })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var g = Object(a.a)(
                  {},
                  t.item.name || t.select,
                  Object(c.a)({}, e.items[t.select], t.item)
                ),
                x = t.item[n.uid]
                  ? Object(c.a)({}, i(e.items, [t.select]), g)
                  : Object(c.a)({}, e.items, g)
              return Object(c.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, a, c) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(a)
                        return 0 === e
                          ? [c].concat(Object(o.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(o.a)(n.slice(0, n.length - 1)), [
                              c,
                            ])
                          : [].concat(
                              Object(o.a)(n.slice(0, e)),
                              [c],
                              Object(o.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: x,
              })
            default:
              return r ? r(e, t) : e
          }
        }
        function b(e, o) {
          return u(e, o, n, t)
        }
        return Object(r.useReducer)(b, n)
      }
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useCollectionHashReducer',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
    },
    './src/reusable/collectionHash/index.ts': function(e, t, n) {
      'use strict'
      n('./src/reusable/collectionHash/collectionHashConstants.ts')
      var o = n('./src/reusable/collectionHash/collectionHashReducer.ts')
      n.d(t, 'itemsToArray', function() {
        return o.a
      }),
        n.d(t, 'useCollectionHashReducer', function() {
          return o.b
        })
      n('./src/reusable/collectionHash/collectionHash.hooks.ts'),
        n('./src/reusable/collectionHash/collectionHash.types.ts')
    },
  },
])
//# sourceMappingURL=src-form-form~src-tabs-tabs.e5c15bfd4c5b7d97eb90.js.map
