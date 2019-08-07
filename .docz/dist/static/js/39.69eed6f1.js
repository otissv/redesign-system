;(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    './src/reusable/router/Users.example.tsx': function(e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'default', function() {
          return l
        })
      var s = t('./node_modules/react/index.js'),
        a = t.n(s),
        n = t('./src/Flex/index.ts'),
        u = t('./src/reusable/router/Link.tsx'),
        c = t('./src/reusable/router/Router.tsx')
      function l(e) {
        var r = e.routes
        return a.a.createElement(
          a.a.Fragment,
          null,
          'Users Page',
          a.a.createElement(
            n.Flex,
            { direction: 'row' },
            a.a.createElement(
              n.Flex,
              { direction: 'column', css: 'width: 200px;' },
              a.a.createElement(u.a, { to: '/router/users/1' }, 'User1'),
              a.a.createElement(u.a, { to: '/router/users/2' }, 'User2')
            ),
            a.a.createElement(c.a, { className: 'Router', routes: r })
          )
        )
      }
      l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'Users',
            filename: 'src/reusable/router/Users.example.tsx',
          },
        })
    },
  },
])
//# sourceMappingURL=39.71a687dd8ae96513953f.js.map
