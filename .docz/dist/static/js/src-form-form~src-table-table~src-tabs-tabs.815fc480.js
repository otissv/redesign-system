;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/Button/Button.tsx': function(e, t, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = n('./node_modules/react/index.js'),
        a = n.n(r),
        i = n('./src/Base/index.tsx')
      function l(e) {
        var t = e.theme,
          n = t.animation,
          o = t.color,
          c = t.border,
          r = t.font,
          a = t.unit,
          i = { background: o.default, borderBottom: c.thinDefault }
        return {
          color: o.white,
          background: o.default,
          border: c.thinDefault,
          boxShadow: 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'inline-block',
          font: 'inherit',
          lineHeight: r.lineHeight[4],
          margin: 0,
          overflow: 'visible',
          padding: '0 '.concat(a[3]),
          textAlign: 'center',
          transition: n.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: o.default2, borderBottom: c.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(o.outline), zIndex: 2 },
          '&:active': i,
        }
      }
      function s(e) {
        var t = e.appearance,
          n = e.theme,
          o = n.color,
          c = n.border,
          r = {
            background: o.accent,
            border: c.thinAccent,
            color: o.white,
            '&:hover': { background: o.accent2, borderBottom: c.thinAccent2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.accent, border: c.thinAccent },
          },
          a = {
            background: o.active,
            border: c.thinActive,
            color: o.white,
            '&:hover': { background: o.active2, border: c.thinActive2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.active, border: c.thinActive },
          },
          i = {
            background: o.action,
            border: c.thinAction,
            color: o.white,
            '&:hover': { background: o.action2, border: c.thinAction2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:action': { background: o.action, border: c.thinAction },
          },
          l = {
            background: o.danger,
            border: c.thinDanger,
            color: o.white,
            '&:hover': { background: o.danger2, border: c.thinDanger2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.danger, border: c.thinDanger },
          },
          s = {
            background: o.success,
            border: c.thinSuccess,
            color: o.white,
            '&:hover': { background: o.success2, border: c.thinSuccess2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.success, border: c.thinSuccess },
          },
          u = {
            background: o.warning,
            border: c.thinWarning,
            color: o.white,
            '&:hover': { background: o.warning2, border: c.thinWarning2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.warning, border: c.thinWarning },
          },
          d = {
            background: o.disabled,
            border: c.thinDisabled,
            color: o['grey-900'],
            cursor: 'default',
            pointerEvents: 'none',
            '&:hover': {
              background: o.disabled,
              border: c.thinDisabled,
              color: o['grey-900'],
            },
            '&:active': {
              background: o.disabled,
              border: c.thinDisabled,
              color: o['grey-900'],
            },
            '&:focus': {
              background: o.disabled,
              border: c.thinDisabled,
              color: o['grey-900'],
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
          }
        switch (t) {
          case 'secondary':
            return {
              background: 'none',
              border: c.thinDefault,
              color: o.white,
              '&:hover': {
                background: o.default2,
                border: c.thinDefault2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                background: o.default2,
                border: c.thinDefault2,
                color: o.white,
              },
            }
          case 'tertiary':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.foreground,
              '&:hover': { borderBottom: c.thinDefault200 },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                borderBottom: c.thinDefault300,
                background: o['default-300'],
              },
            }
          case 'accent':
          case 'primary-accent':
            return r
          case 'secondary-accent':
            return {
              background: 'none',
              border: c.thinAccent,
              color: o.accent,
              '&:hover': {
                background: o.accent2,
                border: c.thinAccent2,
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
              '&:hover': { borderBottom: c.thinAccent },
              '&:active': {
                background: o.accent2,
                borderBottom: c.thinAccent,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'active':
          case 'primary-active':
            return a
          case 'secondary-active':
            return {
              background: o.active,
              border: c.thinActive,
              color: o.white,
              '&:hover': {
                background: o.active2,
                border: c.thinActive2,
                color: o.white,
              },
              '&:active': {
                background: o.active,
                border: c.thinActive,
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
              borderBottom: c.thinActive,
              color: o.active,
              '&:hover': { borderBottom: c.thinActive2, color: o.active },
              '&:active': {
                background: o.active,
                borderBottom: c.thinActive,
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
              border: c.thinAction,
              color: o.action,
              '&:hover': {
                background: o.action2,
                border: c.thinAction2,
                color: o.white,
              },
              '&:active': {
                background: o.action2,
                border: c.thinAction2,
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
              '&:hover': { borderBottom: c.thinAction },
              '&:active': {
                background: o.action2,
                borderBottom: c.thinAction,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'danger':
          case 'primary-danger':
            return l
          case 'secondary-danger':
            return {
              background: 'none',
              border: c.thinDanger,
              color: o.danger,
              '&:hover': {
                background: o.danger2,
                border: c.thinDanger2,
                color: o.white,
              },
              '&:active': {
                background: o.danger2,
                border: c.thinDanger2,
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
              '&:hover': { borderBottom: c.thinDanger },
              '&:active': {
                background: o.danger2,
                borderBottom: c.thinDanger,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'success':
          case 'primary-success':
            return s
          case 'secondary-success':
            return {
              background: 'none',
              border: c.thinSuccess,
              color: o.success,
              '&:hover': {
                background: o.success2,
                border: c.thinSuccess2,
                color: o.white,
              },
              '&:active': {
                background: o.success2,
                border: c.thinSuccess2,
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
              '&:hover': { borderBottom: c.thinSuccess },
              '&:active': {
                background: o.success2,
                borderBottom: c.thinSuccess,
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
              border: c.thinWarning,
              color: o.warning,
              '&:hover': {
                background: o.warning2,
                border: c.thinWarning2,
                color: o.white,
              },
              '&:active': {
                background: o.warning2,
                border: c.thinWarning2,
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
              '&:hover': { borderBottom: c.thinWarning },
              '&:active': {
                background: o.warning2,
                borderBottom: c.thinWarning,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'disabled':
          case 'primary-disabled':
            return d
          case 'secondary-disabled':
            return {
              background: 'none',
              border: c.thinDisabled,
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
          c = n.unit
        switch (t) {
          case 1:
            return { padding: '0 '.concat(c[1]), fontSize: o.size[2] }
          case 2:
            return { padding: '0 '.concat(c[2]), fontSize: o.size[3] }
          case 3:
            return { padding: '0 '.concat(c[3]), fontSize: o.size[4] }
          case 4:
            return { padding: '0 '.concat(c[4]), fontSize: o.size[5] }
          case 5:
            return { padding: '0 '.concat(c[5]), fontSize: o.size[6] }
          case 6:
            return { padding: '0 '.concat(c[6]), fontSize: o.size[7] }
          case 7:
            return { padding: '0 '.concat(c[7]), fontSize: o.size[8] }
          case 8:
            return { padding: '0 '.concat(c[8]), fontSize: o.size[9] }
          case 9:
            return { padding: '0 '.concat(c[9]), fontSize: o.size[10] }
          case 10:
            return { padding: '0 '.concat(c[10]), fontSize: o.size[11] }
          default:
            return {}
        }
      }
      function d(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonTheme',
            filename: 'src/Button/button.theme.ts',
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
        'undefined' !== typeof d &&
          d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        n.d(t, 'a', function() {
          return b
        })
      var b = a.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          f = e.onClick,
          m = e.as,
          h = void 0 === m ? 'button' : m,
          p = e.themed,
          v = void 0 === p ? [] : p,
          g = Object(c.a)(e, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          y = Object(r.useMemo)(
            function() {
              return 'Button '.concat(b)
            },
            [b]
          ),
          j = g.disabled,
          O = g.appearance,
          x = Object(r.useMemo)(
            function() {
              return [l, s, u, d].concat(Object(o.a)(v))
            },
            [l, s, u, d, v]
          ),
          _ = Object(r.useCallback)(
            function(e) {
              e.preventDefault(), f && f(e)
            },
            [f]
          )
        return a.a.createElement(
          i.Base,
          Object.assign(
            {
              as: h,
              className: y,
              themed: x,
              onClick: _,
              role: 'button',
              tabIndex: 0,
            },
            j ||
              'disabled' === O ||
              'primary-disabled' === O ||
              'secondary-disabled' === O ||
              'tertiary-disabled' === O
              ? { disabled: !0 }
              : {},
            g
          ),
          t
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
      t.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
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
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = n('./node_modules/react/index.js'),
        a = n.n(r),
        i = n('./src/Base/Base.tsx')
      function l(e) {
        var t = e.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: e.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: t ? 'column' : 'row',
        }
      }
      function s(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
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
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(t, 'c', function() {
          return d
        }),
        n.d(t, 'a', function() {
          return b
        })
      var u = a.a.createContext({})
      function d() {
        return Object(r.useContext)(u)
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
        d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useButtonGroup',
              filename: 'src/ButtonGroup/ButtonGroup.tsx',
            },
          })
      var b = a.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          d = void 0 === n ? '' : n,
          b = (e.onClick, e.themed),
          f = void 0 === b ? [] : b,
          m = Object(c.a)(e, ['children', 'className', 'onClick', 'themed']),
          h = Object(r.useMemo)(
            function() {
              return 'ButtonGroup '.concat(d)
            },
            [d]
          ),
          p = Object(r.useMemo)(
            function() {
              return [l, s].concat(Object(o.a)(f))
            },
            [l, s, f]
          ),
          v = m.appearance,
          g = m.context,
          y = m.size,
          j = m.stretch,
          O = Object(r.useMemo)(
            function() {
              return { appearance: v, context: g, size: y, stretch: j }
            },
            [v, g, y, j]
          )
        return a.a.createElement(
          u.Provider,
          { value: O },
          a.a.createElement(
            i.b,
            Object.assign({ role: 'group', className: h, themed: p }, m),
            t
          )
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
      t.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
    },
    './src/reusable/collectionHash/collectionHash.hooks.ts': function(e, t, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        c = n('./node_modules/react/index.js')
      function r(e) {
        var t = e(),
          n = t.items,
          r = t.itemsToArray,
          a = Object(c.useState)([]),
          i = Object(o.a)(a, 2),
          l = i[0],
          s = i[1]
        return (
          Object(c.useEffect)(
            function() {
              s(r(n))
            },
            [n, r]
          ),
          Object(c.useMemo)(
            function() {
              return l
            },
            [l]
          )
        )
      }
      function a(e, t) {
        var n = Object(c.useState)(t),
          r = Object(o.a)(n, 2),
          a = r[0],
          i = r[1],
          l = e(),
          s = l.active,
          u = l.items
        return (
          Object(c.useEffect)(
            function() {
              u && u[s] && i(u[s])
            },
            [s, u, i]
          ),
          Object(c.useMemo)(
            function() {
              return a
            },
            [a]
          )
        )
      }
      function i(e) {
        var t = e(),
          n = t.active,
          o = t.dispatch
        Object(c.useEffect)(
          function() {
            '' !== n && o({ type: 'SET_ACTIVE', active: '' })
          },
          [n, o]
        )
      }
      function l(e, t) {
        var n = e(),
          o = n.active,
          r = n.dispatch
        Object(c.useEffect)(
          function() {
            o !== t && r({ type: 'SET_ACTIVE', active: t })
          },
          [o, t, r]
        )
      }
      r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useGetItems',
            filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
          },
        }),
        a &&
          a === Object(a) &&
          Object.isExtensible(a) &&
          Object.defineProperty(a, '__filemeta', {
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
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
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
        return d
      }),
        n.d(t, 'b', function() {
          return b
        })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        a = n('./node_modules/react/index.js'),
        i = n('./src/reusable/collectionHash/collectionHashConstants.ts')
      function l(e, t) {
        if (Array.isArray(e)) {
          return e.reduce(function(e, n) {
            return Object(r.a)({}, e, Object(c.a)({}, n[t], n))
          }, {})
        }
      }
      var s = function(e) {
          var t = Object(r.a)({}, i.a, e)
          return Object(r.a)({}, t, {
            items: Array.isArray(t.items) ? l(t.items, t.uid) : t.items,
          })
        },
        u = function(e) {
          return s(e)
        }
      u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'createInitialState',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var d = function(e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
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
        function u(e, t, n, a) {
          var s
          switch (t.type) {
            case 'INSERT_ITEMS':
              var u = Array.isArray(t.items)
                ? l(t.items, n.uid)
                : Object(c.a)({}, t.items[n.uid], t.items)
              return Object(r.a)({}, e, { items: Object(r.a)({}, e.items, u) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (s = t.remove),
                Array.isArray(s)
                  ? Object(r.a)({}, e, {
                      active: t.remove.includes(e.active) ? '' : e.active,
                      selected: e.selected.filter(function(e) {
                        return !t.remove.includes(e)
                      }),
                      items: i(e.items, t.remove),
                    })
                  : e
              )
            case 'REPLACE':
              return Object(r.a)({}, e, t.state)
            case 'REPLACE_ITEMS':
              var d = l(t.items, n.uid)
              return Object(r.a)({}, e, { items: d })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(r.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(r.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(r.a)({}, e, { selected: t.selected })
            case 'TOGGLE_SELECTED_ITEMS':
              var b = Object(o.a)(e.selected),
                f = !0,
                m = !1,
                h = void 0
              try {
                for (
                  var p, v = t.selected[Symbol.iterator]();
                  !(f = (p = v.next()).done);
                  f = !0
                ) {
                  var g = p.value,
                    y = b.indexOf(g)
                  if (y > -1)
                    b =
                      0 === y
                        ? b.slice(1)
                        : y === b.length - 1
                        ? b.slice(0, b.length - 1)
                        : [].concat(
                            Object(o.a)(b.slice(0, y)),
                            Object(o.a)(b.slice(y + 1))
                          )
                  else {
                    var j = g.trim()
                    b.push(j)
                  }
                }
              } catch (_) {
                ;(m = !0), (h = _)
              } finally {
                try {
                  f || null == v.return || v.return()
                } finally {
                  if (m) throw h
                }
              }
              return Object(r.a)({}, e, { selected: b })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var O = Object(c.a)(
                  {},
                  t.item[n.uid] || t.select,
                  Object(r.a)({}, e.items[t.select], t.item)
                ),
                x = t.item[n.uid]
                  ? Object(r.a)({}, i(e.items, [t.select]), O)
                  : Object(r.a)({}, e.items, O)
              return Object(r.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, c, r) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(c)
                        return 0 === e
                          ? [r].concat(Object(o.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(o.a)(n.slice(0, n.length - 1)), [
                              r,
                            ])
                          : [].concat(
                              Object(o.a)(n.slice(0, e)),
                              [r],
                              Object(o.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: x,
              })
            default:
              return a ? a(e, t) : e
          }
        }
        function d(e, o) {
          return u(e, o, n, t)
        }
        return Object(a.useReducer)(d, n)
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
//# sourceMappingURL=src-form-form~src-table-table~src-tabs-tabs.ba0686dcc6594edec57b.js.map
