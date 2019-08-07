;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        i = n('./node_modules/lodash/kebabCase.js'),
        s = n.n(i)
      function d(e) {
        var t = e.alignItems,
          n = e.basis,
          r = e.display,
          o = e.grow,
          a = e.justifyContent,
          c = e.shrink,
          i = e.wrap
        return {
          display: r || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: o ? ''.concat(o) : '',
          shrink: c ? ''.concat(c) : '',
          justifyContent: (a && [s()(a)]) || '',
          alignItems: (t && [s()(t)]) || '',
          flexWrap: (i && [s()(i)]) || '',
        }
      }
      function u(e) {
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
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var l = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return b
      })
      var b = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? '' : n,
          s = e.themed,
          b = void 0 === s ? [] : s,
          m = Object(o.a)(e, ['children', 'className', 'themed']),
          p = Object(a.useMemo)(
            function() {
              return 'Flex '.concat(i)
            },
            [i]
          ),
          f = Object(a.useMemo)(
            function() {
              return [d, u].concat(Object(r.a)(b))
            },
            [d, u, b]
          )
        return c.a.createElement(
          l.Base,
          Object.assign({ className: p, themed: f }, m),
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
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      t.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Flex/flex.types.ts': function(e, t) {
      'undefined' !== typeof AlignItemsType &&
        AlignItemsType &&
        AlignItemsType === Object(AlignItemsType) &&
        Object.isExtensible(AlignItemsType) &&
        Object.defineProperty(AlignItemsType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AlignItemsType', filename: 'src/Flex/flex.types.ts' },
        }),
        'undefined' !== typeof AlignContentType &&
          AlignContentType &&
          AlignContentType === Object(AlignContentType) &&
          Object.isExtensible(AlignContentType) &&
          Object.defineProperty(AlignContentType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'AlignContentType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof JustifyContentType &&
          JustifyContentType &&
          JustifyContentType === Object(JustifyContentType) &&
          Object.isExtensible(JustifyContentType) &&
          Object.defineProperty(JustifyContentType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'JustifyContentType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof JustifyItemsType &&
          JustifyItemsType &&
          JustifyItemsType === Object(JustifyItemsType) &&
          Object.isExtensible(JustifyItemsType) &&
          Object.defineProperty(JustifyItemsType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'JustifyItemsType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof DirectionType &&
          DirectionType &&
          DirectionType === Object(DirectionType) &&
          Object.isExtensible(DirectionType) &&
          Object.defineProperty(DirectionType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'DirectionType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof WrapType &&
          WrapType &&
          WrapType === Object(WrapType) &&
          Object.isExtensible(WrapType) &&
          Object.defineProperty(WrapType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'WrapType', filename: 'src/Flex/flex.types.ts' },
          }),
        'undefined' !== typeof FlexInterface &&
          FlexInterface &&
          FlexInterface === Object(FlexInterface) &&
          Object.isExtensible(FlexInterface) &&
          Object.defineProperty(FlexInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'FlexInterface',
              filename: 'src/Flex/flex.types.ts',
            },
          })
    },
    './src/Flex/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Flex/Flex.tsx')
      n.d(t, 'Flex', function() {
        return r.a
      })
      n('./src/Flex/flex.types.ts')
    },
    './src/Input/Input.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
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
        i = n.n(c),
        s = n('./src/Base/index.tsx'),
        d = n('./src/Input/input.theme.ts'),
        u = i.a.memo(function(e) {
          var t = e.children,
            n = e.className,
            u = void 0 === n ? '' : n,
            l = e.context,
            b = void 0 === l ? null : l,
            m = e.onBlur,
            p = void 0 === m ? function() {} : m,
            f = e.onChange,
            g = void 0 === f ? function() {} : f,
            y = e.onFocus,
            h = void 0 === y ? function() {} : y,
            v = e.placeholder,
            x = void 0 === v ? null : v,
            j = e.size,
            O = void 0 === j ? null : j,
            w = e.themed,
            _ = void 0 === w ? [] : w,
            I = e.valid,
            k = void 0 === I || I,
            T = e.widths,
            z = void 0 === T ? null : T,
            F = Object(a.a)(e, [
              'children',
              'className',
              'context',
              'onBlur',
              'onChange',
              'onFocus',
              'placeholder',
              'size',
              'themed',
              'valid',
              'widths',
            ]),
            P = Object(c.useMemo)(
              function() {
                return 'Input '.concat(u)
              },
              [u]
            ),
            B = Object(c.useMemo)(
              function() {
                return [d.c, d.a, d.b, d.d].concat(Object(o.a)(_))
              },
              [d.c, d.a, d.b, d.d, _]
            ),
            S = Object(c.useMemo)(
              function() {
                return (
                  'disabled' === F.appearance ||
                  'primary-disabled' === F.appearance ||
                  'secondary-disabled' === F.appearance ||
                  'tertiary-disabled' === F.appearance
                )
              },
              [F.appearance]
            ),
            E = Object(r.a)(
              {
                context: b,
                onBlur: p,
                onChange: g,
                onFocus: h,
                placeholder: x,
                size: O,
                widths: z,
              },
              F
            )
          return i.a.createElement(
            s.Base,
            Object.assign(
              {
                as: 'input',
                className: P,
                themed: B,
                disabled: S,
                'aria-invalid': k,
              },
              E
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
          value: { name: 'Input', filename: 'src/Input/Input.tsx' },
        }),
        (t.b = u),
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Input', filename: 'src/Input/Input.tsx' },
          })
    },
    './src/Input/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Input/Input.tsx')
      n.d(t, 'Input', function() {
        return r.a
      })
      n('./src/Input/input.types.ts')
    },
    './src/Input/input.theme.ts': function(e, t, n) {
      'use strict'
      function r(e) {
        var t = e.theme,
          n = t.animation,
          r = t.border,
          o = t.color,
          a = t.font,
          c = t.unit
        return {
          '-webkitAppearance': 'none',
          background: o['grey-600'],
          border: r.transparent,
          borderBottom: r.thinForeground,
          color: o.foreground,
          display: 'inline-block',
          fontSize: a.size.default,
          lineHeight: a.lineHeight.default,
          outline: 0,
          overflow: 'visible',
          padding: ''.concat(c[1], ' ').concat(c[2]),
          verticalAlign: 'bottom',
          transition: n.easeMedium(),
          width: '100%',
          '&:hover': { background: o['grey-500'] },
          '&:focus': {
            background: o['grey-700'],
            boxShadow: '0 0 0 0.2em '.concat(o.outline),
            zIndex: 2,
          },
          '&:active': { background: o['grey-700'] },
          '&::placeholder': { color: o['grey-200'] },
        }
      }
      function o(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.color,
          o = n.border,
          a = {
            background: r['accent-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['accent-500'] },
            '&:focus': {
              background: r['accent-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['accent-700'] },
          },
          c = {
            background: r['active-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['active-500'] },
            '&:focus': {
              background: r['active-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['active-600'] },
          },
          i = {
            background: r['action-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['action-500'] },
            '&:focus': {
              background: r['action-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['action-700'] },
          },
          s = {
            background: r['danger-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['danger-500'] },
            '&:focus': {
              background: r['danger-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['danger-700'] },
          },
          d = {
            border: o.thinDanger,
            borderBottom: o.thinDanger,
            background: o.transparent,
            '&:hover': { background: r['grey-500'] },
            '&:focus': {
              background: r['grey-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['grey-700'] },
          },
          u = {
            background: 'none',
            border: o.transparent,
            borderBottom: o.thinDanger,
            '&:active': { borderBottom: o.thinDanger },
            '&:focus': {
              borderBottom: o.thinDanger,
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:hover': {
              borderBottom: o.thinDanger,
              background: r['grey-500'],
            },
          },
          l = {
            background: r['success-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['success-500'] },
            '&:focus': {
              background: r['success-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['success-700'] },
          },
          b = {
            background: r['yellow-600'],
            borderBottom: o.thinForeground,
            '&:hover': { background: r['yellow-500'] },
            '&:focus': {
              background: r['yellow-700'],
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:active': { background: r['yellow-700'] },
          },
          m = {
            color: r['grey-900'],
            background: r.disabled,
            border: o.disabled,
            borderBottom: o.disabled,
            '&::placeholder': { color: r['grey-900'] },
            '&:active': { background: r.disabled, border: o.disabled },
            '&:focus': {
              background: r.disabled,
              border: o.disabled,
              boxShadow: '0 0 0 0.2em '.concat(r.outline),
              zIndex: 2,
            },
            '&:hover': { background: r.disabled, border: o.disabled },
          }
        switch (t) {
          case 'secondary':
            return {
              background: o.transparent,
              border: o.thinForeground,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary':
            return {
              background: 'none',
              border: o.transparent,
              borderBottom: o.thinForeground,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'accent':
          case 'primary-accent':
            return a
          case 'secondary-accent':
            return {
              border: o.thinAccent,
              borderBottom: o.thinAccent,
              background: o.transparent,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary-accent':
            return {
              background: 'none',
              border: o.transparent,
              borderBottom: o.thinAccent,
              '&:hover': {
                borderBottom: o.thinAccent,
                background: r['grey-500'],
              },
              '&:focus': {
                borderBottom: o.thinAccent,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { borderBottom: o.thinAccent },
            }
          case 'active':
          case 'primary-active':
            return c
          case 'secondary-active':
            return {
              border: o.thinActive,
              borderBottom: o.thinActive,
              background: r['grey-700'],
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary-active':
            return {
              background: r['grey-700'],
              border: o.transparent,
              borderBottom: o.thinActive,
              '&:active': {
                background: r['grey-700'],
                borderBottom: o.thinActive,
              },
              '&:focus': {
                borderBottom: o.thinActive,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:hover': {
                borderBottom: o.thinActive,
                background: r['grey-500'],
              },
            }
          case 'action':
          case 'primary-action':
            return i
          case 'secondary-action':
            return {
              border: o.thinAction,
              borderBottom: o.thinAction,
              background: o.transparent,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary-action':
            return {
              background: 'none',
              border: o.transparent,
              borderBottom: o.thinAction,
              '&:active': { borderBottom: o.thinAction },
              '&:focus': {
                borderBottom: o.thinAction,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:hover': {
                borderBottom: o.thinAction,
                background: r['grey-500'],
              },
            }
          case 'error':
          case 'primary-error':
            return s
          case 'secondary-error':
            return d
          case 'tertiary-error':
            return u
          case 'danger':
          case 'primary-danger':
            return s
          case 'secondary-danger':
            return d
          case 'tertiary-danger':
            return u
          case 'success':
          case 'primary-success':
            return l
          case 'secondary-success':
            return {
              border: o.thinSuccess,
              borderBottom: o.thinSuccess,
              background: o.transparent,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary-success':
            return {
              background: 'none',
              border: o.transparent,
              borderBottom: o.thinSuccess,
              '&:active': { borderBottom: o.thinSuccess },
              '&:focus': {
                borderBottom: o.thinSuccess,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:hover': {
                borderBottom: o.thinSuccess,
                background: r['grey-500'],
              },
            }
          case 'warning':
          case 'primary-warning':
            return b
          case 'secondary-warning':
            return {
              border: o.thinWarning,
              borderBottom: o.thinWarning,
              background: o.transparent,
              '&:hover': { background: r['grey-500'] },
              '&:focus': {
                background: r['grey-700'],
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:active': { background: r['grey-700'] },
            }
          case 'tertiary-warning':
            return {
              background: 'none',
              border: o.transparent,
              borderBottom: o.thinWarning,
              '&:active': { borderBottom: o.thinWarning },
              '&:focus': {
                borderBottom: o.thinWarning,
                boxShadow: '0 0 0 0.2em '.concat(r.outline),
                zIndex: 2,
              },
              '&:hover': {
                borderBottom: o.thinWarning,
                background: r['grey-500'],
              },
            }
          case 'disabled':
          case 'primary-disabled':
          case 'secondary-disabled':
          case 'tertiary-disabled':
            return m
          default:
            return {}
        }
      }
      function a(e) {
        var t = e.size,
          n = e.theme.font
        switch (t) {
          case 1:
            return { fontSize: n.size[1] }
          case 2:
            return { fontSize: n.size[2] }
          case 3:
            return { fontSize: n.size[3] }
          case 4:
            return { fontSize: n.size[4] }
          case 5:
            return { fontSize: n.size[5] }
          case 6:
            return { fontSize: n.size[6] }
          case 7:
            return { fontSize: n.size[7] }
          case 8:
            return { fontSize: n.size[8] }
          case 9:
            return { fontSize: n.size[9] }
          case 10:
            return { fontSize: n.size[10] }
          case 11:
            return { fontSize: n.size[11] }
          case 12:
            return { fontSize: n.size[12] }
          default:
            return {}
        }
      }
      function c(e) {
        switch (e.widths) {
          case 1:
            return { width: '100px' }
          case 2:
            return { width: '200px' }
          case 3:
            return { width: '300px' }
          case 4:
            return { width: '400px' }
          case 5:
            return { width: '500px' }
          case 6:
            return { width: '600px' }
          case 7:
            return { width: '700px' }
          case 8:
            return { width: '800px' }
          case 9:
            return { width: '900px' }
          case 10:
            return { width: '1000px' }
          default:
            return {}
        }
      }
      n.d(t, 'c', function() {
        return r
      }),
        n.d(t, 'a', function() {
          return o
        }),
        n.d(t, 'b', function() {
          return a
        }),
        n.d(t, 'd', function() {
          return c
        }),
        r &&
          r === Object(r) &&
          Object.isExtensible(r) &&
          Object.defineProperty(r, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'inputTheme', filename: 'src/Input/input.theme.ts' },
          }),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'inputAppearanceTheme',
              filename: 'src/Input/input.theme.ts',
            },
          }),
        a &&
          a === Object(a) &&
          Object.isExtensible(a) &&
          Object.defineProperty(a, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'inputSizeTheme',
              filename: 'src/Input/input.theme.ts',
            },
          }),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'inputWidthsTheme',
              filename: 'src/Input/input.theme.ts',
            },
          })
    },
    './src/Input/input.types.ts': function(e, t) {
      'undefined' !== typeof InputInterface &&
        InputInterface &&
        InputInterface === Object(InputInterface) &&
        Object.isExtensible(InputInterface) &&
        Object.defineProperty(InputInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'InputInterface',
            filename: 'src/Input/input.types.ts',
          },
        })
    },
    './src/Video/video.mdx': function(e, t, n) {
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
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        u = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = n('./src/Base/Base.tsx'),
        b = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
        )
      function m(e) {
        return Object(b.a)(e), {}
      }
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'videoTheme', filename: 'src/Video/video.theme.ts' },
        })
      var p = a.a.memo(function(e) {
        var t = e.allowFullScreen,
          n = e.autoPlay,
          c = e.children,
          i = e.className,
          s = void 0 === i ? '' : i,
          b = e.embeded,
          p = void 0 !== b && b,
          f = e.height,
          g = void 0 === f ? 'auto' : f,
          y = e.inview,
          h = void 0 !== y && y,
          v = e.loop,
          x = void 0 !== v && v,
          j = e.muted,
          O = void 0 !== j && j,
          w = e.playsInline,
          _ = void 0 !== w && w,
          I = e.preload,
          k = void 0 === I ? 'auto' : I,
          T = e.src,
          z = e.themed,
          F = void 0 === z ? [] : z,
          P = e.width,
          B = void 0 === P ? '100%' : P,
          S = Object(r.a)(e, [
            'allowFullScreen',
            'autoPlay',
            'children',
            'className',
            'embeded',
            'height',
            'inview',
            'loop',
            'muted',
            'playsInline',
            'preload',
            'src',
            'themed',
            'width',
          ]),
          E = Object(o.useMemo)(
            function() {
              return 'Video '.concat(s)
            },
            [s]
          ),
          A = Object(o.useMemo)(
            function() {
              return [m].concat(Object(u.a)(F))
            },
            [m, F]
          ),
          V = Object(d.a)({}, S, {
            allowFullScreen: !!t || null,
            autoPlay: !!n || null,
            height: g,
            inview: !!h || null,
            loop: x,
            muted: O || null,
            playsInline: _,
            preload: k,
            src: T,
            width: B,
          })
        return a.a.createElement(
          l.b,
          Object.assign(
            { as: p ? null : 'video', className: E, themed: A },
            p ? null : V
          ),
          p
            ? a.a.createElement(
                'iframe',
                Object.assign({}, V, { frameBorder: '0' })
              )
            : c
        )
      })
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Video', filename: 'src/Video/Video.tsx' },
        })
      var f = p
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Video', filename: 'src/Video/Video.tsx' },
        })
      var g = n('./src/Input/index.ts'),
        y = n('./src/Flex/index.ts'),
        h = n('./src/ThemeContext/ThemeProvider.tsx')
      n.d(t, 'default', function() {
        return j
      })
      var v = {},
        x = 'wrapper'
      function j(e) {
        var t = e.components,
          n = Object(r.a)(e, ['components'])
        return Object(c.b)(
          x,
          Object.assign({}, v, n, { components: t, mdxType: 'MDXLayout' }),
          Object(c.b)('h1', { id: 'video' }, 'Video'),
          Object(c.b)('h2', { id: 'properties' }, 'Properties'),
          Object(c.b)(i.d, { of: f, mdxType: 'Props' }),
          Object(c.b)('h2', { id: 'controls' }, 'Controls'),
          Object(c.b)(
            i.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Video controls>\n    <source\n      src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"\n      type="video/mp4"\n    />\n    <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm" />\n    <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg" />\n  </Video>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: s.default,
                Video: f,
                Input: g.Input,
                Flex: y.Flex,
                ThemeProvider: h.a,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              h.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                f,
                { controls: !0, mdxType: 'Video' },
                Object(c.b)('source', {
                  src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
                  type: 'video/mp4',
                }),
                Object(c.b)('source', {
                  src: 'http://clips.vorwaerts-gmbh.de/VfE.webm',
                  type: 'video/webm',
                }),
                Object(c.b)('source', {
                  src: 'http://clips.vorwaerts-gmbh.de/VfE.ogv',
                  type: 'video/ogg',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'autoplay' }, 'Autoplay'),
          Object(c.b)(
            i.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Video autoPlay muted>\n    <source\n      src="https://quirksmode.org/html5/videos/big_buck_bunny.mp4"\n      type="video/mp4"\n    />\n    <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm" />\n    <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg" />\n  </Video>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: s.default,
                Video: f,
                Input: g.Input,
                Flex: y.Flex,
                ThemeProvider: h.a,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              h.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                f,
                { autoPlay: !0, muted: !0, mdxType: 'Video' },
                Object(c.b)('source', {
                  src: 'https://quirksmode.org/html5/videos/big_buck_bunny.mp4',
                  type: 'video/mp4',
                }),
                Object(c.b)('source', {
                  src: 'http://clips.vorwaerts-gmbh.de/VfE.webm',
                  type: 'video/webm',
                }),
                Object(c.b)('source', {
                  src: 'http://clips.vorwaerts-gmbh.de/VfE.ogv',
                  type: 'video/ogg',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'embebed' }, 'Embebed'),
          Object(c.b)(
            i.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <Video\n    embeded\n    allowFullScreen\n    height="315"\n    width="560"\n    src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"\n  />\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Fragment: o.Fragment,
                Playground: i.c,
                Props: i.d,
                styled: s.default,
                Video: f,
                Input: g.Input,
                Flex: y.Flex,
                ThemeProvider: h.a,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              h.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(f, {
                embeded: !0,
                allowFullScreen: !0,
                height: '315',
                width: '560',
                src:
                  'https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
                mdxType: 'Video',
              })
            )
          )
        )
      }
      j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Video/video.mdx' },
        }),
        (j.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-video-video.71a687dd8ae96513953f.js.map
