;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    './src/Toggle/toogle.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        i = n.n(a),
        r = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        l = n('./node_modules/docz/dist/index.esm.js'),
        c = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/ThemeContext/ThemeProvider.tsx'),
        d = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        g = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        b = n('./src/Base/index.tsx'),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
        )
      function u(e) {
        return Object(m.a)(e), { display: 'inline-block', position: 'relative' }
      }
      function h(e) {
        var t = e.appearance,
          n = e.theme,
          o = n.border,
          a = n.unit
        switch (t) {
          case 'primary':
            return {
              color: '#fff',
              backgroundColor: 'blue',
              paddingLeft: a[2],
              paddingRight: a[2],
            }
          case 'secondary':
            return {
              border: o.thinDanger,
              paddingLeft: a[2],
              paddingRight: a[2],
            }
          default:
            return {}
        }
      }
      function p(e) {
        return {
          position: 'absolute',
          boxSizing: 'border-box',
          height: 0,
          width: 0,
          visibility: 'hidden',
          '&:checked + label': { background: e.theme.color['grey-100'] },
          '&:checked + label:after': {
            left: 'calc(100% - 5px)',
            transform: 'translateX(-100%)',
          },
        }
      }
      function f(e) {
        var t = e.theme.color,
          n = e.checked,
          o = e.height
        return {
          position: 'absolute',
          boxSizing: 'border-box',
          cursor: 'pointer',
          textIndent: e.hideText ? '-9999px' : 'initial',
          width: e.width,
          height: o,
          background: t['grey-700'],
          display: 'inline-block',
          borderRadius: '100px',
          fontSize: o,
          lineHeight: o,
          textAlign: n ? 'left' : 'right',
        }
      }
      function j(e) {
        var t = e.theme.color,
          n = e.toggle,
          o = e.height
        return {
          display: 'inherit',
          position: 'absolute',
          boxSizing: 'border-box',
          width: e.width,
          height: o,
          background: n ? t['grey-500'] : t['grey-400'],
          borderRadius: '90px',
          transform: n ? 'translateX(100%);' : 'translate(0);',
          transition: '0.3s',
          ' &:active': { width: '25px' },
        }
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'toggleTheme',
            filename: 'src/Toggle/toggle.theme.ts',
          },
        }),
        h &&
          h === Object(h) &&
          Object.isExtensible(h) &&
          Object.defineProperty(h, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toggleAppearanceTheme',
              filename: 'src/Toggle/toggle.theme.ts',
            },
          }),
        p &&
          p === Object(p) &&
          Object.isExtensible(p) &&
          Object.defineProperty(p, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toggleInputTheme',
              filename: 'src/Toggle/toggle.theme.ts',
            },
          }),
        f &&
          f === Object(f) &&
          Object.isExtensible(f) &&
          Object.defineProperty(f, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toggleLabelTheme',
              filename: 'src/Toggle/toggle.theme.ts',
            },
          }),
        'undefined' !== typeof j &&
          j &&
          j === Object(j) &&
          Object.isExtensible(j) &&
          Object.defineProperty(j, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'toggleContentTheme',
              filename: 'src/Toggle/toggle.theme.ts',
            },
          })
      var O = i.a.memo(function(e) {
        e.checked
        var t = e.className,
          n = void 0 === t ? '' : t,
          r = (e.theme, Object(o.a)(e, ['checked', 'className', 'theme'])),
          l = Object(a.useMemo)(
            function() {
              return 'ToggleInput '.concat(n)
            },
            [n]
          ),
          c = Object(a.useMemo)(
            function() {
              return [p]
            },
            [p]
          )
        return i.a.createElement(
          b.Base,
          Object.assign(
            { as: 'input', type: 'checkbox', className: l, themed: c },
            r
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
          value: { name: 'ToggleInput', filename: 'src/Toggle/Toggle.tsx' },
        })
      var T = i.a.memo(function(e) {
        e.checked
        var t = e.className,
          n = void 0 === t ? '' : t,
          r = Object(o.a)(e, ['checked', 'className']),
          l = Object(a.useMemo)(
            function() {
              return 'ToggleLabel '.concat(n)
            },
            [n]
          ),
          c = Object(a.useMemo)(
            function() {
              return [h, f]
            },
            [f, h]
          )
        return i.a.createElement(
          b.Base,
          Object.assign({ as: 'label', className: l, themed: c }, r)
        )
      })
      'undefined' !== typeof T &&
        T &&
        T === Object(T) &&
        Object.isExtensible(T) &&
        Object.defineProperty(T, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ToggleLabel', filename: 'src/Toggle/Toggle.tsx' },
        })
      var x = i.a.memo(function(e) {
        e.checked
        var t = e.className,
          n = void 0 === t ? '' : t,
          r = e.themed,
          l = void 0 === r ? [] : r,
          c = e.width,
          s = void 0 === c ? '90px' : c,
          d = e.height,
          m = void 0 === d ? '90px' : d,
          u = Object(o.a)(e, [
            'checked',
            'className',
            'themed',
            'width',
            'height',
          ]),
          h = Object(a.useMemo)(
            function() {
              return 'ToggleContent '.concat(n)
            },
            [n]
          ),
          p = Object(a.useMemo)(
            function() {
              return [j].concat(Object(g.a)(l))
            },
            [j, l]
          )
        return i.a.createElement(
          b.Base,
          Object.assign(
            { as: 'span', className: h, themed: p, width: s, height: m },
            u
          )
        )
      })
      'undefined' !== typeof x &&
        x &&
        x === Object(x) &&
        Object.isExtensible(x) &&
        Object.defineProperty(x, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ToggleContent', filename: 'src/Toggle/Toggle.tsx' },
        })
      var y = i.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          r = void 0 === n ? '' : n,
          l = e.height,
          c = void 0 === l ? '20px' : l,
          s = e.hideText,
          m = e.id,
          h = e.themed,
          p = void 0 === h ? [] : h,
          f = e.toggle,
          j = e.width,
          y = void 0 === j ? '40px' : j,
          v = Object(o.a)(e, [
            'children',
            'className',
            'height',
            'hideText',
            'id',
            'themed',
            'toggle',
            'width',
          ]),
          _ = Object(a.useMemo)(
            function() {
              return 'Toggle '.concat(r)
            },
            [r]
          ),
          w = Object(a.useMemo)(
            function() {
              return [u].concat(Object(g.a)(p))
            },
            [u, p]
          ),
          k = Object(d.a)(f, 2),
          P = k[0],
          E = k[1],
          C = Object(a.useCallback)(
            function(e) {
              e.preventDefault(), E(!P)
            },
            [E]
          )
        return i.a.createElement(
          b.Base,
          Object.assign({ className: _, themed: w }, v),
          i.a.createElement(O, {
            checked: P,
            height: c,
            id: m,
            type: 'checkbox',
            width: y,
          }),
          i.a.createElement(
            T,
            {
              checked: P,
              height: c,
              hideText: s,
              htmlFor: m,
              onClick: C,
              width: y,
            },
            t ||
              i.a.createElement(x, {
                elevate: 1,
                toggle: P,
                width: '20px',
                height: '20px',
              })
          )
        )
      })
      'undefined' !== typeof y &&
        y &&
        y === Object(y) &&
        Object.isExtensible(y) &&
        Object.defineProperty(y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Toggle', filename: 'src/Toggle/Toggle.tsx' },
        })
      'undefined' !== typeof y &&
        y &&
        y === Object(y) &&
        Object.isExtensible(y) &&
        Object.defineProperty(y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Toggle', filename: 'src/Toggle/Toggle.tsx' },
        })
      var v = function(e) {
        var t = e.children,
          n = Object(a.useState)(!1)
        return t(
          Object(a.useMemo)(
            function() {
              return n
            },
            [n]
          )
        )
      }
      'undefined' !== typeof v &&
        v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToggleContainer',
            filename: 'src/Toggle/toggle.example.ts',
          },
        }),
        n.d(t, 'default', function() {
          return k
        })
      var _ = {},
        w = 'wrapper'
      function k(e) {
        var t = e.components,
          n = Object(o.a)(e, ['components'])
        return Object(r.b)(
          w,
          Object.assign({}, _, n, { components: t, mdxType: 'MDXLayout' }),
          Object(r.b)('h1', { id: 'toggle' }, 'Toggle'),
          Object(r.b)(l.d, { of: y, mdxType: 'Props' }),
          Object(r.b)('h2', { id: 'default' }, 'Default'),
          Object(r.b)(
            l.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <ToggleContainer>\n    {toggle => <Toggle id="switch1" toggle={toggle} />}\n  </ToggleContainer>\n  <ToggleContainer>\n    {toggle => <Toggle appearance="primary" id="switch2" toggle={toggle} />}\n  </ToggleContainer>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: l.c,
                Props: l.d,
                styled: c.default,
                ThemeProvider: s.a,
                Toggle: y,
                ToggleContainer: v,
              },
              mdxType: 'Playground',
            },
            Object(r.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(r.b)(v, { mdxType: 'ToggleContainer' }, function(e) {
                return Object(
                  r.b
                )(y, { id: 'switch1', toggle: e, mdxType: 'Toggle' })
              }),
              Object(r.b)(v, { mdxType: 'ToggleContainer' }, function(e) {
                return Object(
                  r.b
                )(y, { appearance: 'primary', id: 'switch2', toggle: e, mdxType: 'Toggle' })
              })
            )
          )
        )
      }
      k &&
        k === Object(k) &&
        Object.isExtensible(k) &&
        Object.defineProperty(k, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Toggle/toogle.mdx' },
        }),
        (k.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-toggle-toogle.3f9ce5501e6b05b8dcb7.js.map
