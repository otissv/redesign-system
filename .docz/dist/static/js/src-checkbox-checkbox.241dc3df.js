;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    './src/Checkbox/Checkbox.tsx': function(e, n, a) {
      'use strict'
      var r = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = a('./node_modules/react/index.js'),
        t = a.n(o),
        i = a('./src/Base/index.tsx'),
        b = a('./node_modules/lodash/fp/upperFirst.js'),
        s = a.n(b)
      function l(e) {
        var n = e.appearance,
          a = e.color
        return a[n] || a.default
      }
      function d(e) {
        var n = e.appearance,
          a = e.theme,
          r = a.color,
          c = a.animation,
          o = a.border,
          t = a.unit
        return {
          position: 'relative',
          height: t[5],
          width: t[5],
          border: o['thick'.concat(s()(n))] || o.thin,
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
            transition: c.easeFast(),
          },
          '.CheckboxBackground, .CheckboxCheckmark': {
            transition: c.easeFast(),
          },
          'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
            background: l({ appearance: n, color: r }),
            '.CheckboxCheckmark': { opacity: 1, transform: 'scale(0.7)' },
          },
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
            name: 'checkboxTheme',
            filename: 'src/Checkbox/checkbox.theme.ts',
          },
        }),
        a.d(n, 'a', function() {
          return p
        })
      var p = t.a.memo(function(e) {
        var n = e.checked,
          a = e.className,
          b = void 0 === a ? '' : a,
          s = e.id,
          l = e.name,
          p = e.onChange,
          m = e.themed,
          u = void 0 === m ? [] : m,
          x = Object(c.a)(e, [
            'checked',
            'className',
            'id',
            'name',
            'onChange',
            'themed',
          ]),
          h = Object(o.useMemo)(
            function() {
              return 'Checkbox '.concat(b)
            },
            [b]
          ),
          C = Object(o.useMemo)(
            function() {
              return [d].concat(Object(r.a)(u))
            },
            [d, u]
          ),
          k = Object(o.useMemo)(
            function() {
              return 'disabled' === x.appearance
            },
            [x.appearance]
          )
        return t.a.createElement(
          i.Base,
          Object.assign({ className: h, themed: C }, x),
          t.a.createElement('input', {
            checked: n,
            className: 'CheckboxInput',
            disabled: k,
            id: s,
            name: l,
            onChange: p,
            type: 'checkbox',
          }),
          t.a.createElement(
            'div',
            { className: 'CheckboxBackground' },
            t.a.createElement(
              'svg',
              { className: 'CheckboxCheckmark', viewBox: '0 0 24 24' },
              t.a.createElement('path', {
                className: 'mdc-checkbox__checkmark-path',
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              })
            )
          )
        )
      })
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
      n.b = p
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
    },
    './src/Checkbox/checkbox.mdx': function(e, n, a) {
      'use strict'
      a.r(n)
      var r = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = a('./node_modules/react/index.js'),
        o = a('./node_modules/@mdx-js/react/dist/index.es.js'),
        t = a('./node_modules/docz/dist/index.esm.js'),
        i = a('./src/Checkbox/Checkbox.tsx'),
        b = a('./src/Container/index.tsx'),
        s = a('./src/ThemeContext/ThemeProvider.tsx'),
        l = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        )
      function d(e) {
        var n = e.children,
          a = Object(c.useState)(!1),
          r = Object(l.a)(a, 2),
          o = r[0],
          t = r[1]
        return n(o, function(e) {
          e.preventDefault(), t(!o)
        })
      }
      d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CheckboxExample',
            filename: 'src/Checkbox/checkbox.example.ts',
          },
        }),
        a.d(n, 'default', function() {
          return u
        })
      var p = {},
        m = 'wrapper'
      function u(e) {
        var n = e.components,
          a = Object(r.a)(e, ['components'])
        return Object(o.b)(
          m,
          Object.assign({}, p, a, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'checkbox' }, 'Checkbox'),
          Object(o.b)('h2', { id: 'properties' }, 'Properties'),
          Object(o.b)(t.d, { of: i.b, mdxType: 'Props' }),
          Object(o.b)('h2', { id: 'default' }, 'Default'),
          Object(o.b)(
            t.c,
            {
              __position: 1,
              __code: '<ThemeProvider>\n  <Checkbox />\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Playground: t.c,
                Props: t.d,
                Fragment: c.Fragment,
                Checkbox: i.b,
                Container: b.Container,
                ThemeProvider: s.a,
                CheckboxExample: d,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(i.b, { mdxType: 'Checkbox' })
            )
          ),
          Object(o.b)('h2', { id: 'appearace' }, 'Appearace'),
          Object(o.b)(
            t.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="accent" marginRight={3} />\n          Accent\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="action" marginRight={3} />\n          Action\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="active" marginRight={3} />\n          Active\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="danger" marginRight={3} />\n          Danger\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="error" marginRight={3} />\n          Error\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="success" marginRight={3} />\n          Success\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="warning" marginRight={3} />\n          Warning\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n\n  <CheckboxExample>\n    {(checked, onChange) => (\n      <Container>\n        <label>\n          <Checkbox appearance="disabled" marginRight={3} checked />\n          Disabled\n        </label>\n      </Container>\n    )}\n  </CheckboxExample>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Playground: t.c,
                Props: t.d,
                Fragment: c.Fragment,
                Checkbox: i.b,
                Container: b.Container,
                ThemeProvider: s.a,
                CheckboxExample: d,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'accent', marginRight: 3, mdxType: 'Checkbox' }), 'Accent'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'action', marginRight: 3, mdxType: 'Checkbox' }), 'Action'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'active', marginRight: 3, mdxType: 'Checkbox' }), 'Active'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'danger', marginRight: 3, mdxType: 'Checkbox' }), 'Danger'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'error', marginRight: 3, mdxType: 'Checkbox' }), 'Error'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'success', marginRight: 3, mdxType: 'Checkbox' }), 'Success'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'warning', marginRight: 3, mdxType: 'Checkbox' }), 'Warning'))
              }),
              Object(o.b)(d, { mdxType: 'CheckboxExample' }, function(e, n) {
                return Object(
                  o.b
                )(b.Container, { mdxType: 'Container' }, Object(o.b)('label', null, Object(o.b)(i.b, { appearance: 'disabled', marginRight: 3, checked: !0, mdxType: 'Checkbox' }), 'Disabled'))
              })
            )
          )
        )
      }
      u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Checkbox/checkbox.mdx' },
        }),
        (u.isMDXComponent = !0)
    },
    './src/Container/Container.tsx': function(e, n, a) {
      'use strict'
      var r = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = a('./node_modules/react/index.js'),
        t = a.n(o),
        i = a('./src/Base/index.tsx')
      function b(e) {
        var n = e.appearance,
          a = e.theme,
          r = a.border,
          c = a.color,
          o = {
            color: c['accent-050'],
            backgroundColor: c['accent-500'],
            border: '1px solid '.concat(c['accent-500']),
          },
          t = {
            color: c['action-050'],
            backgroundColor: c['action-500'],
            border: '1px solid '.concat(c['action-500']),
          },
          i = {
            color: c['danger-050'],
            backgroundColor: c['danger-500'],
            border: '1px solid '.concat(c['danger-500']),
          },
          b = {
            color: c['success-050'],
            backgroundColor: c['success-500'],
            border: '1px solid '.concat(c['success-500']),
          },
          s = {
            color: c['warning-050'],
            backgroundColor: c['warning-500'],
            border: '1px solid '.concat(c['warning-500']),
          }
        switch (n) {
          case 'primary':
            return {
              color: c.foregroundInvert,
              backgroundColor: c.backgroundInvert,
              border: r.thinTransparent,
            }
          case 'secondary':
            return {
              color: c['grey-800'],
              backgroundColor: c['grey-100'],
              border: '1px solid '.concat(c['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return o
          case 'secondary-accent':
            return {
              color: c['accent-800'],
              backgroundColor: c['accent-100'],
              border: '1px solid '.concat(c['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: c['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(c['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return t
          case 'secondary-action':
            return {
              color: c['action-800'],
              backgroundColor: c['action-100'],
              border: '1px solid '.concat(c['action-100']),
            }
          case 'tertiary-action':
            return {
              color: c['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(c['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return i
          case 'secondary-danger':
            return {
              color: c['danger-800'],
              backgroundColor: c['danger-300'],
              border: '1px solid '.concat(c['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: c['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(c['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return b
          case 'secondary-success':
            return {
              color: c['success-800'],
              backgroundColor: c['success-300'],
              border: '1px solid '.concat(c['success-300']),
            }
          case 'tertiary-success':
            return {
              color: c['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(c['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return s
          case 'secondary-warning':
            return {
              color: c['warning-800'],
              backgroundColor: c['warning-300'],
              border: '1px solid '.concat(c['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: c['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(c['warning-300']),
            }
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
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        a.d(n, 'a', function() {
          return s
        })
      var s = t.a.memo(function(e) {
        var n = e.children,
          a = e.className,
          s = void 0 === a ? '' : a,
          l = e.themed,
          d = void 0 === l ? [] : l,
          p = Object(c.a)(e, ['children', 'className', 'themed']),
          m = Object(o.useMemo)(
            function() {
              return 'Container '.concat(s)
            },
            [s]
          ),
          u = Object(o.useMemo)(
            function() {
              return [b].concat(Object(r.a)(d))
            },
            [b, d]
          )
        return t.a.createElement(
          i.Base,
          Object.assign({ className: m, themed: u }, p),
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
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      n.b = s
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Container/container.types.ts': function(e, n) {
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
    './src/Container/index.tsx': function(e, n, a) {
      'use strict'
      var r = a('./src/Container/Container.tsx')
      a.d(n, 'Container', function() {
        return r.a
      })
      a('./src/Container/container.types.ts')
    },
  },
])
//# sourceMappingURL=src-checkbox-checkbox.3ae2d971195c87fda938.js.map
