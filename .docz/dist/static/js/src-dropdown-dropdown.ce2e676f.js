;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    './src/Button/Button.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        l = t.n(a),
        i = t('./src/Base/index.tsx')
      function c(e) {
        var n = e.theme,
          t = n.animation,
          r = n.color,
          o = n.border,
          a = n.font,
          l = n.unit,
          i = { background: r.default, borderBottom: o.thinDefault }
        return {
          color: r.white,
          background: r.default,
          border: o.thinDefault,
          boxShadow: 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'inline-block',
          font: 'inherit',
          lineHeight: a.lineHeight[4],
          margin: 0,
          overflow: 'visible',
          padding: '0 '.concat(l[3]),
          textAlign: 'center',
          transition: t.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: r.default2, borderBottom: o.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(r.outline), zIndex: 2 },
          '&:active': i,
        }
      }
      function d(e) {
        var n = e.appearance,
          t = e.theme,
          r = t.color,
          o = t.border,
          a = {
            background: r.accent,
            border: o.thinAccent,
            color: r.white,
            '&:hover': { background: r.accent2, borderBottom: o.thinAccent2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r.accent, border: o.thinAccent },
          },
          l = {
            background: r.active,
            border: o.thinActive,
            color: r.white,
            '&:hover': { background: r.active2, border: o.thinActive2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r.active, border: o.thinActive },
          },
          i = {
            background: r.action,
            border: o.thinAction,
            color: r.white,
            '&:hover': { background: r.action2, border: o.thinAction2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:action': { background: r.action, border: o.thinAction },
          },
          c = {
            background: r.danger,
            border: o.thinDanger,
            color: r.white,
            '&:hover': { background: r.danger2, border: o.thinDanger2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r.danger, border: o.thinDanger },
          },
          d = {
            background: r.success,
            border: o.thinSuccess,
            color: r.white,
            '&:hover': { background: r.success2, border: o.thinSuccess2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r.success, border: o.thinSuccess },
          },
          b = {
            background: r.warning,
            border: o.thinWarning,
            color: r.white,
            '&:hover': { background: r.warning2, border: o.thinWarning2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r.warning, border: o.thinWarning },
          },
          u = {
            background: r.disabled,
            border: o.thinDisabled,
            color: r['grey-900'],
            cursor: 'default',
            pointerEvents: 'none',
            '&:hover': {
              background: r.disabled,
              border: o.thinDisabled,
              color: r['grey-900'],
            },
            '&:active': {
              background: r.disabled,
              border: o.thinDisabled,
              color: r['grey-900'],
            },
            '&:focus': {
              background: r.disabled,
              border: o.thinDisabled,
              color: r['grey-900'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
          }
        switch (n) {
          case 'secondary':
            return {
              background: 'none',
              border: o.thinDefault,
              color: r.white,
              '&:hover': {
                background: r.default2,
                border: o.thinDefault2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': {
                background: r.default2,
                border: o.thinDefault2,
                color: r.white,
              },
            }
          case 'tertiary':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.foreground,
              '&:hover': { borderBottom: o.thinDefault200 },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': {
                borderBottom: o.thinDefault300,
                background: r['default-300'],
              },
            }
          case 'accent':
          case 'primary-accent':
            return a
          case 'secondary-accent':
            return {
              background: 'none',
              border: o.thinAccent,
              color: r.accent,
              '&:hover': {
                background: r.accent2,
                border: o.thinAccent2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': {
                background: r.accent,
                border: '1px solid '.concat(r.accent),
                color: r.white,
              },
            }
          case 'tertiary-accent':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.accent,
              '&:hover': { borderBottom: o.thinAccent },
              '&:active': {
                background: r.accent2,
                borderBottom: o.thinAccent,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'active':
          case 'primary-active':
            return l
          case 'secondary-active':
            return {
              background: r.active,
              border: o.thinActive,
              color: r.white,
              '&:hover': {
                background: r.active2,
                border: o.thinActive2,
                color: r.white,
              },
              '&:active': {
                background: r.active,
                border: o.thinActive,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-active':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              borderBottom: o.thinActive,
              color: r.active,
              '&:hover': { borderBottom: o.thinActive2, color: r.active },
              '&:active': {
                background: r.active,
                borderBottom: o.thinActive,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'action':
          case 'primary-action':
            return i
          case 'secondary-action':
            return {
              background: 'none',
              border: o.thinAction,
              color: r.action,
              '&:hover': {
                background: r.action2,
                border: o.thinAction2,
                color: r.white,
              },
              '&:active': {
                background: r.action2,
                border: o.thinAction2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-action':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.action,
              '&:hover': { borderBottom: o.thinAction },
              '&:active': {
                background: r.action2,
                borderBottom: o.thinAction,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'danger':
          case 'primary-danger':
            return c
          case 'secondary-danger':
            return {
              background: 'none',
              border: o.thinDanger,
              color: r.danger,
              '&:hover': {
                background: r.danger2,
                border: o.thinDanger2,
                color: r.white,
              },
              '&:active': {
                background: r.danger2,
                border: o.thinDanger2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-danger':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.danger,
              '&:hover': { borderBottom: o.thinDanger },
              '&:active': {
                background: r.danger2,
                borderBottom: o.thinDanger,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'success':
          case 'primary-success':
            return d
          case 'secondary-success':
            return {
              background: 'none',
              border: o.thinSuccess,
              color: r.success,
              '&:hover': {
                background: r.success2,
                border: o.thinSuccess2,
                color: r.white,
              },
              '&:active': {
                background: r.success2,
                border: o.thinSuccess2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-success':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.success,
              '&:hover': { borderBottom: o.thinSuccess },
              '&:active': {
                background: r.success2,
                borderBottom: o.thinSuccess,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'warning':
          case 'primary-warning':
            return b
          case 'secondary-warning':
            return {
              background: 'none',
              border: o.thinWarning,
              color: r.warning,
              '&:hover': {
                background: r.warning2,
                border: o.thinWarning2,
                color: r.white,
              },
              '&:active': {
                background: r.warning2,
                border: o.thinWarning2,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-warning':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.warning,
              '&:hover': { borderBottom: o.thinWarning },
              '&:active': {
                background: r.warning2,
                borderBottom: o.thinWarning,
                color: r.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'disabled':
          case 'primary-disabled':
            return u
          case 'secondary-disabled':
            return {
              background: 'none',
              border: o.thinDisabled,
              color: r.disabled,
              cursor: 'default',
              '&:hover': { color: r.disabled },
              '&:active': { color: r.disabled },
              '&:focus': {
                color: r.disabled,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          case 'tertiary-disabled':
            return {
              background: 'none',
              border: '1px solid '.concat(r.transparent),
              color: r.disabled,
              cursor: 'default',
              '&:hover': {
                background: 'none',
                border: '1px solid '.concat(r.transparent),
                color: r.disabled,
              },
              '&:active': {
                background: 'none',
                border: '1px solid '.concat(r.transparent),
                color: r.disabled,
              },
              '&:focus': {
                background: 'none',
                border: '1px solid '.concat(r.transparent),
                color: r.disabled,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
            }
          default:
            return {}
        }
      }
      function b(e) {
        var n = e.size,
          t = e.theme,
          r = t.font,
          o = t.unit
        switch (n) {
          case 1:
            return { padding: '0 '.concat(o[1]), fontSize: r.size[2] }
          case 2:
            return { padding: '0 '.concat(o[2]), fontSize: r.size[3] }
          case 3:
            return { padding: '0 '.concat(o[3]), fontSize: r.size[4] }
          case 4:
            return { padding: '0 '.concat(o[4]), fontSize: r.size[5] }
          case 5:
            return { padding: '0 '.concat(o[5]), fontSize: r.size[6] }
          case 6:
            return { padding: '0 '.concat(o[6]), fontSize: r.size[7] }
          case 7:
            return { padding: '0 '.concat(o[7]), fontSize: r.size[8] }
          case 8:
            return { padding: '0 '.concat(o[8]), fontSize: r.size[9] }
          case 9:
            return { padding: '0 '.concat(o[9]), fontSize: r.size[10] }
          case 10:
            return { padding: '0 '.concat(o[10]), fontSize: r.size[11] }
          default:
            return {}
        }
      }
      function u(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonTheme',
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
              name: 'buttonAppearanceTheme',
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
              name: 'buttonSizeTheme',
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
              name: 'buttonStretchTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        t.d(n, 'a', function() {
          return s
        })
      var s = l.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          s = void 0 === t ? '' : t,
          m = e.onClick,
          p = e.as,
          f = void 0 === p ? 'button' : p,
          g = e.themed,
          j = void 0 === g ? [] : g,
          O = Object(o.a)(e, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          h = Object(a.useMemo)(
            function() {
              return 'Button '.concat(s)
            },
            [s]
          ),
          y = O.disabled,
          I = O.appearance,
          v = Object(a.useMemo)(
            function() {
              return [c, d, b, u].concat(Object(r.a)(j))
            },
            [c, d, b, u, j]
          ),
          w = Object(a.useCallback)(
            function(e) {
              e.preventDefault(), m && m(e)
            },
            [m]
          )
        return l.a.createElement(
          i.Base,
          Object.assign(
            {
              as: f,
              className: h,
              themed: v,
              onClick: w,
              role: 'button',
              tabIndex: 0,
            },
            y ||
              'disabled' === I ||
              'primary-disabled' === I ||
              'secondary-disabled' === I ||
              'tertiary-disabled' === I
              ? { disabled: !0 }
              : {},
            O
          ),
          n
        )
      })
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
      n.b = s
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
    },
    './src/Container/Container.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        l = t.n(a),
        i = t('./src/Base/index.tsx')
      function c(e) {
        var n = e.appearance,
          t = e.theme,
          r = t.border,
          o = t.color,
          a = {
            color: o['accent-050'],
            backgroundColor: o['accent-500'],
            border: '1px solid '.concat(o['accent-500']),
          },
          l = {
            color: o['action-050'],
            backgroundColor: o['action-500'],
            border: '1px solid '.concat(o['action-500']),
          },
          i = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          c = {
            color: o['success-050'],
            backgroundColor: o['success-500'],
            border: '1px solid '.concat(o['success-500']),
          },
          d = {
            color: o['warning-050'],
            backgroundColor: o['warning-500'],
            border: '1px solid '.concat(o['warning-500']),
          }
        switch (n) {
          case 'primary':
            return {
              color: o.foregroundInvert,
              backgroundColor: o.backgroundInvert,
              border: r.thinTransparent,
            }
          case 'secondary':
            return {
              color: o['grey-800'],
              backgroundColor: o['grey-100'],
              border: '1px solid '.concat(o['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return a
          case 'secondary-accent':
            return {
              color: o['accent-800'],
              backgroundColor: o['accent-100'],
              border: '1px solid '.concat(o['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: o['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return l
          case 'secondary-action':
            return {
              color: o['action-800'],
              backgroundColor: o['action-100'],
              border: '1px solid '.concat(o['action-100']),
            }
          case 'tertiary-action':
            return {
              color: o['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return i
          case 'secondary-danger':
            return {
              color: o['danger-800'],
              backgroundColor: o['danger-300'],
              border: '1px solid '.concat(o['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: o['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return c
          case 'secondary-success':
            return {
              color: o['success-800'],
              backgroundColor: o['success-300'],
              border: '1px solid '.concat(o['success-300']),
            }
          case 'tertiary-success':
            return {
              color: o['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return d
          case 'secondary-warning':
            return {
              color: o['warning-800'],
              backgroundColor: o['warning-300'],
              border: '1px solid '.concat(o['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: o['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['warning-300']),
            }
          default:
            return {}
        }
      }
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        t.d(n, 'a', function() {
          return d
        })
      var d = l.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          d = void 0 === t ? '' : t,
          b = e.themed,
          u = void 0 === b ? [] : b,
          s = Object(o.a)(e, ['children', 'className', 'themed']),
          m = Object(a.useMemo)(
            function() {
              return 'Container '.concat(d)
            },
            [d]
          ),
          p = Object(a.useMemo)(
            function() {
              return [c].concat(Object(r.a)(u))
            },
            [c, u]
          )
        return l.a.createElement(
          i.Base,
          Object.assign({ className: m, themed: p }, s),
          n
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      n.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Dropdown/dropdown.mdx': function(e, n, t) {
      'use strict'
      t.r(n)
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = t('./node_modules/react/index.js'),
        a = t.n(o),
        l = t('./node_modules/@mdx-js/react/dist/index.es.js'),
        i = t('./node_modules/docz/dist/index.esm.js'),
        c = t(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        d = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        b = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        u = t('./src/MaterialIcons/CaretDown.tsx'),
        s = t('./src/Portal/index.ts'),
        m = t('./src/utils/either.util.ts'),
        p = function(e) {
          return { top: e.offsetTop, left: e.offsetLeft }
        }
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: '_pos',
            filename: 'src/reusable/positionOffset/positionOffset.tsx',
          },
        }),
        'undefined' !== typeof p &&
          p &&
          p === Object(p) &&
          Object.isExtensible(p) &&
          Object.defineProperty(p, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'pos',
              filename: 'src/reusable/positionOffset/positionOffset.tsx',
            },
          })
      var f = function(e) {
        return { height: e.offsetHeight, width: e.offsetWidth }
      }
      function g(e) {
        var n,
          t = e.boundary,
          r = e.element,
          o = e.flip,
          a = e.target
        n = t
          ? f(t)
          : {
              width: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              height: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
            }
        var l,
          i,
          c,
          d,
          b = p(a),
          u = f(a),
          s = a.getBoundingClientRect(),
          g = { pos: p(r), dim: f(r), boundary: r.getBoundingClientRect() },
          j = Object(m.a)(
            function() {
              return g.boundary.top + g.dim.height
            },
            function() {
              return g.dim.height
            }
          ),
          O = Object(m.a)(
            function() {
              return b.left + u.width
            },
            function() {
              return b.left - g.dim.width
            }
          ),
          h = g.boundary.left,
          y = g.boundary.left + g.dim.width - u.width
        o
          ? ((l = j(s.top - g.dim.height < 0)),
            (i = j(s.top + g.dim.height + u.height < n.height)),
            (c = O(s.left - g.dim.width < 0)),
            (d = O(s.left + g.dim.width + u.width < n.width)))
          : ((l = j(!1)), (i = j(!0)), (c = O(!1)), (d = O(!0)))
        var I = g.boundary.left + g.dim.width - (g.boundary.left + b.left),
          v = i - (g.dim.height + u.height) / 2,
          w = {
            'bottom-left': { top: i, left: h },
            'bottom-center': { top: i, left: I },
            'bottom-right': { top: i, left: y },
            'top-left': { top: l, left: h },
            'top-center': { top: l, left: I },
            'top-right': { top: l, left: y },
            'left-top': { top: l, left: c },
            'left-center': { top: v, left: c },
            'left-bottom': { top: i, left: c },
            'right-top': { top: l, left: d },
            'right-center': { top: v, left: d },
            'right-bottom': { top: i, left: d },
          }
        return function(e) {
          return w[e] || w['bottom-left']
        }
      }
      function j() {
        return {
          dim: function(e) {
            return f(e)
          },
          offset: function(e) {
            return g(e)
          },
          pos: function(e) {
            return p(e)
          },
        }
      }
      function O() {
        return function() {
          return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft,
          }
        }
      }
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: '_dim',
            filename: 'src/reusable/positionOffset/positionOffset.tsx',
          },
        }),
        'undefined' !== typeof f &&
          f &&
          f === Object(f) &&
          Object.isExtensible(f) &&
          Object.defineProperty(f, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'dim',
              filename: 'src/reusable/positionOffset/positionOffset.tsx',
            },
          }),
        g &&
          g === Object(g) &&
          Object.isExtensible(g) &&
          Object.defineProperty(g, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: '_offset',
              filename: 'src/reusable/positionOffset/positionOffset.tsx',
            },
          }),
        g &&
          g === Object(g) &&
          Object.isExtensible(g) &&
          Object.defineProperty(g, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'offset',
              filename: 'src/reusable/positionOffset/positionOffset.tsx',
            },
          }),
        j &&
          j === Object(j) &&
          Object.isExtensible(j) &&
          Object.defineProperty(j, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'usePositionOffset',
              filename: 'src/reusable/positionOffset/positionOffset.tsx',
            },
          }),
        O &&
          O === Object(O) &&
          Object.isExtensible(O) &&
          Object.defineProperty(O, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useScrollPosition',
              filename: 'src/reusable/scrollPosition/useScrollPosition.ts',
            },
          })
      var h = t(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function y(e) {
        return Object(h.a)(e), { position: 'relative' }
      }
      function I(e) {
        return { display: 'inline-block', width: e.stretch ? '100%' : 'auto' }
      }
      function v(e) {
        return Object(h.a)(e), { position: 'absolute', zIndex: 8 }
      }
      'undefined' !== typeof y &&
        y &&
        y === Object(y) &&
        Object.isExtensible(y) &&
        Object.defineProperty(y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'dropdownTheme',
            filename: 'src/Dropdown/dropdown.theme.ts',
          },
        }),
        I &&
          I === Object(I) &&
          Object.isExtensible(I) &&
          Object.defineProperty(I, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'dropdownContainerTheme',
              filename: 'src/Dropdown/dropdown.theme.ts',
            },
          }),
        'undefined' !== typeof v &&
          v &&
          v === Object(v) &&
          Object.isExtensible(v) &&
          Object.defineProperty(v, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'dropdownContentTheme',
              filename: 'src/Dropdown/dropdown.theme.ts',
            },
          })
      var w = t('./src/Button/Button.tsx'),
        x = t('./src/Base/Base.tsx'),
        k = a.a.memo(function(e) {
          var n = e.children,
            t = e.className,
            l = void 0 === t ? '' : t,
            i = e.label,
            c = e.animate,
            m = e.themed,
            p = void 0 === m ? [] : m,
            f = e.stretch,
            g = void 0 !== f && f,
            h = e.position,
            k = void 0 === h ? 'bottom-left' : h,
            D = (e.hover, e.noFlip, e.justify, e.opened),
            C = void 0 !== D && D,
            _ = Object(r.a)(e, [
              'children',
              'className',
              'label',
              'animate',
              'themed',
              'stretch',
              'position',
              'hover',
              'noFlip',
              'justify',
              'opened',
            ]),
            T = Object(o.useState)(C),
            P = Object(b.a)(T, 2),
            S = P[0],
            z = P[1],
            E = Object(o.useMemo)(
              function() {
                return 'Dropdown '.concat(l)
              },
              [l]
            ),
            R = j().offset,
            B = Object(o.useRef)(),
            A = Object(o.useRef)(),
            M = Object(o.useState)({ top: 0, left: 0 }),
            W = Object(b.a)(M, 2),
            N = (W[0], W[1]),
            F = Object(o.useRef)({}),
            H = O(),
            L = Object(o.useMemo)(
              function() {
                return [I]
              },
              [I]
            ),
            X = Object(o.useMemo)(
              function() {
                return [y, v].concat(Object(d.a)(p))
              },
              [y, v, p]
            ),
            J = Object(o.useCallback)(
              function(e) {
                e.preventDefault, z(!S)
                var n = B.current && B.current.children[0],
                  t = H(),
                  r = t.top,
                  o = t.left
                if (n) {
                  var a = R({ element: n, target: A.current })(k)
                  F.current = { top: r + a.top, left: o + a.left }
                }
              },
              [B, F, A, R, k, N, z, H]
            ),
            q = Object(o.useMemo)(
              function() {
                return (
                  c || {
                    opened: { applyAtStart: { display: 'block' }, opacity: 1 },
                    closed: { applyAtEnd: { display: 'none' }, opacity: 0 },
                  }
                )
              },
              [c]
            )
          return a.a.createElement(
            x.b,
            { className: 'DropdownContainer', themed: L, stretch: g },
            a.a.createElement(
              'div',
              { ref: B },
              a.a.createElement(
                w.a,
                Object.assign({ className: E, onClick: J, stretch: g }, _),
                i,
                ' ',
                a.a.createElement(u.a, { alt: 'dropdown arrow' })
              )
            ),
            a.a.createElement(
              s.Portal,
              null,
              a.a.createElement(
                x.b,
                Object.assign(
                  { className: E, themed: X, state: S ? 'opened' : 'closed' },
                  _,
                  { animate: q, style: F.current }
                ),
                a.a.createElement('div', { ref: A }, n)
              )
            )
          )
        })
      'undefined' !== typeof k &&
        k &&
        k === Object(k) &&
        Object.isExtensible(k) &&
        Object.defineProperty(k, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Dropdown', filename: 'src/Dropdown/Dropdown.tsx' },
        })
      var D = k
      'undefined' !== typeof k &&
        k &&
        k === Object(k) &&
        Object.isExtensible(k) &&
        Object.defineProperty(k, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Dropdown', filename: 'src/Dropdown/Dropdown.tsx' },
        })
      var C = t('./src/Container/Container.tsx'),
        _ = t('./src/ThemeContext/ThemeProvider.tsx')
      t.d(n, 'default', function() {
        return S
      })
      var T = {},
        P = 'wrapper'
      function S(e) {
        var n = e.components,
          t = Object(r.a)(e, ['components'])
        return Object(l.b)(
          P,
          Object.assign({}, T, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'dropdown' }, 'Dropdown'),
          Object(l.b)(i.d, { of: D, mdxType: 'Props' }),
          Object(l.b)('h2', { id: 'default' }, 'Default'),
          Object(l.b)(
            i.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Dropdown uid="menu1" label="Primary" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: c.default,
                Dropdown: D,
                Container: C.b,
                ThemeProvider: _.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              _.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              )
            )
          ),
          Object(l.b)('h2', { id: 'apperance' }, 'Apperance'),
          Object(l.b)(
            i.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <h3>Accent</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="accent" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-accent"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-accent"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <h3>Active</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="active" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-active"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-active"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Action</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="action" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-action"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-action"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Danger</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="danger" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-danger"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-danger"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Success</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="success" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-success"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-success"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Warning</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="warning" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-warning"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-warning"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Disabled</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="disabled" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-disabled"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-disabled"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: c.default,
                Dropdown: D,
                Container: C.b,
                ThemeProvider: _.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              _.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)('h3', null, 'Accent'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Active'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Action'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Danger'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Success'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Warning'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)('h3', null, 'Disabled'),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              ),
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              )
            )
          ),
          Object(l.b)('h2', { id: 'size' }, 'Size'),
          Object(l.b)(
            _.a,
            { mdxType: 'ThemeProvider' },
            Object(l.b)(
              'table',
              null,
              Object(l.b)(
                'thead',
                null,
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('th', null, 'Prop'),
                  Object(l.b)('th', null, 'Example')
                )
              ),
              Object(l.b)(
                'tbody',
                null,
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '1'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 1,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '2'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 2,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '3'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 3,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '4'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 4,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '5'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 5,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '6'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 6,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '7'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 7,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '8'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 8,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '9'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 9,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                ),
                Object(l.b)(
                  'tr',
                  null,
                  Object(l.b)('td', null, '10'),
                  Object(l.b)(
                    'td',
                    null,
                    Object(l.b)(
                      D,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 10,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        C.b,
                        {
                          margin1: 'top',
                          radius: 'rounded',
                          padding: 'default',
                          elevate: 3,
                          css: 'background: #fff; color:#000',
                          mdxType: 'Container',
                        },
                        Object(l.b)(
                          'ul',
                          null,
                          Object(l.b)('li', null, 'Item 1'),
                          Object(l.b)('li', null, 'Item 2'),
                          Object(l.b)('li', null, 'Item 3'),
                          Object(l.b)('li', null, 'Item 4')
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(l.b)('h2', { id: 'stretch' }, 'Stretch'),
          Object(l.b)(
            i.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <Dropdown uid="menu1" label="Strtch" stretch>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: c.default,
                Dropdown: D,
                Container: C.b,
                ThemeProvider: _.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              _.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(
                D,
                {
                  uid: 'menu1',
                  label: 'Strtch',
                  stretch: !0,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  C.b,
                  {
                    margin1: 'top',
                    radius: 'rounded',
                    padding: 'default',
                    elevate: 3,
                    css: 'background: #fff; color:#000',
                    mdxType: 'Container',
                  },
                  Object(l.b)(
                    'ul',
                    null,
                    Object(l.b)('li', null, 'Item 1'),
                    Object(l.b)('li', null, 'Item 2'),
                    Object(l.b)('li', null, 'Item 3'),
                    Object(l.b)('li', null, 'Item 4')
                  )
                )
              )
            )
          )
        )
      }
      S &&
        S === Object(S) &&
        Object.isExtensible(S) &&
        Object.defineProperty(S, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Dropdown/dropdown.mdx' },
        }),
        (S.isMDXComponent = !0)
    },
    './src/Icon/Icon.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = t('./node_modules/react/index.js'),
        i = t.n(l)
      function c(e) {
        var n = e.hoverColor
        return Object(r.a)(
          {
            display: 'inline-block',
            color: 'inherit',
            fill: 'currentcolor',
            height: 'auto',
            position: 'relative',
          },
          n && { '&:hover': { color: n } }
        )
      }
      function d(e) {
        var n = e.appearance,
          t = e.theme.color
        switch (n) {
          case 'accent':
            return { color: t.accent, '&:hover': { color: t.accent2 } }
          case 'action':
            return { color: t.action, '&:hover': { color: t.action2 } }
          case 'active':
            return { color: t.active, '&:hover': { color: t.active2 } }
          case 'danger':
          case 'error':
            return { color: t.danger, '&:hover': { color: t.danger2 } }
          case 'success':
            return { color: t.success, '&:hover': { color: t.success2 } }
          case 'warning':
            return { color: t.warning, '&:hover': { color: t.warning2 } }
          case 'disabled':
            return { color: t.disabled, '&:hover': { color: t.disabled2 } }
          default:
            return {}
        }
      }
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'iconTheme', filename: 'src/Icon/icon.theme.ts' },
        }),
        'undefined' !== typeof d &&
          d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'iconAppearanceTheme',
              filename: 'src/Icon/icon.theme.ts',
            },
          })
      var b = t('./src/Base/Base.tsx')
      t.d(n, 'a', function() {
        return u
      })
      var u = i.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          u = void 0 === t ? '' : t,
          s = e.height,
          m = void 0 === s ? '24px' : s,
          p = e.themed,
          f = void 0 === p ? [] : p,
          g = e.title,
          j = e.viewBox,
          O = void 0 === j ? '0 0 24 24' : j,
          h = e.width,
          y = void 0 === h ? '24px' : h,
          I = Object(a.a)(e, [
            'children',
            'className',
            'height',
            'themed',
            'title',
            'viewBox',
            'width',
          ]),
          v = Object(l.useMemo)(
            function() {
              return 'Icon '.concat(u)
            },
            [u]
          ),
          w = Object(l.useMemo)(
            function() {
              return [c, d].concat(Object(o.a)(f))
            },
            [c, d, f]
          ),
          x = Object(r.a)({ height: m, viewBox: O, width: y }, I)
        return i.a.createElement(
          b.b,
          Object.assign(
            {
              as: 'svg',
              className: v,
              themed: w,
              xmlns: 'http://www.w3.org/2000/svg',
            },
            x
          ),
          g ? i.a.createElement('title', null, g) : null,
          n
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
    },
    './src/Icon/icon.types.ts': function(e, n) {
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
    './src/Icon/index.ts': function(e, n, t) {
      'use strict'
      var r = t('./src/Icon/Icon.tsx')
      t.d(n, 'Icon', function() {
        return r.a
      })
      t('./src/Icon/icon.types.ts')
    },
    './src/MaterialIcons/CaretDown.tsx': function(e, n, t) {
      'use strict'
      t.d(n, 'a', function() {
        return l
      })
      var r = t('./node_modules/react/index.js'),
        o = t.n(r),
        a = t('./src/Icon/index.ts')
      function l(e) {
        return o.a.createElement(
          a.Icon,
          Object.assign({ viewBox: '0 0 480 480' }, e),
          o.a.createElement('path', {
            id: 'path4',
            d: 'M 140,190 240,290 340,190 Z',
          })
        )
      }
      l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CaretDown',
            filename: 'src/MaterialIcons/CaretDown.tsx',
          },
        }),
        (n.b = l),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CaretDown',
              filename: 'src/MaterialIcons/CaretDown.tsx',
            },
          })
    },
    './src/Portal/Portal.ts': function(e, n, t) {
      'use strict'
      t.d(n, 'a', function() {
        return l
      })
      var r = t('./node_modules/react/index.js'),
        o = t.n(r),
        a = t('./node_modules/react-dom/index.js'),
        l = o.a.memo(function(e) {
          var n = e.children,
            t = e.selector,
            o = void 0 === t ? 'body' : t,
            l = Object(r.useRef)(document.querySelector(o)),
            i = Object(r.useRef)(document.createElement('div'))
          return (
            Object(r.useLayoutEffect)(
              function() {
                return (
                  l.current && l.current.appendChild(i.current),
                  function() {
                    l.current && l.current.removeChild(i.current)
                  }
                )
              },
              [l.current, i.current]
            ),
            Object(a.createPortal)(n, l.current)
          )
        })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Portal', filename: 'src/Portal/Portal.ts' },
        })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Portal', filename: 'src/Portal/Portal.ts' },
        })
    },
    './src/Portal/index.ts': function(e, n, t) {
      'use strict'
      var r = t('./src/Portal/Portal.ts')
      t.d(n, 'Portal', function() {
        return r.a
      })
      t('./src/Portal/portal.types.ts')
    },
    './src/Portal/portal.types.ts': function(e, n) {
      'undefined' !== typeof PortalInterface &&
        PortalInterface &&
        PortalInterface === Object(PortalInterface) &&
        Object.isExtensible(PortalInterface) &&
        Object.defineProperty(PortalInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'PortalInterface',
            filename: 'src/Portal/portal.types.ts',
          },
        })
    },
  },
])
//# sourceMappingURL=src-dropdown-dropdown.ba0686dcc6594edec57b.js.map
