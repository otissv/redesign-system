;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    './src/Container/Container.tsx': function(e, n, r) {
      'use strict'
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = r('./node_modules/react/index.js'),
        c = r.n(a),
        i = r('./src/Base/index.tsx')
      function s(e) {
        var n = e.appearance,
          r = e.theme,
          o = r.border,
          t = r.color,
          a = {
            color: t['accent-050'],
            backgroundColor: t['accent-500'],
            border: '1px solid '.concat(t['accent-500']),
          },
          c = {
            color: t['action-050'],
            backgroundColor: t['action-500'],
            border: '1px solid '.concat(t['action-500']),
          },
          i = {
            color: t['danger-050'],
            backgroundColor: t['danger-500'],
            border: '1px solid '.concat(t['danger-500']),
          },
          s = {
            color: t['success-050'],
            backgroundColor: t['success-500'],
            border: '1px solid '.concat(t['success-500']),
          },
          d = {
            color: t['warning-050'],
            backgroundColor: t['warning-500'],
            border: '1px solid '.concat(t['warning-500']),
          }
        switch (n) {
          case 'primary':
            return {
              color: t.foregroundInvert,
              backgroundColor: t.backgroundInvert,
              border: o.thinTransparent,
            }
          case 'secondary':
            return {
              color: t['grey-800'],
              backgroundColor: t['grey-100'],
              border: '1px solid '.concat(t['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: o.thin }
          case 'accent':
          case 'primary-accent':
            return a
          case 'secondary-accent':
            return {
              color: t['accent-800'],
              backgroundColor: t['accent-100'],
              border: '1px solid '.concat(t['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: t['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return c
          case 'secondary-action':
            return {
              color: t['action-800'],
              backgroundColor: t['action-100'],
              border: '1px solid '.concat(t['action-100']),
            }
          case 'tertiary-action':
            return {
              color: t['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return i
          case 'secondary-danger':
            return {
              color: t['danger-800'],
              backgroundColor: t['danger-300'],
              border: '1px solid '.concat(t['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: t['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return s
          case 'secondary-success':
            return {
              color: t['success-800'],
              backgroundColor: t['success-300'],
              border: '1px solid '.concat(t['success-300']),
            }
          case 'tertiary-success':
            return {
              color: t['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return d
          case 'secondary-warning':
            return {
              color: t['warning-800'],
              backgroundColor: t['warning-300'],
              border: '1px solid '.concat(t['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: t['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['warning-300']),
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
        r.d(n, 'a', function() {
          return d
        })
      var d = c.a.memo(function(e) {
        var n = e.children,
          r = e.className,
          d = void 0 === r ? '' : r,
          l = e.themed,
          u = void 0 === l ? [] : l,
          b = Object(t.a)(e, ['children', 'className', 'themed']),
          m = Object(a.useMemo)(
            function() {
              return 'Container '.concat(d)
            },
            [d]
          ),
          p = Object(a.useMemo)(
            function() {
              return [s].concat(Object(o.a)(u))
            },
            [s, u]
          )
        return c.a.createElement(
          i.Base,
          Object.assign({ className: m, themed: p }, b),
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
    './src/Container/index.tsx': function(e, n, r) {
      'use strict'
      var o = r('./src/Container/Container.tsx')
      r.d(n, 'Container', function() {
        return o.a
      })
      r('./src/Container/container.types.ts')
    },
    './src/CoverImg/CoverImg.tsx': function(e, n, r) {
      'use strict'
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = r('./node_modules/react/index.js'),
        c = r.n(a),
        i = r('./src/Base/Base.tsx'),
        s = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        )
      function d(e) {
        var n = e.cover,
          r = e.height,
          o = e.parallax,
          t = e.position,
          a = e.repeat,
          c = e.src,
          i = e.width,
          d = e.theme.animation
        return Object(s.a)(
          {
            position: 'relative',
            display: 'flex',
            backgroundImage: 'url('.concat(c, ')'),
            height: r,
            width: i,
            transition: d.easeMedium(),
          },
          o ? { backgroundAttachment: 'fixed' } : {},
          t ? { backgroundPosition: '50% 50%' } : {},
          n ? { backgroundSize: 'cover' } : {},
          a ? { backgroundRepeat: 'no-repeat' } : {}
        )
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'coverImgTheme',
            filename: 'src/CoverImg/coverImg.theme.ts',
          },
        })
      var l = r('./src/Container/index.tsx')
      r.d(n, 'a', function() {
        return b
      })
      var u = c.a.memo(function(e) {
        var n = e.background,
          r = Object(a.useMemo)(
            function() {
              return 'string' === typeof n ? n : '#00000080'
            },
            [n]
          )
        return Object(a.useMemo)(
          function() {
            return n
              ? c.a.createElement(l.Container, {
                  css: '\n            position: absolute;\n            background: '.concat(
                    r,
                    ';\n            width: inherit;\n            height: inherit;\n          '
                  ),
                })
              : null
          },
          [n, r]
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Overlay', filename: 'src/CoverImg/CoverImg.tsx' },
        })
      var b = c.a.memo(function(e) {
        var n = e.children,
          r = e.className,
          s = void 0 === r ? '' : r,
          l = e.themed,
          b = void 0 === l ? [] : l,
          m = e.overlay,
          p = e.cover,
          f = void 0 === p || p,
          g = e.width,
          x = void 0 === g ? '100%' : g,
          C = e.height,
          h = void 0 === C ? '300px' : C,
          y = e.position,
          j = void 0 === y ? '50% 50%' : y,
          v = e.repeat,
          O = void 0 !== v && v,
          _ = e.parallax,
          I = void 0 !== _ && _,
          w = Object(t.a)(e, [
            'children',
            'className',
            'themed',
            'overlay',
            'cover',
            'width',
            'height',
            'position',
            'repeat',
            'parallax',
          ]),
          k = Object(a.useMemo)(
            function() {
              return 'CoverImg '.concat(s)
            },
            [s]
          ),
          P = Object(a.useMemo)(
            function() {
              return [d].concat(Object(o.a)(b))
            },
            [d, b]
          )
        return c.a.createElement(
          i.b,
          Object.assign(
            {
              className: k,
              themed: P,
              cover: f,
              width: x,
              height: h,
              position: j,
              repeat: O,
              parallax: I,
            },
            w
          ),
          c.a.createElement(u, { background: m }),
          n
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'CoverImg', filename: 'src/CoverImg/CoverImg.tsx' },
        })
      n.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'CoverImg', filename: 'src/CoverImg/CoverImg.tsx' },
        })
    },
    './src/CoverImg/coverImg.mdx': function(e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'default', function() {
          return b
        })
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        t =
          (r('./node_modules/react/index.js'),
          r('./node_modules/@mdx-js/react/dist/index.es.js')),
        a = r('./node_modules/docz/dist/index.esm.js'),
        c = r(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        i = r('./src/CoverImg/CoverImg.tsx'),
        s = r('./src/ThemeContext/ThemeProvider.tsx'),
        d = r('./src/Container/Container.tsx'),
        l = {},
        u = 'wrapper'
      function b(e) {
        var n = e.components,
          r = Object(o.a)(e, ['components'])
        return Object(t.b)(
          u,
          Object.assign({}, l, r, { components: n, mdxType: 'MDXLayout' }),
          Object(t.b)('h1', { id: 'cover-image' }, 'Cover Image'),
          Object(t.b)(a.d, { of: i.b, mdxType: 'Props' }),
          Object(t.b)(
            a.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Container margin5="bottom">\n    <CoverImg\n      css={`\n        justify-content: flex-end;\n        flex-direction: column;\n      `}\n      src="https://images.unsplash.com/photo-1555605562-eb11c2d46767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"\n    />\n  </Container>\n  <h3>Parallax</h3>\n\n  <Container>\n    <CoverImg\n      parallax\n      css={`\n        justify-content: flex-end;\n        flex-direction: column;\n      `}\n      src="https://images.unsplash.com/photo-1545254930-06c375090cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"\n    />\n  </Container>\n\n  <h3>Overlay</h3>\n  <p>default #00000080</p>\n  <Container>\n    <CoverImg\n      overlay\n      css={`\n        justify-content: flex-end;\n        flex-direction: column;\n      `}\n      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"\n    >\n      <Container\n        css={`\n          position: absolute;\n          display: flex;\n          padding: 24px;\n        `}\n      >\n        <p>Context</p>\n      </Container>\n    </CoverImg>\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: a.c,
                Props: a.d,
                styled: c.default,
                CoverImg: i.b,
                ThemeProvider: s.a,
                Container: d.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                d.b,
                { margin5: 'bottom', mdxType: 'Container' },
                Object(t.b)(i.b, {
                  css:
                    '\n          justify-content: flex-end;\n          flex-direction: column;\n        ',
                  src:
                    'https://images.unsplash.com/photo-1555605562-eb11c2d46767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                  mdxType: 'CoverImg',
                })
              ),
              Object(t.b)('h3', null, 'Parallax'),
              Object(t.b)(
                d.b,
                { mdxType: 'Container' },
                Object(t.b)(i.b, {
                  parallax: !0,
                  css:
                    '\n      justify-content: flex-end;\n      flex-direction: column;\n    ',
                  src:
                    'https://images.unsplash.com/photo-1545254930-06c375090cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                  mdxType: 'CoverImg',
                })
              ),
              Object(t.b)('h3', null, 'Overlay'),
              Object(t.b)('p', null, 'default #00000080'),
              Object(t.b)(
                d.b,
                { mdxType: 'Container' },
                Object(t.b)(
                  i.b,
                  {
                    overlay: !0,
                    css:
                      '\n      justify-content: flex-end;\n      flex-direction: column;\n    ',
                    src:
                      'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    mdxType: 'CoverImg',
                  },
                  Object(t.b)(
                    d.b,
                    {
                      css:
                        '\n      position: absolute;\n      display: flex;\n      padding: 24px;\n    ',
                      mdxType: 'Container',
                    },
                    Object(t.b)('p', null, 'Context')
                  )
                )
              )
            )
          )
        )
      }
      b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/CoverImg/coverImg.mdx' },
        }),
        (b.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-cover-img-cover-img.3ae2d971195c87fda938.js.map
