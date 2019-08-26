;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    './src/Img/img.mdx': function(e, t, i) {
      'use strict'
      i.r(t)
      var c = i(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        b = i('./node_modules/react/index.js'),
        d = i.n(b),
        r = i('./node_modules/@mdx-js/react/dist/index.es.js'),
        a = i('./node_modules/docz/dist/index.esm.js'),
        s = i(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        n = i('./src/Base/index.tsx')
      function o(e) {
        return {
          display: 'inline-block',
          height: e.height || 'auto',
          maxWidth: '100%',
          width: e.width || 'auto',
          transition: e.theme.animation.easeInMedium(),
        }
      }
      function l(e) {
        switch (e.widths) {
          case 1:
            return { width: '150px' }
          case 2:
            return { width: '200px' }
          case 3:
            return { width: '300px' }
          case 4:
            return { width: '400px' }
          case 5:
            return { width: '480px' }
          case 6:
            return { width: '600px' }
          case 7:
            return { width: '640px' }
          case 8:
            return { width: '768px' }
          case 9:
            return { width: '800' }
          case 10:
            return { width: '960' }
          case 11:
            return { width: '1024px' }
          case 12:
            return { width: '1280px' }
          default:
            return { width: '100%' }
        }
      }
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'imgTheme', filename: 'src/Img/img.theme.ts' },
        }),
        'undefined' !== typeof l &&
          l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'imgSizeTheme', filename: 'src/Img/img.theme.ts' },
          })
      var m = d.a.memo(function(e) {
        e.children
        var t = e.className,
          i = void 0 === t ? '' : t,
          r = e.themed,
          a = void 0 === r ? [] : r,
          m = Object(c.a)(e, ['children', 'className', 'themed']),
          u = Object(b.useMemo)(
            function() {
              return 'Img '.concat(i)
            },
            [i]
          ),
          p = Object(b.useMemo)(
            function() {
              return [o, l].concat(Object(s.a)(a))
            },
            [o, l, a]
          )
        return d.a.createElement(
          n.Base,
          Object.assign({ as: 'img', className: u, themed: p }, m)
        )
      })
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Img', filename: 'src/Img/Img.tsx' },
        })
      var u = m
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Img', filename: 'src/Img/Img.tsx' },
        })
      var p = i('./src/ThemeContext/ThemeProvider.tsx')
      i.d(t, 'default', function() {
        return j
      })
      var h = {},
        f = 'wrapper'
      function j(e) {
        var t = e.components,
          i = Object(c.a)(e, ['components'])
        return Object(r.b)(
          f,
          Object.assign({}, h, i, { components: t, mdxType: 'MDXLayout' }),
          Object(r.b)('h1', { id: 'img' }, 'Img'),
          Object(r.b)('h2', { id: 'properties' }, 'Properties'),
          Object(r.b)(a.d, { of: u, mdxType: 'Props' }),
          Object(r.b)('h2', { id: 'default' }, 'Default'),
          Object(r.b)(
            a.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Img\n    width="640px"\n    height="480px"\n    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"\n  />\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : i,
                Playground: a.c,
                Props: a.d,
                Img: u,
                ThemeProvider: p.a,
              },
              mdxType: 'Playground',
            },
            Object(r.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(r.b)(u, {
                width: '640px',
                height: '480px',
                src:
                  'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                mdxType: 'Img',
              })
            )
          ),
          Object(r.b)('h2', { id: 'widths' }, 'Widths'),
          Object(r.b)(
            p.a,
            { mdxType: 'ThemeProvider' },
            Object(r.b)(
              'table',
              null,
              Object(r.b)(
                'thead',
                null,
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('th', null, 'Prop'),
                  Object(r.b)('th', null, 'Example')
                )
              ),
              Object(r.b)(
                'tbody',
                null,
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '1'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 1,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '2'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 2,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '3'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 3,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '4'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 4,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '5'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 5,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '6'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 6,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '7'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 7,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '8'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 8,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '9'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 9,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '10'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 10,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '11'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 11,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                ),
                Object(r.b)(
                  'tr',
                  null,
                  Object(r.b)('td', null, '12'),
                  Object(r.b)(
                    'td',
                    null,
                    Object(r.b)(u, {
                      widths: 12,
                      src:
                        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                      mdxType: 'Img',
                    })
                  )
                )
              )
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
          value: { name: 'MDXContent', filename: 'src/Img/img.mdx' },
        }),
        (j.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-img-img.f74c2ab9f6d2313a0e74.js.map
