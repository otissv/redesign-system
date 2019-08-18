;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    './src/Toolbar/toolbar.mdx': function(e, o, n) {
      'use strict'
      n.r(o),
        n.d(o, 'default', function() {
          return j
        })
      var t = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a =
          (n('./node_modules/react/index.js'),
          n('./node_modules/@mdx-js/react/dist/index.es.js')),
        c = n('./node_modules/docz/dist/index.esm.js'),
        r = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/ThemeContext/ThemeProvider.tsx'),
        i = n('./src/Toolbar/Toolbar.tsx'),
        p = n('./src/ButtonIcon/ButtonIcon.tsx'),
        d = n('./src/MaterialIcons/Copy.tsx'),
        b = n('./src/MaterialIcons/Delete.tsx'),
        l = n('./src/MaterialIcons/Download.tsx'),
        m = n('./src/MaterialIcons/Edit.tsx'),
        u = n('./src/MaterialIcons/Plus.tsx'),
        y = {},
        x = 'wrapper'
      function j(e) {
        var o = e.components,
          n = Object(t.a)(e, ['components'])
        return Object(a.b)(
          x,
          Object.assign({}, y, n, { components: o, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', { id: 'toolbar' }, 'Toolbar'),
          Object(a.b)('h2', { id: 'properties' }, 'Properties'),
          Object(a.b)(c.d, { of: i.b, mdxType: 'Props' }),
          Object(a.b)('h2', { id: 'default' }, 'Default'),
          Object(a.b)(
            c.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Toolbar>\n    <ButtonIcon appearance="primary-action" icon={Plus}>\n      Add\n    </ButtonIcon>\n    <ButtonIcon appearance="primary-action" icon={Copy}>\n      Copy\n    </ButtonIcon>\n    <ButtonIcon appearance="primary-action" icon={Edit}>\n      Edit\n    </ButtonIcon>\n    <ButtonIcon appearance="primary-action" icon={Delete}>\n      Delete\n    </ButtonIcon>\n    <ButtonIcon appearance="primary-action" icon={Download}>\n      Download\n    </ButtonIcon>\n  </Toolbar>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: c.c,
                Props: c.d,
                styled: r.default,
                ThemeProvider: s.a,
                Toolbar: i.b,
                ButtonIcon: p.b,
                Copy: d.a,
                Delete: b.a,
                Download: l.a,
                Edit: m.a,
                Plus: u.a,
              },
              mdxType: 'Playground',
            },
            Object(a.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(a.b)(
                i.b,
                { mdxType: 'Toolbar' },
                Object(a.b)(
                  p.b,
                  {
                    appearance: 'primary-action',
                    icon: u.a,
                    mdxType: 'ButtonIcon',
                  },
                  'Add'
                ),
                Object(a.b)(
                  p.b,
                  {
                    appearance: 'primary-action',
                    icon: d.a,
                    mdxType: 'ButtonIcon',
                  },
                  'Copy'
                ),
                Object(a.b)(
                  p.b,
                  {
                    appearance: 'primary-action',
                    icon: m.a,
                    mdxType: 'ButtonIcon',
                  },
                  'Edit'
                ),
                Object(a.b)(
                  p.b,
                  {
                    appearance: 'primary-action',
                    icon: b.a,
                    mdxType: 'ButtonIcon',
                  },
                  'Delete'
                ),
                Object(a.b)(
                  p.b,
                  {
                    appearance: 'primary-action',
                    icon: l.a,
                    mdxType: 'ButtonIcon',
                  },
                  'Download'
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
          value: { name: 'MDXContent', filename: 'src/Toolbar/toolbar.mdx' },
        }),
        (j.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-toolbar-toolbar.e87bed39511fd489c1d4.js.map
