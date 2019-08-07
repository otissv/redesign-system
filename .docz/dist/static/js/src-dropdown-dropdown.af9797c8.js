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
        c = t('./src/Base/index.tsx')
      function i(e) {
        var n = e.theme,
          t = n.animation,
          r = n.color,
          o = n.border,
          a = n.font,
          l = n.unit,
          c = { background: r.default, borderBottom: o.thinDefault }
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
          '&:active': c,
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
          c = {
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
          i = {
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
            return c
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
            return i
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
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
          g = void 0 === p ? 'button' : p,
          f = e.themed,
          j = void 0 === f ? [] : f,
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
          I = O.disabled,
          y = O.appearance,
          w = Object(a.useMemo)(
            function() {
              return [i, d, b, u].concat(Object(r.a)(j))
            },
            [i, d, b, u, j]
          ),
          v = Object(a.useCallback)(
            function(e) {
              e.preventDefault(), m && m(e)
            },
            [m]
          )
        return l.a.createElement(
          c.Base,
          Object.assign(
            {
              as: g,
              className: h,
              themed: w,
              onClick: v,
              role: 'button',
              tabIndex: 0,
            },
            I ||
              'disabled' === y ||
              'primary-disabled' === y ||
              'secondary-disabled' === y ||
              'tertiary-disabled' === y
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
        c = t('./src/Base/index.tsx')
      function i(e) {
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
          c = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          i = {
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
            return c
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
            return i
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
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
              return [i].concat(Object(r.a)(u))
            },
            [i, u]
          )
        return l.a.createElement(
          c.Base,
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
        c = t('./node_modules/docz/dist/index.esm.js'),
        i = t(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        d = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        b = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        u = t('./src/MaterialIcons/CaretDown.tsx'),
        s = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
        )
      function m(e) {
        return Object(s.a)(e), { position: 'relative' }
      }
      function p(e) {
        return { display: 'inline-block', width: e.stretch ? '100%' : 'auto' }
      }
      function g(e) {
        return Object(s.a)(e), { position: 'absolute', zIndex: 8 }
      }
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'dropdownTheme',
            filename: 'src/Dropdown/dropdown.theme.ts',
          },
        }),
        p &&
          p === Object(p) &&
          Object.isExtensible(p) &&
          Object.defineProperty(p, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'dropdownContainerTheme',
              filename: 'src/Dropdown/dropdown.theme.ts',
            },
          }),
        'undefined' !== typeof g &&
          g &&
          g === Object(g) &&
          Object.isExtensible(g) &&
          Object.defineProperty(g, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'dropdownContentTheme',
              filename: 'src/Dropdown/dropdown.theme.ts',
            },
          })
      var f = t('./src/Button/Button.tsx'),
        j = t('./src/Base/Base.tsx'),
        O = a.a.memo(function(e) {
          var n = e.children,
            t = e.className,
            l = void 0 === t ? '' : t,
            c = e.label,
            i = e.animate,
            s = e.themed,
            O = void 0 === s ? [] : s,
            h = e.stretch,
            I = void 0 !== h && h,
            y = Object(r.a)(e, [
              'children',
              'className',
              'label',
              'animate',
              'themed',
              'stretch',
            ]),
            w = Object(o.useState)(!1),
            v = Object(b.a)(w, 2),
            x = v[0],
            k = v[1],
            D = Object(o.useMemo)(
              function() {
                return 'Dropdown '.concat(l)
              },
              [l]
            ),
            C = Object(o.useMemo)(
              function() {
                return [p]
              },
              [p]
            ),
            T = Object(o.useMemo)(
              function() {
                return [m, g].concat(Object(d.a)(O))
              },
              [m, g, O]
            ),
            _ = Object(o.useCallback)(
              function(e) {
                e.preventDefault, k(!x)
              },
              [k]
            ),
            z = Object(o.useMemo)(
              function() {
                return i || { opened: { opacity: 1 }, closed: { opacity: 0 } }
              },
              [i]
            )
          return a.a.createElement(
            j.b,
            { className: 'DropdownContainer', themed: C, stretch: I },
            a.a.createElement(
              f.a,
              Object.assign({ className: D, onClick: _ }, y, { stretch: I }),
              c,
              ' ',
              a.a.createElement(u.a, { alt: 'dropdown arrow' })
            ),
            a.a.createElement(
              j.b,
              Object.assign(
                {
                  className: D,
                  as: 'ul',
                  themed: T,
                  state: x ? 'opened' : 'closed',
                },
                y,
                { animate: z }
              ),
              n
            )
          )
        })
      'undefined' !== typeof O &&
        O &&
        O === Object(O) &&
        Object.isExtensible(O) &&
        Object.defineProperty(O, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Dropdown', filename: 'src/Dropdown/Dropdown.tsx' },
        })
      var h = O
      'undefined' !== typeof O &&
        O &&
        O === Object(O) &&
        Object.isExtensible(O) &&
        Object.defineProperty(O, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Dropdown', filename: 'src/Dropdown/Dropdown.tsx' },
        })
      var I = t('./src/Container/Container.tsx'),
        y = t('./src/ThemeContext/ThemeProvider.tsx')
      t.d(n, 'default', function() {
        return x
      })
      var w = {},
        v = 'wrapper'
      function x(e) {
        var n = e.components,
          t = Object(r.a)(e, ['components'])
        return Object(l.b)(
          v,
          Object.assign({}, w, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'dropdown' }, 'Dropdown'),
          Object(l.b)(c.d, { of: h, mdxType: 'Props' }),
          Object(l.b)('h2', { id: 'default' }, 'Default'),
          Object(l.b)(
            c.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Dropdown uid="menu1" label="Primary" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: c.c,
                Props: c.d,
                styled: i.default,
                Dropdown: h,
                Container: I.b,
                ThemeProvider: y.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              y.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
            c.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <h3>Accent</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="accent" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-accent"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-accent"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <h3>Active</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="active" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-active"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-active"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Action</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="action" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-action"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-action"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Danger</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="danger" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-danger"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-danger"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Success</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="success" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-success"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-success"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Warning</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="warning" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-warning"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-warning"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n\n  <h3>Disabled</h3>\n  <Dropdown uid="menu1" label="Primary" appearance="disabled" marginRight={3}>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Secondary"\n    appearance="secondary-disabled"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n  <Dropdown\n    uid="menu1"\n    label="Tertiary"\n    appearance="tertiary-disabled"\n    marginRight={3}\n  >\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: c.c,
                Props: c.d,
                styled: i.default,
                Dropdown: h,
                Container: I.b,
                ThemeProvider: y.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              y.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)('h3', null, 'Accent'),
              Object(l.b)(
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-accent',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-active',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-action',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-danger',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-success',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-warning',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Primary',
                  appearance: 'disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Secondary',
                  appearance: 'secondary-disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
                h,
                {
                  uid: 'menu1',
                  label: 'Tertiary',
                  appearance: 'tertiary-disabled',
                  marginRight: 3,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
            y.a,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 1,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 2,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 3,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 4,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 5,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 6,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 7,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 8,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 9,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
                      h,
                      {
                        uid: 'menu1',
                        label: 'Dropdown',
                        size: 10,
                        mdxType: 'Dropdown',
                      },
                      Object(l.b)(
                        I.b,
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
            c.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <Dropdown uid="menu1" label="Strtch" stretch>\n    <Container\n      margin1="top"\n      radius="rounded"\n      padding="default"\n      elevate={3}\n      css="background: #fff; color:#000"\n    >\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n      </ul>\n    </Container>\n  </Dropdown>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Fragment: o.Fragment,
                Playground: c.c,
                Props: c.d,
                styled: i.default,
                Dropdown: h,
                Container: I.b,
                ThemeProvider: y.a,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              y.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(
                h,
                {
                  uid: 'menu1',
                  label: 'Strtch',
                  stretch: !0,
                  mdxType: 'Dropdown',
                },
                Object(l.b)(
                  I.b,
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
      x &&
        x === Object(x) &&
        Object.isExtensible(x) &&
        Object.defineProperty(x, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Dropdown/dropdown.mdx' },
        }),
        (x.isMDXComponent = !0)
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
        c = t.n(l)
      function i(e) {
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
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
      var u = c.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          u = void 0 === t ? '' : t,
          s = e.height,
          m = void 0 === s ? '24px' : s,
          p = e.themed,
          g = void 0 === p ? [] : p,
          f = e.title,
          j = e.viewBox,
          O = void 0 === j ? '0 0 24 24' : j,
          h = e.width,
          I = void 0 === h ? '24px' : h,
          y = Object(a.a)(e, [
            'children',
            'className',
            'height',
            'themed',
            'title',
            'viewBox',
            'width',
          ]),
          w = Object(l.useMemo)(
            function() {
              return 'Icon '.concat(u)
            },
            [u]
          ),
          v = Object(l.useMemo)(
            function() {
              return [i, d].concat(Object(o.a)(g))
            },
            [i, d, g]
          ),
          x = Object(r.a)({ height: m, viewBox: O, width: I }, y)
        return c.a.createElement(
          b.b,
          Object.assign(
            {
              as: 'svg',
              className: w,
              themed: v,
              xmlns: 'http://www.w3.org/2000/svg',
            },
            x
          ),
          f ? c.a.createElement('title', null, f) : null,
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
  },
])
//# sourceMappingURL=src-dropdown-dropdown.0fdaed2baef5ba4a9603.js.map
