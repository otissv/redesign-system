;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    './src/Button/Button.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        i = n('./src/Base/index.tsx')
      function s(e) {
        var t = e.theme,
          n = t.animation,
          r = t.color,
          o = t.border,
          a = t.font,
          c = t.unit,
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
          padding: '0 '.concat(c[3]),
          textAlign: 'center',
          transition: n.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: r.default2, borderBottom: o.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(r.outline), zIndex: 2 },
          '&:active': i,
        }
      }
      function d(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.color,
          o = n.border,
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
          c = {
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
          s = {
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
          u = {
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
          l = {
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
        switch (t) {
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
            return c
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
            return s
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
            return u
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
            return l
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
      function u(e) {
        var t = e.size,
          n = e.theme,
          r = n.font,
          o = n.unit
        switch (t) {
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
        'undefined' !== typeof l &&
          l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
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
      var b = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          m = e.onClick,
          f = e.as,
          p = void 0 === f ? 'button' : f,
          g = e.themed,
          h = void 0 === g ? [] : g,
          y = Object(o.a)(e, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          v = Object(a.useMemo)(
            function() {
              return 'Button '.concat(b)
            },
            [b]
          ),
          x = y.disabled,
          j = y.appearance,
          O = Object(a.useMemo)(
            function() {
              return [s, d, u, l].concat(Object(r.a)(h))
            },
            [s, d, u, l, h]
          ),
          k = Object(a.useCallback)(
            function(e) {
              e.preventDefault(), m && m(e)
            },
            [m]
          )
        return c.a.createElement(
          i.Base,
          Object.assign(
            {
              as: p,
              className: v,
              themed: O,
              onClick: k,
              role: 'button',
              tabIndex: 0,
            },
            x ||
              'disabled' === j ||
              'primary-disabled' === j ||
              'secondary-disabled' === j ||
              'tertiary-disabled' === j
              ? { disabled: !0 }
              : {},
            y
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
    './src/Button/button.types.ts': function(e, t) {
      'undefined' !== typeof ButtonInterface &&
        ButtonInterface &&
        ButtonInterface === Object(ButtonInterface) &&
        Object.isExtensible(ButtonInterface) &&
        Object.defineProperty(ButtonInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonInterface',
            filename: 'src/Button/button.types.ts',
          },
        })
    },
    './src/Button/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Button/Button.tsx')
      n.d(t, 'Button', function() {
        return r.a
      })
      n('./src/Button/button.types.ts')
    },
    './src/ButtonIcon/ButtonIcon.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        i = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        )
      function s(e) {
        var t = e.dimension,
          n = e.theme,
          r = n.animation,
          o = n.unit
        return Object(i.a)(
          {
            position: 'relative',
            whiteSpace: 'nowrap',
            transition: r.easeFast(),
            lineHeight: 'inherit',
          },
          t ? { height: t, width: t, padding: 0 } : {},
          {
            '>svg.Icon': Object(i.a)(
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonIconTheme',
            filename: 'src/ButtonIcon/buttonIcon.theme.ts',
          },
        })
      var d = n('./src/Button/Button.tsx')
      n.d(t, 'a', function() {
        return u
      })
      var u = c.a.memo(function(e) {
        var t = e.alt,
          n = e.children,
          i = e.className,
          u = void 0 === i ? '' : i,
          l = e.height,
          b = void 0 === l ? '24px' : l,
          m = e.icon,
          f = e.iconProps,
          p = e.onClick,
          g = e.themed,
          h = void 0 === g ? [] : g,
          y = (e.title, e.uid),
          v = e.viewBox,
          x = void 0 === v ? '0 0 24 24' : v,
          j = e.width,
          O = void 0 === j ? '24px' : j,
          k = Object(o.a)(e, [
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
          _ = Object(a.useMemo)(
            function() {
              return 'ButtonIcon '.concat(u)
            },
            [u]
          ),
          w = Object(a.useMemo)(
            function() {
              return [s].concat(Object(r.a)(h))
            },
            [s, h]
          )
        return c.a.createElement(
          d.b,
          Object.assign(
            {
              className: _,
              'data-uid': y,
              onClick: p,
              themed: w,
              width: O,
              height: b,
              viewBox: x,
            },
            k
          ),
          c.a.createElement(m, Object.assign({ alt: t }, f)),
          n
            ? c.a.createElement('span', { className: 'ButtonIconContent' }, n)
            : null
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
            name: 'ButtonIcon',
            filename: 'src/ButtonIcon/ButtonIcon.tsx',
          },
        })
      t.b = u
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
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
      var r = n('./src/ButtonIcon/ButtonIcon.tsx')
      n.d(t, 'ButtonIcon', function() {
        return r.a
      })
      n('./src/ButtonIcon/buttonIcon.types.ts')
    },
    './src/Container/Container.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        i = n('./src/Base/index.tsx')
      function s(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.border,
          o = n.color,
          a = {
            color: o['accent-050'],
            backgroundColor: o['accent-500'],
            border: '1px solid '.concat(o['accent-500']),
          },
          c = {
            color: o['action-050'],
            backgroundColor: o['action-500'],
            border: '1px solid '.concat(o['action-500']),
          },
          i = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          s = {
            color: o['success-050'],
            backgroundColor: o['success-500'],
            border: '1px solid '.concat(o['success-500']),
          },
          d = {
            color: o['warning-050'],
            backgroundColor: o['warning-500'],
            border: '1px solid '.concat(o['warning-500']),
          }
        switch (t) {
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
            return c
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
            return s
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return d
        })
      var d = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          d = void 0 === n ? '' : n,
          u = e.themed,
          l = void 0 === u ? [] : u,
          b = Object(o.a)(e, ['children', 'className', 'themed']),
          m = Object(a.useMemo)(
            function() {
              return 'Container '.concat(d)
            },
            [d]
          ),
          f = Object(a.useMemo)(
            function() {
              return [s].concat(Object(r.a)(l))
            },
            [s, l]
          )
        return c.a.createElement(
          i.Base,
          Object.assign({ className: m, themed: f }, b),
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
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      t.b = d
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
    './src/Container/container.types.ts': function(e, t) {
      'undefined' !== typeof ContainerInterface &&
        ContainerInterface &&
        ContainerInterface === Object(ContainerInterface) &&
        Object.isExtensible(ContainerInterface) &&
        Object.defineProperty(ContainerInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ContainerInterface',
            filename: 'src/Container/container.types.ts',
          },
        })
    },
    './src/Container/index.tsx': function(e, t, n) {
      'use strict'
      var r = n('./src/Container/Container.tsx')
      n.d(t, 'Container', function() {
        return r.a
      })
      n('./src/Container/container.types.ts')
    },
    './src/Icon/Icon.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        i = n.n(c)
      function s(e) {
        var t = e.hoverColor
        return Object(r.a)(
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
      function d(e) {
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
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
      var u = n('./src/Base/Base.tsx')
      n.d(t, 'a', function() {
        return l
      })
      var l = i.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          l = void 0 === n ? '' : n,
          b = e.height,
          m = void 0 === b ? '24px' : b,
          f = e.themed,
          p = void 0 === f ? [] : f,
          g = e.title,
          h = e.viewBox,
          y = void 0 === h ? '0 0 24 24' : h,
          v = e.width,
          x = void 0 === v ? '24px' : v,
          j = Object(a.a)(e, [
            'children',
            'className',
            'height',
            'themed',
            'title',
            'viewBox',
            'width',
          ]),
          O = Object(c.useMemo)(
            function() {
              return 'Icon '.concat(l)
            },
            [l]
          ),
          k = Object(c.useMemo)(
            function() {
              return [s, d].concat(Object(o.a)(p))
            },
            [s, d, p]
          ),
          _ = Object(r.a)({ height: m, viewBox: y, width: x }, j)
        return i.a.createElement(
          u.b,
          Object.assign(
            {
              as: 'svg',
              className: O,
              themed: k,
              xmlns: 'http://www.w3.org/2000/svg',
            },
            _
          ),
          g ? i.a.createElement('title', null, g) : null,
          t
        )
      })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
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
      var r = n('./src/Icon/Icon.tsx')
      n.d(t, 'Icon', function() {
        return r.a
      })
      n('./src/Icon/icon.types.ts')
    },
    './src/MaterialIcons/Close.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var r = n('./node_modules/react/index.js'),
        o = n.n(r),
        a = n('./src/Icon/index.ts')
      function c(e) {
        return o.a.createElement(
          a.Icon,
          e,
          o.a.createElement('path', {
            d:
              'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Close', filename: 'src/MaterialIcons/Close.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Close', filename: 'src/MaterialIcons/Close.tsx' },
          })
    },
    './src/Portal/Portal.ts': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var r = n('./node_modules/react/index.js'),
        o = n.n(r),
        a = n('./node_modules/react-dom/index.js'),
        c = o.a.memo(function(e) {
          var t = e.children,
            n = e.rootRef,
            o = Object(r.useRef)(document.createElement('div'))
          return (
            Object(r.useLayoutEffect)(
              function() {
                return (
                  n.current && n.current.appendChild(o.current),
                  function() {
                    n.current && n.current.removeChild(o.current)
                  }
                )
              },
              [n.current, o.current]
            ),
            Object(a.createPortal)(t, n.current)
          )
        })
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Portal', filename: 'src/Portal/Portal.ts' },
        })
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Portal', filename: 'src/Portal/Portal.ts' },
        })
    },
    './src/Portal/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Portal/Portal.ts')
      n.d(t, 'Portal', function() {
        return r.a
      })
      n('./src/Portal/portal.types.ts')
    },
    './src/Portal/portal.types.ts': function(e, t) {
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
    './src/Toast/toast.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        a = n.n(o),
        c = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        i = n('./node_modules/docz/dist/index.esm.js'),
        s = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        d = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        u = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        b = n('./node_modules/react-pose/dist/react-pose.es.js'),
        m = n('./src/MaterialIcons/Close.tsx'),
        f = n('./src/Base/Base.tsx'),
        p = n('./src/ButtonIcon/index.ts'),
        g = n('./src/Portal/index.ts')
      function h(e) {
        var t = e.theme,
          n = t.animation,
          r = t.border,
          o = t.font,
          a = t.unit
        return {
          position: 'fixed',
          top: a[3],
          left: a[3],
          lineHeight: o.lineHeight.default,
          cursor: 'pointer',
          borderRadius: r.radius,
          zIndex: 1040,
          width: '350px',
          transition: n.easeMedium(),
        }
      }
      function y(e) {
        var t = e.position,
          n = e.theme.unit
        switch (t) {
          case 'top-center':
            return { left: '50%', right: 'auto' }
          case 'top-left':
            return { left: n[3], right: 'auto' }
          case 'top-right':
            return { right: n[3], left: 'auto' }
          case 'bottom-center':
            return { left: '50%', right: 'auto' }
          case 'bottom-left':
            return { top: n[3], left: n[3], right: 'auto' }
          case 'bottom-right':
            return { top: 0, right: n[3], left: 'auto' }
          default:
            return {}
        }
      }
      function v(e) {
        var t = e.theme,
          n = t.color,
          r = t.elevate,
          o = t.unit
        return {
          position: 'relative',
          background: n.background,
          width: '300px',
          minHeight: '50px',
          marginTop: '5px',
          zIndex: '100',
          boxShadow: r[5],
          padding: o[5],
        }
      }
      function x(e) {
        var t = e.theme.color
        return {
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'none',
          borderColor: '#0000',
          color: t['grey-300'],
          padding: 0,
          margin: '5px 5px 0 0',
          '&:hover': {
            background: 'inherit',
            borderColor: '#0000',
            color: t.foreground,
          },
          '&:active': {
            background: 'inherit',
            borderColor: '#0000',
            color: t['grey-500'],
          },
        }
      }
      function j(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.color,
          o = n.border
        switch (t) {
          case 'secondary':
            return {
              border: ''.concat(o.thinWidth, ' solid ').concat(r.foreground),
              color: r.foreground,
            }
          case 'tertiary':
            return {
              borderLeft: ''
                .concat(o.thickWidth, ' solid ')
                .concat(r.foreground),
              color: r.foreground,
            }
          case 'accent':
          case 'primary-accent':
            return { background: r.accent, border: o.thinAccent }
          case 'secondary-accent':
            return { border: o.thinAccent }
          case 'tertiary-accent':
            return { borderLeft: o.thickAccent }
          case 'action':
          case 'primary-action':
            return { background: r.action, border: o.thinAction }
          case 'secondary-action':
            return { border: o.thinAction }
          case 'tertiary-action':
            return { borderLeft: o.thickAction }
          case 'danger':
          case 'primary-danger':
            return { background: r.danger, border: o.thinDanger }
          case 'secondary-danger':
            return { border: o.thinDanger }
          case 'tertiary-danger':
            return { borderLeft: o.thickDanger }
          case 'success':
          case 'primary-success':
            return { background: r.success, border: o.thinSuccess }
          case 'secondary-success':
            return { border: o.thinSuccess }
          case 'tertiary-success':
            return { borderLeft: o.thickSuccess }
          case 'warning':
          case 'primary-warning':
            return { background: r.warning, border: o.thinWarning }
          case 'secondary-warning':
            return { border: o.thinWarning }
          case 'tertiary-warning':
            return { borderLeft: o.thickWarning }
          default:
            return {}
        }
      }
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'toastTheme', filename: 'src/Toast/toast.theme.ts' },
        }),
        'undefined' !== typeof y &&
          y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toastPositionTheme',
              filename: 'src/Toast/toast.theme.ts',
            },
          }),
        v &&
          v === Object(v) &&
          Object.isExtensible(v) &&
          Object.defineProperty(v, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toastNotificationTheme',
              filename: 'src/Toast/toast.theme.ts',
            },
          }),
        'undefined' !== typeof x &&
          x &&
          x === Object(x) &&
          Object.isExtensible(x) &&
          Object.defineProperty(x, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toastNotificationCloseButtonTheme',
              filename: 'src/Toast/toast.theme.ts',
            },
          }),
        j &&
          j === Object(j) &&
          Object.isExtensible(j) &&
          Object.defineProperty(j, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toastNotificationAppearanceTheme',
              filename: 'src/Toast/toast.theme.ts',
            },
          })
      var O = a.a.memo(function(e) {
          var t = e.onClose,
            n = e.uid,
            c = e.themed,
            i = void 0 === c ? [] : c,
            s = Object(r.a)(e, ['onClose', 'uid', 'themed']),
            u = Object(o.useMemo)(
              function() {
                return [x].concat(Object(d.a)(i))
              },
              [x, i]
            )
          return a.a.createElement(
            p.ButtonIcon,
            Object.assign(
              {
                className: 'ToastNotificationCloseButton',
                onClick: t,
                icon: m.a,
                title: 'Close',
              },
              s,
              { uid: n, themed: u }
            )
          )
        }),
        k = a.a.memo(function(e) {
          var t = e.animate,
            n = (e.children, e.className),
            c = void 0 === n ? '' : n,
            i = e.notifications,
            s = e.onClose,
            u = e.themed,
            m = void 0 === u ? [] : u,
            p = Object(r.a)(e, [
              'animate',
              'children',
              'className',
              'notifications',
              'onClose',
              'themed',
            ]),
            x = Object(o.useMemo)(
              function() {
                return 'ToastNotification '.concat(c)
              },
              [c]
            ),
            k = Object(o.useMemo)(
              function() {
                return [h, y].concat(Object(d.a)(m))
              },
              [h, y, m]
            ),
            _ = Object(o.useMemo)(
              function() {
                return [v, j]
              },
              [v, j]
            ),
            w = Object(o.useRef)(document.getElementsByTagName('body')[0]),
            I = Object(o.useMemo)(
              function() {
                return (
                  t || {
                    enter: {
                      y: 0,
                      transition: {
                        y: { type: 'spring', stiffness: 1e3, damping: 100 },
                        default: { duration: 300 },
                      },
                    },
                    exit: { y: -500, transition: { duration: 300 } },
                  }
                )
              },
              [t]
            ),
            C = i
              .map(function(e) {
                var t = e.id,
                  n = e.component,
                  r = a.a.createElement(
                    n.type,
                    Object(l.a)({}, n.props, { appearance: null }),
                    n.props.children
                  )
                return a.a.createElement(
                  f.b,
                  {
                    className: 'Notification',
                    animate: I,
                    appearance: n.props.appearance,
                    key: t,
                    themed: _,
                  },
                  r,
                  a.a.createElement(O, { onClose: s, uid: t, alt: 'close' })
                )
              })
              .reverse()
          return a.a.createElement(
            g.Portal,
            { rootRef: w },
            a.a.createElement(
              f.b,
              Object.assign({ className: x, element: 'ul', themed: k }, p),
              a.a.createElement(b.a, null, C)
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
          value: {
            name: 'ToastNotification',
            filename: 'src/Toast/ToastNotification.tsx',
          },
        })
      var _ = k
      'undefined' !== typeof k &&
        k &&
        k === Object(k) &&
        Object.isExtensible(k) &&
        Object.defineProperty(k, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToastNotification',
            filename: 'src/Toast/ToastNotification.tsx',
          },
        })
      var w = n('./node_modules/lodash/difference.js'),
        I = n.n(w),
        C = a.a.createContext({})
      'undefined' !== typeof C &&
        C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ToastContext', filename: 'src/Toast/Toast.tsx' },
        })
      var B = a.a.memo(function(e) {
        var t = e.children,
          n = (e.messages, e.timeout),
          c = void 0 === n ? 3e3 : n,
          i = e.themed,
          s = void 0 === i ? [] : i,
          l = Object(r.a)(e, ['children', 'messages', 'timeout', 'themed']),
          b = Object(o.useState)([]),
          m = Object(u.a)(b, 2),
          f = m[0],
          p = m[1],
          g = Object(o.useRef)([])
        Object(o.useEffect)(
          function() {
            var e = t.map(function(e) {
              return { id: e.key, component: e }
            })
            ;(g.current = I()(e, f)),
              p([].concat(Object(d.a)(f), Object(d.a)(g.current)))
          },
          [t]
        ),
          Object(o.useEffect)(
            function() {
              var e = setTimeout(function() {
                p(
                  f.filter(function(e) {
                    return (
                      e.component.props.sticky ||
                      !g.current.filter(
                        (function(e) {
                          return function(t) {
                            return t.id === e.id
                          }
                        })(e)
                      )
                    )
                  })
                )
              }, c)
              return function() {
                clearTimeout(e)
              }
            },
            [g.current, c]
          )
        var h = Object(o.useMemo)(
            function() {
              return function(e) {
                e.preventDefault()
                var t = function(t) {
                  return t.id !== e.currentTarget.dataset.uid
                }
                p(f.filter(t)), (g.current = g.current.filter(t))
              }
            },
            [p]
          ),
          y = Object(o.useMemo)(
            function() {
              return { notifications: f, setNotification: p }
            },
            [f, p]
          )
        return a.a.createElement(
          C.Provider,
          { value: y },
          a.a.createElement(
            k,
            Object.assign({ themed: s, notifications: f }, l, { onClose: h })
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
          value: { name: 'Toast', filename: 'src/Toast/Toast.tsx' },
        })
      var E = B
      'undefined' !== typeof B &&
        B &&
        B === Object(B) &&
        Object.isExtensible(B) &&
        Object.defineProperty(B, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Toast', filename: 'src/Toast/Toast.tsx' },
        })
      var P = n('./src/Container/index.tsx'),
        T = n('./node_modules/cuid/index.js'),
        z = n.n(T),
        S = n('./src/Button/index.ts')
      function A(e) {
        var t = e.children,
          n = Object(o.useState)([]),
          r = Object(u.a)(n, 2),
          c = r[0],
          i = r[1],
          s = Object(o.useRef)(1),
          d = Object(o.useCallback)(
            function(e) {
              e.preventDefault(),
                i([
                  {
                    id: z()(),
                    message: ''
                      .concat(
                        e.currentTarget.dataset.sticky ? 'Stick ' : '',
                        ' Item '
                      )
                      .concat(s.current),
                    sticky: e.currentTarget.dataset.sticky,
                    appearance: e.currentTarget.dataset.appearance,
                  },
                ]),
                (s.current = s.current + 1)
            },
            [z.a]
          )
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement('h3', null, 'Default'),
            a.a.createElement(
              S.Button,
              { margin3: 'right bottom', onClick: d },
              'Default'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary',
                'data-appearance': 'secondary',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary',
                'data-appearance': 'tertiary',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          a.a.createElement('h3', null, 'Accent'),
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'primary-accent',
                'data-appearance': 'primary-accent',
                onClick: d,
              },
              'Primary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary-accent',
                'data-appearance': 'secondary-accent',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary-accent',
                'data-appearance': 'tertiary-accent',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          a.a.createElement('h3', null, 'Action'),
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'action',
                'data-appearance': 'primary-action',
                onClick: d,
              },
              'Primary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary-action',
                'data-appearance': 'secondary-action',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary-action',
                'data-appearance': 'tertiary-action',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          a.a.createElement('h3', null, 'Danger'),
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'danger',
                'data-appearance': 'primary-danger',
                onClick: d,
              },
              'Primary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary-danger',
                'data-appearance': 'secondary-danger',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary-danger',
                'data-appearance': 'tertiary-danger',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          a.a.createElement('h3', null, 'Success'),
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'success',
                'data-appearance': 'success',
                onClick: d,
              },
              'Primary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary-success',
                'data-appearance': 'secondary-success',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary-success',
                'data-appearance': 'tertiary-success',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          a.a.createElement('h3', null, 'Warning'),
          a.a.createElement(
            P.Container,
            { margin5: 'bottom' },
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'warning',
                'data-appearance': 'warning',
                onClick: d,
              },
              'Primary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'secondary-warning',
                'data-appearance': 'secondary-warning',
                onClick: d,
              },
              'Secondary'
            ),
            a.a.createElement(
              S.Button,
              {
                margin3: 'right bottom',
                appearance: 'tertiary-warning',
                'data-appearance': 'tertiary-warning',
                onClick: d,
              },
              'Tertiary'
            )
          ),
          t(c)
        )
      }
      A &&
        A === Object(A) &&
        Object.isExtensible(A) &&
        Object.defineProperty(A, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToastExample',
            filename: 'src/Toast/toast.example.tsx',
          },
        })
      var D = n('./src/ThemeContext/ThemeProvider.tsx')
      n.d(t, 'default', function() {
        return W
      })
      var N = {},
        M = 'wrapper'
      function W(e) {
        var t = e.components,
          n = Object(r.a)(e, ['components'])
        return Object(c.b)(
          M,
          Object.assign({}, N, n, { components: t, mdxType: 'MDXLayout' }),
          Object(c.b)('h1', { id: 'toast' }, 'Toast'),
          Object(c.b)('h2', { id: 'default' }, 'Default'),
          Object(c.b)(
            i.c,
            {
              __position: 0,
              __code:
                '<ThemeProvider>\n  <ToastExample>\n    {messages => (\n      <Toast uid="notify1" position="top-left">\n        {messages.map(({ appearance, id, message, sticky }) => {\n          return (\n            <Container appearance={appearance} key={id} sticky={sticky}>\n              {message} :)\n            </Container>\n          )\n        })}\n      </Toast>\n    )}\n  </ToastExample>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                styled: s.default,
                Toast: E,
                ToastNotification: _,
                Container: P.Container,
                ToastExample: A,
                ThemeProvider: D.a,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              D.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(A, { mdxType: 'ToastExample' }, function(e) {
                return Object(c.b)(
                  E,
                  { uid: 'notify1', position: 'top-left', mdxType: 'Toast' },
                  e.map(function(e) {
                    var t = e.appearance,
                      n = e.id,
                      r = e.message,
                      o = e.sticky
                    return Object(
                      c.b
                    )(P.Container, { appearance: t, key: n, sticky: o, mdxType: 'Container' }, r, ' :)')
                  })
                )
              })
            )
          )
        )
      }
      W &&
        W === Object(W) &&
        Object.isExtensible(W) &&
        Object.defineProperty(W, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Toast/toast.mdx' },
        }),
        (W.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-toast-toast.32c7f5165ad4b98a68ed.js.map
