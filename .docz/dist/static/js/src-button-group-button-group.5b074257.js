;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    './src/Button/Button.tsx': function(t, e, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = n('./node_modules/react/index.js'),
        a = n.n(u),
        c = n('./src/Base/index.tsx')
      function i(t) {
        var e = t.theme,
          n = e.animation,
          o = e.color,
          r = e.border,
          u = e.font,
          a = e.unit,
          c = { background: o.default, borderBottom: r.thinDefault }
        return {
          color: o.white,
          background: o.default,
          border: r.thinDefault,
          boxShadow: 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'inline-block',
          font: 'inherit',
          lineHeight: u.lineHeight[4],
          margin: 0,
          overflow: 'visible',
          padding: '0 '.concat(a[3]),
          textAlign: 'center',
          transition: n.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: o.default2, borderBottom: r.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(o.outline), zIndex: 2 },
          '&:active': c,
        }
      }
      function b(t) {
        var e = t.appearance,
          n = t.theme,
          o = n.color,
          r = n.border,
          u = {
            background: o.accent,
            border: r.thinAccent,
            color: o.white,
            '&:hover': { background: o.accent2, borderBottom: r.thinAccent2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.accent, border: r.thinAccent },
          },
          a = {
            background: o.active,
            border: r.thinActive,
            color: o.white,
            '&:hover': { background: o.active2, border: r.thinActive2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.active, border: r.thinActive },
          },
          c = {
            background: o.action,
            border: r.thinAction,
            color: o.white,
            '&:hover': { background: o.action2, border: r.thinAction2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:action': { background: o.action, border: r.thinAction },
          },
          i = {
            background: o.danger,
            border: r.thinDanger,
            color: o.white,
            '&:hover': { background: o.danger2, border: r.thinDanger2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.danger, border: r.thinDanger },
          },
          b = {
            background: o.success,
            border: r.thinSuccess,
            color: o.white,
            '&:hover': { background: o.success2, border: r.thinSuccess2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.success, border: r.thinSuccess },
          },
          d = {
            background: o.warning,
            border: r.thinWarning,
            color: o.white,
            '&:hover': { background: o.warning2, border: r.thinWarning2 },
            '&:focus': {
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
            '&:active': { background: o.warning, border: r.thinWarning },
          },
          p = {
            background: o.disabled,
            border: r.thinDisabled,
            color: o['grey-900'],
            cursor: 'default',
            pointerEvents: 'none',
            '&:hover': {
              background: o.disabled,
              border: r.thinDisabled,
              color: o['grey-900'],
            },
            '&:active': {
              background: o.disabled,
              border: r.thinDisabled,
              color: o['grey-900'],
            },
            '&:focus': {
              background: o.disabled,
              border: r.thinDisabled,
              color: o['grey-900'],
              boxShadow: '0 0 0 0.2em '.concat(o.outline),
              zIndex: 2,
            },
          }
        switch (e) {
          case 'secondary':
            return {
              background: 'none',
              border: r.thinDefault,
              color: o.white,
              '&:hover': {
                background: o.default2,
                border: r.thinDefault2,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                background: o.default2,
                border: r.thinDefault2,
                color: o.white,
              },
            }
          case 'tertiary':
            return {
              background: 'none',
              border: '1px solid '.concat(o.transparent),
              color: o.foreground,
              '&:hover': { borderBottom: r.thinDefault200 },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
              '&:active': {
                borderBottom: r.thinDefault300,
                background: o['default-300'],
              },
            }
          case 'accent':
          case 'primary-accent':
            return u
          case 'secondary-accent':
            return {
              background: 'none',
              border: r.thinAccent,
              color: o.accent,
              '&:hover': {
                background: o.accent2,
                border: r.thinAccent2,
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
              '&:hover': { borderBottom: r.thinAccent },
              '&:active': {
                background: o.accent2,
                borderBottom: r.thinAccent,
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
              border: r.thinActive,
              color: o.white,
              '&:hover': {
                background: o.active2,
                border: r.thinActive2,
                color: o.white,
              },
              '&:active': {
                background: o.active,
                border: r.thinActive,
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
              borderBottom: r.thinActive,
              color: o.active,
              '&:hover': { borderBottom: r.thinActive2, color: o.active },
              '&:active': {
                background: o.active,
                borderBottom: r.thinActive,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'action':
          case 'primary-action':
            return c
          case 'secondary-action':
            return {
              background: 'none',
              border: r.thinAction,
              color: o.action,
              '&:hover': {
                background: o.action2,
                border: r.thinAction2,
                color: o.white,
              },
              '&:active': {
                background: o.action2,
                border: r.thinAction2,
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
              '&:hover': { borderBottom: r.thinAction },
              '&:active': {
                background: o.action2,
                borderBottom: r.thinAction,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'danger':
          case 'primary-danger':
            return i
          case 'secondary-danger':
            return {
              background: 'none',
              border: r.thinDanger,
              color: o.danger,
              '&:hover': {
                background: o.danger2,
                border: r.thinDanger2,
                color: o.white,
              },
              '&:active': {
                background: o.danger2,
                border: r.thinDanger2,
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
              '&:hover': { borderBottom: r.thinDanger },
              '&:active': {
                background: o.danger2,
                borderBottom: r.thinDanger,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'success':
          case 'primary-success':
            return b
          case 'secondary-success':
            return {
              background: 'none',
              border: r.thinSuccess,
              color: o.success,
              '&:hover': {
                background: o.success2,
                border: r.thinSuccess2,
                color: o.white,
              },
              '&:active': {
                background: o.success2,
                border: r.thinSuccess2,
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
              '&:hover': { borderBottom: r.thinSuccess },
              '&:active': {
                background: o.success2,
                borderBottom: r.thinSuccess,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'warning':
          case 'primary-warning':
            return d
          case 'secondary-warning':
            return {
              background: 'none',
              border: r.thinWarning,
              color: o.warning,
              '&:hover': {
                background: o.warning2,
                border: r.thinWarning2,
                color: o.white,
              },
              '&:active': {
                background: o.warning2,
                border: r.thinWarning2,
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
              '&:hover': { borderBottom: r.thinWarning },
              '&:active': {
                background: o.warning2,
                borderBottom: r.thinWarning,
                color: o.white,
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2em '.concat(o.outline),
                zIndex: 2,
              },
            }
          case 'disabled':
          case 'primary-disabled':
            return p
          case 'secondary-disabled':
            return {
              background: 'none',
              border: r.thinDisabled,
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
      function d(t) {
        var e = t.size,
          n = t.theme,
          o = n.font,
          r = n.unit
        switch (e) {
          case 1:
            return { padding: '0 '.concat(r[1]), fontSize: o.size[2] }
          case 2:
            return { padding: '0 '.concat(r[2]), fontSize: o.size[3] }
          case 3:
            return { padding: '0 '.concat(r[3]), fontSize: o.size[4] }
          case 4:
            return { padding: '0 '.concat(r[4]), fontSize: o.size[5] }
          case 5:
            return { padding: '0 '.concat(r[5]), fontSize: o.size[6] }
          case 6:
            return { padding: '0 '.concat(r[6]), fontSize: o.size[7] }
          case 7:
            return { padding: '0 '.concat(r[7]), fontSize: o.size[8] }
          case 8:
            return { padding: '0 '.concat(r[8]), fontSize: o.size[9] }
          case 9:
            return { padding: '0 '.concat(r[9]), fontSize: o.size[10] }
          case 10:
            return { padding: '0 '.concat(r[10]), fontSize: o.size[11] }
          default:
            return {}
        }
      }
      function p(t) {
        return t.stretch ? { width: '100%' } : {}
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
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonAppearanceTheme',
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
              name: 'buttonSizeTheme',
              filename: 'src/Button/button.theme.ts',
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
              name: 'buttonStretchTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        n.d(e, 'a', function() {
          return B
        })
      var B = a.a.memo(function(t) {
        var e = t.children,
          n = t.className,
          B = void 0 === n ? '' : n,
          s = t.onClick,
          m = t.as,
          l = void 0 === m ? 'button' : m,
          y = t.themed,
          x = void 0 === y ? [] : y,
          G = Object(r.a)(t, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          j = Object(u.useMemo)(
            function() {
              return 'Button '.concat(B)
            },
            [B]
          ),
          h = G.disabled,
          g = G.appearance,
          O = Object(u.useMemo)(
            function() {
              return [i, b, d, p].concat(Object(o.a)(x))
            },
            [i, b, d, p, x]
          ),
          T = Object(u.useCallback)(
            function(t) {
              t.preventDefault(), s && s(t)
            },
            [s]
          )
        return a.a.createElement(
          c.Base,
          Object.assign(
            {
              as: l,
              className: j,
              themed: O,
              onClick: T,
              role: 'button',
              tabIndex: 0,
            },
            h ||
              'disabled' === g ||
              'primary-disabled' === g ||
              'secondary-disabled' === g ||
              'tertiary-disabled' === g
              ? { disabled: !0 }
              : {},
            G
          ),
          e
        )
      })
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
      e.b = B
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
    },
    './src/ButtonGroup/ButtonGroup.tsx': function(t, e, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = n('./node_modules/react/index.js'),
        a = n.n(u),
        c = n('./src/Base/Base.tsx')
      function i(t) {
        var e = t.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: t.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: e ? 'column' : 'row',
        }
      }
      function b(t) {
        return t.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
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
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(e, 'c', function() {
          return p
        }),
        n.d(e, 'a', function() {
          return B
        })
      var d = a.a.createContext({})
      function p() {
        return Object(u.useContext)(d)
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupContext',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        }),
        p &&
          p === Object(p) &&
          Object.isExtensible(p) &&
          Object.defineProperty(p, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useButtonGroup',
              filename: 'src/ButtonGroup/ButtonGroup.tsx',
            },
          })
      var B = a.a.memo(function(t) {
        var e = t.children,
          n = t.className,
          p = void 0 === n ? '' : n,
          B = (t.onClick, t.themed),
          s = void 0 === B ? [] : B,
          m = Object(r.a)(t, ['children', 'className', 'onClick', 'themed']),
          l = Object(u.useMemo)(
            function() {
              return 'ButtonGroup '.concat(p)
            },
            [p]
          ),
          y = Object(u.useMemo)(
            function() {
              return [i, b].concat(Object(o.a)(s))
            },
            [i, b, s]
          ),
          x = m.appearance,
          G = m.context,
          j = m.size,
          h = m.stretch,
          g = Object(u.useMemo)(
            function() {
              return { appearance: x, context: G, size: j, stretch: h }
            },
            [x, G, j, h]
          )
        return a.a.createElement(
          d.Provider,
          { value: g },
          a.a.createElement(
            c.b,
            Object.assign({ role: 'group', className: l, themed: y }, m),
            e
          )
        )
      })
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
      e.b = B
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
    },
    './src/ButtonGroup/ButtonGroupButton.tsx': function(t, e, n) {
      'use strict'
      n.d(e, 'a', function() {
        return i
      })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = n('./node_modules/react/index.js'),
        u = n.n(r),
        a = n('./src/Button/Button.tsx'),
        c = n('./src/ButtonGroup/ButtonGroup.tsx'),
        i = u.a.memo(function(t) {
          var e = t.children,
            n = t.className,
            i = void 0 === n ? '' : n,
            b = t.themed,
            d = void 0 === b ? [] : b,
            p = Object(o.a)(t, ['children', 'className', 'themed']),
            B = Object(c.c)(),
            s = Object(r.useMemo)(
              function() {
                return 'ButtonGroupButton '.concat(i || '')
              },
              [i]
            )
          return u.a.createElement(
            a.b,
            Object.assign({ className: s }, B, { themed: d }, p),
            e
          )
        })
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupButton',
            filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
          },
        }),
        (e.b = i),
        'undefined' !== typeof i &&
          i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ButtonGroupButton',
              filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
            },
          })
    },
    './src/ButtonGroup/buttonGroup.mdx': function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'default', function() {
          return m
        })
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = n('./node_modules/react/index.js'),
        u = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        a = n('./node_modules/docz/dist/index.esm.js'),
        c = n('./src/Container/Container.tsx'),
        i = n('./src/Flex/Flex.tsx'),
        b = n('./src/ButtonGroup/ButtonGroupButton.tsx'),
        d = n('./src/ButtonGroup/ButtonGroup.tsx'),
        p = n('./src/ThemeContext/ThemeProvider.tsx'),
        B = {},
        s = 'wrapper'
      function m(t) {
        var e = t.components,
          n = Object(o.a)(t, ['components'])
        return Object(u.b)(
          s,
          Object.assign({}, B, n, { components: e, mdxType: 'MDXLayout' }),
          Object(u.b)('h1', { id: 'button-group' }, 'Button Group'),
          Object(u.b)(a.d, { of: d.a, mdxType: 'Props' }),
          Object(u.b)('h2', { id: 'appearance' }, 'Appearance'),
          Object(u.b)(
            a.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <h3>Default</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Accent</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary-accent">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary-accent">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary-accent">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Active</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary-active">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary-active">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary-active">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Action</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary-action">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary-action">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary-action">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Danger</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary-danger">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary-danger">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary-danger">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Success</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="primary-success">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="secondary-success">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup appearance="tertiary-success">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Warning</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup context="warning" appearance="primary-warning">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup context="warning" appearance="secondary-warning">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup context="warning" appearance="tertiary-warning">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n\n  <h3>Disable</h3>\n  <Flex widthSize="500px" wrap="wrap">\n    <Container margin3="bottom right">\n      <ButtonGroup context="disabled" appearance="primary-disabled">\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n        <ButtonGroupButton>Primary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup context="disabled" appearance="secondary-disabled">\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n        <ButtonGroupButton>Seconday</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n\n    <Container margin3="bottom right">\n      <ButtonGroup context="disabled" appearance="tertiary-disabled">\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n        <ButtonGroupButton>Tertiary</ButtonGroupButton>\n      </ButtonGroup>\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: r.Fragment,
                Playground: a.c,
                Props: a.d,
                Container: c.a,
                Flex: i.a,
                ButtonGroupButton: b.a,
                ButtonGroup: d.a,
                ThemeProvider: p.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)('h3', null, 'Default'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Accent'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary-accent', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary-accent', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary-accent', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Active'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary-active', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary-active', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary-active', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Action'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary-action', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary-action', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary-action', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Danger'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary-danger', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary-danger', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary-danger', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Success'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'primary-success', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'secondary-success', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    { appearance: 'tertiary-success', mdxType: 'ButtonGroup' },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Warning'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'warning',
                      appearance: 'primary-warning',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'warning',
                      appearance: 'secondary-warning',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'warning',
                      appearance: 'tertiary-warning',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              ),
              Object(u.b)('h3', null, 'Disable'),
              Object(u.b)(
                i.a,
                { widthSize: '500px', wrap: 'wrap', mdxType: 'Flex' },
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'disabled',
                      appearance: 'primary-disabled',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Primary'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'disabled',
                      appearance: 'secondary-disabled',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Seconday'
                    )
                  )
                ),
                Object(u.b)(
                  c.a,
                  { margin3: 'bottom right', mdxType: 'Container' },
                  Object(u.b)(
                    d.a,
                    {
                      context: 'disabled',
                      appearance: 'tertiary-disabled',
                      mdxType: 'ButtonGroup',
                    },
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    ),
                    Object(u.b)(
                      b.a,
                      { mdxType: 'ButtonGroupButton' },
                      'Tertiary'
                    )
                  )
                )
              )
            )
          ),
          Object(u.b)('h2', { id: 'size' }, 'Size'),
          Object(u.b)(
            p.a,
            { mdxType: 'ThemeProvider' },
            Object(u.b)(
              'table',
              null,
              Object(u.b)(
                'thead',
                null,
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('th', null, 'Prop'),
                  Object(u.b)('th', null, 'Example')
                )
              ),
              Object(u.b)(
                'tbody',
                null,
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '1'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 1, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '2'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 2, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '3'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 3, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '4'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 4, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '5'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 5, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '6'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 6, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '7'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 7, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '8'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 8, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '9'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 9, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'tr',
                  null,
                  Object(u.b)('td', null, '10'),
                  Object(u.b)(
                    'td',
                    null,
                    Object(u.b)(
                      d.a,
                      { size: 10, mdxType: 'ButtonGroup' },
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      ),
                      Object(u.b)(
                        b.a,
                        { mdxType: 'ButtonGroupButton' },
                        'Button'
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(u.b)('h2', { id: 'stacked' }, 'Stacked'),
          Object(u.b)(
            a.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <ButtonGroup stacked>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n  </ButtonGroup>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: r.Fragment,
                Playground: a.c,
                Props: a.d,
                Container: c.a,
                Flex: i.a,
                ButtonGroupButton: b.a,
                ButtonGroup: d.a,
                ThemeProvider: p.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                d.a,
                { stacked: !0, mdxType: 'ButtonGroup' },
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button'),
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button'),
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button')
              )
            )
          ),
          Object(u.b)('h2', { id: 'stretch' }, 'Stretch'),
          Object(u.b)(
            a.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <ButtonGroup stretch>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n    <ButtonGroupButton>Button</ButtonGroupButton>\n  </ButtonGroup>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: r.Fragment,
                Playground: a.c,
                Props: a.d,
                Container: c.a,
                Flex: i.a,
                ButtonGroupButton: b.a,
                ButtonGroup: d.a,
                ThemeProvider: p.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                d.a,
                { stretch: !0, mdxType: 'ButtonGroup' },
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button'),
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button'),
                Object(u.b)(b.a, { mdxType: 'ButtonGroupButton' }, 'Button')
              )
            )
          )
        )
      }
      m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'MDXContent',
            filename: 'src/ButtonGroup/buttonGroup.mdx',
          },
        }),
        (m.isMDXComponent = !0)
    },
    './src/Container/Container.tsx': function(t, e, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = n('./node_modules/react/index.js'),
        a = n.n(u),
        c = n('./src/Base/index.tsx')
      function i(t) {
        var e = t.appearance,
          n = t.theme,
          o = n.border,
          r = n.color,
          u = {
            color: r['accent-050'],
            backgroundColor: r['accent-500'],
            border: '1px solid '.concat(r['accent-500']),
          },
          a = {
            color: r['action-050'],
            backgroundColor: r['action-500'],
            border: '1px solid '.concat(r['action-500']),
          },
          c = {
            color: r['danger-050'],
            backgroundColor: r['danger-500'],
            border: '1px solid '.concat(r['danger-500']),
          },
          i = {
            color: r['success-050'],
            backgroundColor: r['success-500'],
            border: '1px solid '.concat(r['success-500']),
          },
          b = {
            color: r['warning-050'],
            backgroundColor: r['warning-500'],
            border: '1px solid '.concat(r['warning-500']),
          }
        switch (e) {
          case 'primary':
            return {
              color: r.foregroundInvert,
              backgroundColor: r.backgroundInvert,
              border: o.thinTransparent,
            }
          case 'secondary':
            return {
              color: r['grey-800'],
              backgroundColor: r['grey-100'],
              border: '1px solid '.concat(r['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: o.thin }
          case 'accent':
          case 'primary-accent':
            return u
          case 'secondary-accent':
            return {
              color: r['accent-800'],
              backgroundColor: r['accent-100'],
              border: '1px solid '.concat(r['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: r['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(r['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return a
          case 'secondary-action':
            return {
              color: r['action-800'],
              backgroundColor: r['action-100'],
              border: '1px solid '.concat(r['action-100']),
            }
          case 'tertiary-action':
            return {
              color: r['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(r['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return c
          case 'secondary-danger':
            return {
              color: r['danger-800'],
              backgroundColor: r['danger-300'],
              border: '1px solid '.concat(r['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: r['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(r['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return i
          case 'secondary-success':
            return {
              color: r['success-800'],
              backgroundColor: r['success-300'],
              border: '1px solid '.concat(r['success-300']),
            }
          case 'tertiary-success':
            return {
              color: r['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(r['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return b
          case 'secondary-warning':
            return {
              color: r['warning-800'],
              backgroundColor: r['warning-300'],
              border: '1px solid '.concat(r['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: r['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(r['warning-300']),
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
        n.d(e, 'a', function() {
          return b
        })
      var b = a.a.memo(function(t) {
        var e = t.children,
          n = t.className,
          b = void 0 === n ? '' : n,
          d = t.themed,
          p = void 0 === d ? [] : d,
          B = Object(r.a)(t, ['children', 'className', 'themed']),
          s = Object(u.useMemo)(
            function() {
              return 'Container '.concat(b)
            },
            [b]
          ),
          m = Object(u.useMemo)(
            function() {
              return [i].concat(Object(o.a)(p))
            },
            [i, p]
          )
        return a.a.createElement(
          c.Base,
          Object.assign({ className: s, themed: m }, B),
          e
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      e.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Flex/Flex.tsx': function(t, e, n) {
      'use strict'
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = n('./node_modules/react/index.js'),
        a = n.n(u),
        c = n('./node_modules/lodash/kebabCase.js'),
        i = n.n(c)
      function b(t) {
        var e = t.alignItems,
          n = t.basis,
          o = t.display,
          r = t.grow,
          u = t.justifyContent,
          a = t.shrink,
          c = t.wrap
        return {
          display: o || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: r ? ''.concat(r) : '',
          shrink: a ? ''.concat(a) : '',
          justifyContent: (u && [i()(u)]) || '',
          alignItems: (e && [i()(e)]) || '',
          flexWrap: (c && [i()(c)]) || '',
        }
      }
      function d(t) {
        switch (t.direction) {
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
      var p = n('./src/Base/index.tsx')
      n.d(e, 'a', function() {
        return B
      })
      var B = a.a.memo(function(t) {
        var e = t.children,
          n = t.className,
          c = void 0 === n ? '' : n,
          i = t.themed,
          B = void 0 === i ? [] : i,
          s = Object(r.a)(t, ['children', 'className', 'themed']),
          m = Object(u.useMemo)(
            function() {
              return 'Flex '.concat(c)
            },
            [c]
          ),
          l = Object(u.useMemo)(
            function() {
              return [b, d].concat(Object(o.a)(B))
            },
            [b, d, B]
          )
        return a.a.createElement(
          p.Base,
          Object.assign({ className: m, themed: l }, s),
          e
        )
      })
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      e.b = B
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
  },
])
//# sourceMappingURL=src-button-group-button-group.30387d098bf5891c84b1.js.map
