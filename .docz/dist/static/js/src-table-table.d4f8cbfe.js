;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    './src/ButtonGroup/ButtonGroup.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        l = n.n(o),
        i = n('./src/Base/Base.tsx')
      function r(e) {
        var t = e.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: e.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: t ? 'column' : 'row',
        }
      }
      function s(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof r &&
        r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
          },
        }),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(t, 'c', function() {
          return b
        }),
        n.d(t, 'a', function() {
          return d
        })
      var u = l.a.createContext({})
      function b() {
        return Object(o.useContext)(u)
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupContext',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        }),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useButtonGroup',
              filename: 'src/ButtonGroup/ButtonGroup.tsx',
            },
          })
      var d = l.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          d = (e.onClick, e.themed),
          m = void 0 === d ? [] : d,
          f = Object(c.a)(e, ['children', 'className', 'onClick', 'themed']),
          p = Object(o.useMemo)(
            function() {
              return 'ButtonGroup '.concat(b)
            },
            [b]
          ),
          h = Object(o.useMemo)(
            function() {
              return [r, s].concat(Object(a.a)(m))
            },
            [r, s, m]
          ),
          j = f.appearance,
          O = f.context,
          y = f.size,
          x = f.stretch,
          v = Object(o.useMemo)(
            function() {
              return { appearance: j, context: O, size: y, stretch: x }
            },
            [j, O, y, x]
          )
        return l.a.createElement(
          u.Provider,
          { value: v },
          l.a.createElement(
            i.b,
            Object.assign({ role: 'group', className: p, themed: h }, f),
            t
          )
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
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
      var a = n('./src/ButtonIcon/ButtonIcon.tsx')
      n.d(t, 'ButtonIcon', function() {
        return a.a
      })
      n('./src/ButtonIcon/buttonIcon.types.ts')
    },
    './src/Checkbox/Checkbox.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        l = n.n(o),
        i = n('./src/Base/index.tsx'),
        r = n('./node_modules/lodash/fp/upperFirst.js'),
        s = n.n(r)
      function u(e) {
        var t = e.appearance,
          n = e.color
        return n[t] || n.default
      }
      function b(e) {
        var t = e.appearance,
          n = e.theme,
          a = n.color,
          c = n.animation,
          o = n.border,
          l = n.unit
        return {
          position: 'relative',
          height: l[5],
          width: l[5],
          border: o['thick'.concat(s()(t))] || o.thin,
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
            background: u({ appearance: t, color: a }),
            '.CheckboxCheckmark': { opacity: 1, transform: 'scale(0.7)' },
          },
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
            name: 'checkboxTheme',
            filename: 'src/Checkbox/checkbox.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return d
        })
      var d = l.a.memo(function(e) {
        var t = e.checked,
          n = e.className,
          r = void 0 === n ? '' : n,
          s = e.id,
          u = e.name,
          d = e.onChange,
          m = e.themed,
          f = void 0 === m ? [] : m,
          p = Object(c.a)(e, [
            'checked',
            'className',
            'id',
            'name',
            'onChange',
            'themed',
          ]),
          h = Object(o.useMemo)(
            function() {
              return 'Checkbox '.concat(r)
            },
            [r]
          ),
          j = Object(o.useMemo)(
            function() {
              return [b].concat(Object(a.a)(f))
            },
            [b, f]
          ),
          O = Object(o.useMemo)(
            function() {
              return 'disabled' === p.appearance
            },
            [p.appearance]
          )
        return l.a.createElement(
          i.Base,
          Object.assign({ className: h, themed: j }, p),
          l.a.createElement('input', {
            checked: t,
            className: 'CheckboxInput',
            disabled: O,
            id: s,
            name: u,
            onChange: d,
            type: 'checkbox',
          }),
          l.a.createElement(
            'div',
            { className: 'CheckboxBackground' },
            l.a.createElement(
              'svg',
              { className: 'CheckboxCheckmark', viewBox: '0 0 24 24' },
              l.a.createElement('path', {
                className: 'mdc-checkbox__checkmark-path',
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              })
            )
          )
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
    },
    './src/Checkbox/checkbox.types.ts': function(e, t) {
      'undefined' !== typeof CheckboxInterface &&
        CheckboxInterface &&
        CheckboxInterface === Object(CheckboxInterface) &&
        Object.isExtensible(CheckboxInterface) &&
        Object.defineProperty(CheckboxInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CheckboxInterface',
            filename: 'src/Checkbox/checkbox.types.ts',
          },
        })
    },
    './src/Checkbox/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/Checkbox/Checkbox.tsx')
      n.d(t, 'Checkbox', function() {
        return a.a
      })
      n('./src/Checkbox/checkbox.types.ts')
    },
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        l = n.n(o),
        i = n('./node_modules/lodash/kebabCase.js'),
        r = n.n(i)
      function s(e) {
        var t = e.alignItems,
          n = e.basis,
          a = e.display,
          c = e.grow,
          o = e.justifyContent,
          l = e.shrink,
          i = e.wrap
        return {
          display: a || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: c ? ''.concat(c) : '',
          shrink: l ? ''.concat(l) : '',
          justifyContent: (o && [r()(o)]) || '',
          alignItems: (t && [r()(t)]) || '',
          flexWrap: (i && [r()(i)]) || '',
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
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
      var b = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return d
      })
      var d = l.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? '' : n,
          r = e.themed,
          d = void 0 === r ? [] : r,
          m = Object(c.a)(e, ['children', 'className', 'themed']),
          f = Object(o.useMemo)(
            function() {
              return 'Flex '.concat(i)
            },
            [i]
          ),
          p = Object(o.useMemo)(
            function() {
              return [s, u].concat(Object(a.a)(d))
            },
            [s, u, d]
          )
        return l.a.createElement(
          b.Base,
          Object.assign({ className: f, themed: p }, m),
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
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/MaterialIcons/Code.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return l
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        o = n('./src/Icon/index.ts')
      function l(e) {
        return c.a.createElement(
          o.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        )
      }
      l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
        }),
        (t.b = l),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
          })
    },
    './src/MaterialIcons/PlayCircle.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return l
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        o = n('./src/Icon/index.ts')
      function l(e) {
        return c.a.createElement(
          o.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
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
            name: 'PlayCircle',
            filename: 'src/MaterialIcons/PlayCircle.tsx',
          },
        }),
        (t.b = l),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'PlayCircle',
              filename: 'src/MaterialIcons/PlayCircle.tsx',
            },
          })
    },
    './src/MaterialIcons/ViewList.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return l
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        o = n('./src/Icon/index.ts')
      function l(e) {
        return c.a.createElement(
          o.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z',
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
            name: 'ViewList',
            filename: 'src/MaterialIcons/ViewList.tsx',
          },
        }),
        (t.b = l),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ViewList',
              filename: 'src/MaterialIcons/ViewList.tsx',
            },
          })
    },
    './src/Table/table.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        o = n.n(c),
        l = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        i = n('./node_modules/docz/dist/index.esm.js'),
        r = n('./src/Flex/Flex.tsx'),
        s = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = n('./src/ThemeContext/ThemeProvider.tsx'),
        b = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        d = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        f = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        p = n('./src/Base/Base.tsx'),
        h = o.a.memo(function(e) {
          var t = e.items
          return o.a.createElement(
            'pre',
            null,
            o.a.createElement(
              'code',
              { className: 'language-javascript' },
              JSON.stringify(t, null, 2)
            )
          )
        })
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      function j(e, t, n) {
        var a = Object(c.useState)(t),
          o = Object(b.a)(a, 2),
          l = o[0],
          i = o[1],
          r =
            'sessionStorage' === n ? window.sessionStorage : window.localStorage
        function s(t) {
          if (t !== l) {
            var n = JSON.stringify(t)
            return i(t), r.setItem(e, n)
          }
        }
        function u() {
          i(void 0), r.removeItem(e)
        }
        return (
          Object(c.useEffect)(function() {
            var n = r.getItem(e)
            s((n ? JSON.parse(n) : n) || t)
          }, []),
          Object(c.useMemo)(
            function() {
              return { state: l, setItem: s, removeItem: u }
            },
            [[l, s, u]]
          )
        )
      }
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        }),
        j &&
          j === Object(j) &&
          Object.isExtensible(j) &&
          Object.defineProperty(j, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useCacheState',
              filename: 'src/reusable/cacheState/useCacheState.ts',
            },
          })
      var O = n('./src/MaterialIcons/Copy.tsx'),
        y = n('./src/MaterialIcons/Delete.tsx'),
        x = n('./src/MaterialIcons/Edit.tsx'),
        v = n('./src/MaterialIcons/Download.tsx'),
        T = n('./src/ButtonIcon/index.ts'),
        g = o.a.memo(function(e) {
          var t = e.icon,
            n = e.uid,
            l = Object(a.a)(e, ['icon', 'uid']),
            i = Object(c.useMemo)(
              function() {
                return t
              },
              [t]
            )
          return o.a.createElement(
            T.ButtonIcon,
            Object.assign({ 'data-uid': n, icon: i }, l)
          )
        })
      function _(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          l = Object(c.useMemo)(
            function() {
              return O.a
            },
            [O.a]
          )
        return o.a.createElement(
          g,
          Object.assign({ name: 'copy', onClick: t, icon: l, title: 'Copy' }, n)
        )
      }
      'undefined' !== typeof g &&
        g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        }),
        _ &&
          _ === Object(_) &&
          Object.isExtensible(_) &&
          Object.defineProperty(_, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableCopyButton',
              filename: 'src/Table/TableButton.tsx',
            },
          })
      var C = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          l = Object(c.useMemo)(
            function() {
              return y.a
            },
            [y.a]
          )
        return o.a.createElement(
          g,
          Object.assign(
            { name: 'delete', onClick: t, icon: l, title: 'Delete' },
            n
          )
        )
      }
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDeleteButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var E = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          l = Object(c.useMemo)(
            function() {
              return v.a
            },
            [v.a]
          )
        return o.a.createElement(
          g,
          Object.assign(
            { name: 'Download', onClick: t, icon: l, title: 'Download' },
            n
          )
        )
      }
      E &&
        E === Object(E) &&
        Object.isExtensible(E) &&
        Object.defineProperty(E, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDownloadButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var k = function(e) {
        var t = e.children,
          n = e.uid,
          l = Object(a.a)(e, ['children', 'uid']),
          i = Object(c.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return o.a.createElement(
          g,
          Object.assign(
            { as: 'a', name: 'Edit', icon: i, title: 'Edit', 'data-uid': n },
            l
          ),
          t
        )
      }
      k &&
        k === Object(k) &&
        Object.isExtensible(k) &&
        Object.defineProperty(k, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableEditLink',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      'undefined' !== typeof g &&
        g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        })
      var I = o.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          l = void 0 === n ? '' : n,
          i = e.dispatch,
          r = e.handleAdd,
          s = e.handleDeleteSelected,
          u = e.itemsToArray,
          b = e.loading,
          d = e.onRowClick,
          f = e.rows,
          p = void 0 === f ? [] : f,
          h = e.selected,
          O = e.tableName,
          y = Object(a.a)(e, [
            'allSelected',
            'baseRoute',
            'dispatch',
            'handleAdd',
            'handleDeleteSelected',
            'itemsToArray',
            'loading',
            'onRowClick',
            'rows',
            'selected',
            'tableName',
          ]),
          x = j(''.concat(O, 'ExpandRows'), []),
          v = x.state,
          T = x.setItem,
          g = Object(c.useCallback)(
            function(e) {
              e.preventDefault(),
                i({
                  type: 'TOGGLE_SELECTED_ITEMS',
                  selected: [e.currentTarget.name],
                })
            },
            [i]
          ),
          I = Object(c.useCallback)(function(e) {
            e.preventDefault()
          }, []),
          w = Object(c.useCallback)(
            function(e) {
              e.preventDefault()
              var t = e.currentTarget.dataset.uid,
                n = function(e) {
                  return e === t
                }
              v.find(n)
                ? T(
                    v.filter(function(e) {
                      return !n(e)
                    })
                  )
                : T([].concat(Object(m.a)(v), [t]))
            },
            [T]
          ),
          P = Object(c.useCallback)(
            function(e) {
              e.preventDefault()
              var t = e.currentTarget.dataset.uid
              d && d(e, t)
            },
            [d]
          ),
          S = Object(c.useMemo)(
            function() {
              return p.map(function(e, n) {
                var a = e.column,
                  d = e.rowDetail,
                  m = d
                return o.a.createElement(
                  c.Fragment,
                  { key: n },
                  o.a.createElement(
                    'tr',
                    null,
                    a.map(function(e) {
                      return o.a.createElement(
                        c.Fragment,
                        { key: e.key },
                        e.component({
                          dispatch: i,
                          expandRows: v,
                          handleAdd: r,
                          handleChange: g,
                          handleDelete: I,
                          handleDeleteSelected: s,
                          handleExpandRows: w,
                          handleRowClick: P,
                          itemsToArray: u,
                          loading: b,
                          selected: h,
                          allSelected: t,
                          Copy: function(e) {
                            return o.a.createElement(_, e)
                          },
                          Edit: function(e) {
                            return o.a.createElement(
                              k,
                              Object.assign({}, e, {
                                href: ''.concat(l, '/edit'),
                              })
                            )
                          },
                          Delete: function(e) {
                            return o.a.createElement(
                              C,
                              Object.assign({ onClick: I }, e)
                            )
                          },
                          Download: function(e) {
                            return o.a.createElement(E, e)
                          },
                        })
                      )
                    })
                  ),
                  d && o.a.createElement(m, { expandRows: v })
                )
              })
            },
            [v, r, g, I, s, w, p]
          )
        return o.a.createElement(
          'tbody',
          Object.assign({ className: 'TableBody' }, y),
          S
        )
      })
      'undefined' !== typeof I &&
        I &&
        I === Object(I) &&
        Object.isExtensible(I) &&
        Object.defineProperty(I, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var w = I
      'undefined' !== typeof I &&
        I &&
        I === Object(I) &&
        Object.isExtensible(I) &&
        Object.defineProperty(I, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var P = o.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          l = void 0 === n ? '' : n,
          i = e.dispatch,
          r = e.handleAdd,
          s = e.handleDeleteSelected,
          u = e.headings,
          b = e.itemsToArray,
          d = e.loading,
          m = e.rows,
          f = e.selected,
          p = e.tableName,
          h = Object(a.a)(e, [
            'allSelected',
            'baseRoute',
            'dispatch',
            'handleAdd',
            'handleDeleteSelected',
            'headings',
            'itemsToArray',
            'loading',
            'rows',
            'selected',
            'tableName',
          ]),
          j = Object(c.useMemo)(
            function() {
              return (
                u &&
                o.a.createElement(
                  'thead',
                  null,
                  o.a.createElement(
                    'tr',
                    null,
                    u.map(function(e, t) {
                      return 'function' === typeof e
                        ? o.a.createElement('th', { key: t }, e())
                        : o.a.createElement('th', { key: t }, e)
                    })
                  )
                )
              )
            },
            [u]
          )
        return o.a.createElement(
          c.Fragment,
          null,
          j,
          o.a.createElement(
            w,
            Object.assign(
              {
                allSelected: t,
                baseRoute: l,
                className: 'TableView',
                dispatch: i,
                handleAdd: r,
                handleDeleteSelected: s,
                rows: m,
                tableName: p,
                loading: d,
                selected: f,
                itemsToArray: b,
              },
              h
            )
          )
        )
      })
      'undefined' !== typeof P &&
        P &&
        P === Object(P) &&
        Object.isExtensible(P) &&
        Object.defineProperty(P, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      'undefined' !== typeof P &&
        P &&
        P === Object(P) &&
        Object.isExtensible(P) &&
        Object.defineProperty(P, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      var S = n('./src/Toolbar/Toolbar.tsx'),
        H = n('./src/MaterialIcons/Plus.tsx'),
        B = n('./src/ButtonIcon/ButtonIcon.tsx'),
        D = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            l = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(c.useMemo)(
              function() {
                return H.a
              },
              [H.a]
            )
          return o.a.createElement(
            B.b,
            Object.assign(
              {
                as: 'a',
                alt: 'add',
                appearance: 'active',
                uid: 'add',
                onClick: l,
                icon: i,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Add'
          )
        }
      D &&
        D === Object(D) &&
        Object.isExtensible(D) &&
        Object.defineProperty(D, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      D &&
        D === Object(D) &&
        Object.isExtensible(D) &&
        Object.defineProperty(D, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      var A = n('./node_modules/react-copy-to-clipboard/lib/index.js'),
        M = function(e) {
          var t = e.data,
            n = e.onClick,
            l = Object(a.a)(e, ['data', 'onClick']),
            i = Object(c.useMemo)(
              function() {
                return 'string' === typeof t ? t : JSON.stringify(t, null, 2)
              },
              [t]
            ),
            r = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), n && n(e)
              },
              [n]
            ),
            s = Object(c.useMemo)(
              function() {
                return O.a
              },
              [O.a]
            )
          return o.a.createElement(
            A.CopyToClipboard,
            { text: i, copy: r },
            o.a.createElement(
              B.b,
              Object.assign(
                {
                  alt: 'copy',
                  appearance: 'active',
                  uid: 'copy',
                  icon: s,
                  css:
                    '\n          svg.Icon {\n            padding-right: 5px;\n          }\n        ',
                },
                l
              ),
              'Copy'
            )
          )
        }
      M &&
        M === Object(M) &&
        Object.isExtensible(M) &&
        Object.defineProperty(M, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      M &&
        M === Object(M) &&
        Object.isExtensible(M) &&
        Object.defineProperty(M, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      var R = function(e) {
        var t = e.onClick,
          n = Object(a.a)(e, ['onClick']),
          l = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          i = Object(c.useMemo)(
            function() {
              return y.a
            },
            [y.a]
          )
        return o.a.createElement(
          B.b,
          Object.assign(
            {
              alt: 'delete',
              appearance: 'active',
              uid: 'delete',
              onClick: l,
              icon: i,
              css:
                '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
            },
            n
          ),
          'Delete'
        )
      }
      R &&
        R === Object(R) &&
        Object.isExtensible(R) &&
        Object.defineProperty(R, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      R &&
        R === Object(R) &&
        Object.isExtensible(R) &&
        Object.defineProperty(R, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      var N = n('./node_modules/js-file-download/file-download.js'),
        V = n.n(N),
        L = function(e) {
          var t = e.onClick,
            n = e.data,
            l = e.fileName,
            i = Object(a.a)(e, ['onClick', 'data', 'fileName']),
            r = Object(c.useMemo)(
              function() {
                return 'string' === typeof n ? n : JSON.stringify(n, null, 2)
              },
              [n]
            ),
            s = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), r && V()(r, l), t && t(e)
              },
              [t]
            ),
            u = Object(c.useMemo)(
              function() {
                return v.a
              },
              [v.a]
            )
          return o.a.createElement(
            B.b,
            Object.assign(
              {
                alt: 'download',
                appearance: 'active',
                uid: 'delete',
                onClick: s,
                icon: u,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              i
            ),
            'Download'
          )
        }
      L &&
        L === Object(L) &&
        Object.isExtensible(L) &&
        Object.defineProperty(L, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      L &&
        L === Object(L) &&
        Object.isExtensible(L) &&
        Object.defineProperty(L, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      var G = function(e) {
        var t = e.onClick,
          n = Object(a.a)(e, ['onClick']),
          l = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          i = Object(c.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return o.a.createElement(
          B.b,
          Object.assign(
            {
              as: 'a',
              alt: 'edit',
              appearance: 'active',
              uid: 'edit',
              onClick: l,
              icon: i,
              css:
                '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
            },
            n
          ),
          'Edit'
        )
      }
      G &&
        G === Object(G) &&
        Object.isExtensible(G) &&
        Object.defineProperty(G, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      G &&
        G === Object(G) &&
        Object.isExtensible(G) &&
        Object.defineProperty(G, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      var z = n('./src/MaterialIcons/PlayCircle.tsx'),
        F = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            l = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(c.useMemo)(
              function() {
                return z.a
              },
              [z.a]
            )
          return o.a.createElement(
            B.b,
            Object.assign(
              {
                alt: 'execute',
                appearance: 'active',
                uid: 'execute',
                onClick: l,
                icon: i,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Run'
          )
        }
      F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      var J = n('./src/ButtonGroup/ButtonGroup.tsx'),
        W = n('./src/Base/index.tsx'),
        X = n('./src/MaterialIcons/Code.tsx'),
        U = n('./src/MaterialIcons/ViewList.tsx'),
        q = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
        )
      function K(e) {
        return { height: e.height || '100%', overflow: 'auto' }
      }
      function Q(e) {
        var t = e.condensed,
          n = e.hover,
          a = e.theme,
          c = a.animation,
          o = a.border,
          l = a.color,
          i = a.elevate,
          r = a.unit
        return {
          borderCollapse: 'collapse',
          transition: c.easeMedium(),
          'td, th': {
            lineHeight: t ? 2 : 2.5,
            padding: 0,
            '&:first-child': { paddingLeft: r[4] },
            '&:last-child': { paddingRight: r[4] },
          },
          td: { borderTop: o.thin },
          'tr:hover': {
            background: n ? l['grey-800'] : '',
            boxShadow: n ? i[2] : '',
          },
          a: {
            background: 'none',
            display: 'block',
            height: '100%',
            marginRight: '3px',
            border: o.thinTransparent,
          },
          'a:hover, a:active': {
            background: 'none',
            border: o.thinTransparent,
            color: l.link,
          },
        }
      }
      function Y(e) {
        return Object(q.a)(e.theme), { height: 0, visibility: 'hidden' }
      }
      function Z(e) {
        return Object(q.a)(e.theme), { display: 'flex', marginLeft: 'auto' }
      }
      K &&
        K === Object(K) &&
        Object.isExtensible(K) &&
        Object.defineProperty(K, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'tableContainerTheme',
            filename: 'src/Table/table.theme.ts',
          },
        }),
        'undefined' !== typeof Q &&
          Q &&
          Q === Object(Q) &&
          Object.isExtensible(Q) &&
          Object.defineProperty(Q, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'tableTheme', filename: 'src/Table/table.theme.ts' },
          }),
        'undefined' !== typeof Y &&
          Y &&
          Y === Object(Y) &&
          Object.isExtensible(Y) &&
          Object.defineProperty(Y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableCaptionTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof Z &&
          Z &&
          Z === Object(Z) &&
          Object.isExtensible(Z) &&
          Object.defineProperty(Z, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableViewsButtonTheme',
              filename: 'src/Table/table.theme.ts',
            },
          })
      var $ = function(e) {
        var t = e.className,
          n = e.currentView,
          l = e.onClick,
          i = e.themed,
          r = Object(a.a)(e, ['className', 'currentView', 'onClick', 'themed']),
          s = Object(c.useMemo)(
            function() {
              return 'ToolbarViewsButton '.concat(t)
            },
            [t]
          ),
          u = Object(c.useMemo)(
            function() {
              return [Z].concat(Object(m.a)(i))
            },
            [Z, i]
          ),
          b = Object(c.useCallback)(
            function(e) {
              e.preventDefault()
              var t = e.currentTarget.dataset.uid
              l && l(e, { id: t })
            },
            [l]
          ),
          d = Object(c.useCallback)(
            function(e) {
              return n === e ? 'border-bottom: 1px solid #fff;' : ''
            },
            [n]
          ),
          f = Object(c.useMemo)(
            function() {
              return U.a
            },
            [U.a]
          ),
          p = Object(c.useMemo)(
            function() {
              return X.a
            },
            [X.a]
          )
        return o.a.createElement(
          W.Base,
          Object.assign({ className: s, themed: u }, r),
          o.a.createElement(
            J.b,
            null,
            o.a.createElement(
              B.b,
              {
                alt: 'Tabular',
                appearance: 'active',
                icon: f,
                onClick: b,
                styled: d('table'),
                title: 'Table',
                uid: 'table',
                css:
                  '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
              },
              'Tabular'
            ),
            o.a.createElement(
              B.b,
              {
                Json: !0,
                alt: 'json',
                appearance: 'secondary',
                icon: p,
                onClick: b,
                styled: d('json'),
                title: 'JSON',
                uid: 'json',
                css:
                  '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
              },
              'JSON'
            )
          )
        )
      }
      $ &&
        $ === Object($) &&
        Object.isExtensible($) &&
        Object.defineProperty($, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        }),
        ($.defaultProps = { className: '', themed: [] })
      $ &&
        $ === Object($) &&
        Object.isExtensible($) &&
        Object.defineProperty($, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        })
      var ee = function(e) {
        var t = e.children,
          n = e.className,
          l = e.themed,
          i = Object(a.a)(e, ['children', 'className', 'themed']),
          r = Object(c.useMemo)(
            function() {
              return 'TableCaption '.concat(n)
            },
            [n]
          ),
          s = Object(c.useMemo)(
            function() {
              return [Y].concat(Object(m.a)(l))
            },
            [Y, l]
          )
        return o.a.createElement(
          p.b,
          Object.assign({ as: 'caption', className: r, themed: s }, i),
          t
        )
      }
      ee &&
        ee === Object(ee) &&
        Object.isExtensible(ee) &&
        Object.defineProperty(ee, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        }),
        (ee.defaultProps = { className: '', themed: [] })
      function te() {
        var e = Object(f.a)(['\n  display: inline-block;\n'])
        return (
          (te = function() {
            return e
          }),
          e
        )
      }
      ee &&
        ee === Object(ee) &&
        Object.isExtensible(ee) &&
        Object.defineProperty(ee, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        })
      var ne = s.default.span(te()),
        ae = o.a.memo(function(e) {
          var t = e.baseRoute,
            n = void 0 === t ? '' : t,
            l = e.className,
            i = void 0 === l ? '' : l,
            r = e.caption,
            s = e.headings,
            u = e.hook,
            f = e.initialValue,
            O = e.name,
            y = (e.numbered, e.onAdd),
            x = e.onCopy,
            v = e.onDelete,
            T = e.onDeleteSelected,
            g = e.onDownload,
            _ = e.onEdit,
            C = e.onExecute,
            E = e.rows,
            k = e.onRowClick,
            I = e.title,
            w = e.condensed,
            S = e.hover,
            H = e.toolbar,
            B = void 0 === H ? [] : H,
            D = e.height,
            A = e.themed,
            M = void 0 === A ? [] : A,
            R = Object(a.a)(e, [
              'baseRoute',
              'className',
              'caption',
              'headings',
              'hook',
              'initialValue',
              'name',
              'numbered',
              'onAdd',
              'onCopy',
              'onDelete',
              'onDeleteSelected',
              'onDownload',
              'onEdit',
              'onExecute',
              'rows',
              'onRowClick',
              'title',
              'condensed',
              'hover',
              'toolbar',
              'height',
              'themed',
            ]),
            N = Object(c.useMemo)(
              function() {
                return 'TableContainer '.concat(i)
              },
              [i]
            ),
            V = Object(c.useMemo)(
              function() {
                return [Q].concat(Object(m.a)(M))
              },
              [Q, M]
            ),
            L = u(),
            G = L.loading,
            z = L.selected,
            F = L.dispatch,
            J = L.itemsToArray,
            W = L.items,
            X = Object(c.useMemo)(
              function() {
                return W
              },
              [W]
            ),
            U = Object(c.useMemo)(
              function() {
                return f || J()
              },
              [f, J]
            )
          Object(c.useEffect)(
            function() {
              te({ type: 'SET_ITEM_LIST', itemList: U })
            },
            [U]
          )
          var q = Object(c.useCallback)(function(e, t) {
              switch (t.type) {
                case 'SET_ITEM_LIST':
                  return Object(d.a)({}, e, { itemList: t.itemList })
                case 'SET_VARIABLES':
                  return Object(d.a)({}, e, { variables: t.variables })
                default:
                  return e
              }
            }, []),
            Y = Object(c.useReducer)(q, { variables: {}, itemList: [] }),
            Z = Object(b.a)(Y, 2),
            $ = Z[0].itemList,
            te = Z[1],
            ne = j(''.concat(O, '_Table'), 'table'),
            ae = ne.state,
            le = ne.setItem,
            ie = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), y && y(e)
              },
              [y]
            ),
            re = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), v && v(e)
              },
              [v]
            ),
            se = Object(c.useCallback)(
              function(e) {
                e.preventDefault(),
                  window.confirm('Drop collections?\n'.concat(z.join('\n'))) &&
                    T &&
                    T(e)
              },
              [T]
            ),
            ue = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), _ && _(e)
              },
              [_]
            ),
            be = Object(c.useCallback)(
              function(e) {
                e.preventDefault(),
                  C().then(function(e) {
                    e && te({ type: 'SET_ITEM_LIST', itemList: e })
                  })
              },
              [te, C]
            ),
            de = Object(c.useCallback)(
              function(e, t) {
                var n = t.id
                e.preventDefault(), n !== ae && le(n)
              },
              [le]
            ),
            me = o.a.useState(!1),
            fe = Object(b.a)(me, 2),
            pe = fe[0],
            he = fe[1],
            je = o.a.useCallback(
              function(e) {
                he(e.currentTarget.checked),
                  F({
                    type: 'SET_SELECTED',
                    selected: e.currentTarget.checked ? Object.keys(W) : [],
                  })
              },
              [pe, te, W]
            ),
            Oe = function(e) {
              return 'function' === typeof e
                ? e({ allSelected: pe, handleSelectHeadingChange: je })
                : e
            },
            ye = Object(c.useMemo)(
              function() {
                return s.map(Oe)
              },
              [s]
            ),
            xe = Object(c.useMemo)(
              function() {
                return 'function' === typeof E ? E($) : E
              },
              [$, E]
            )
          return o.a.createElement(
            c.Fragment,
            null,
            B.length > 0
              ? o.a.createElement(oe, {
                  baseRoute: n,
                  borderBottom: 'thin',
                  currentView: ae,
                  data: U,
                  items: z,
                  onAdd: ie,
                  onCopy: x,
                  onDelete: re,
                  onDeleteSelected: se,
                  onDownload: g,
                  onEdit: ue,
                  onExecute: be,
                  onSwitchView: de,
                  paddingBottom: 2,
                  selectToolbar: ce,
                  title: I,
                  toolbar: B,
                })
              : null,
            'table' === ae
              ? o.a.createElement(
                  p.b,
                  Object.assign({ className: N, themed: [K], height: D }, R),
                  o.a.createElement(
                    p.b,
                    {
                      as: 'table',
                      className: 'Table',
                      themed: V,
                      condensed: w,
                      hover: S,
                    },
                    r ? o.a.createElement(ee, null, r) : null,
                    o.a.createElement(P, {
                      allSelected: pe,
                      baseRoute: n,
                      dispatch: F,
                      handleAdd: ie,
                      handleDeleteSelected: se,
                      headings: ye,
                      itemsToArray: J,
                      loading: G,
                      rows: xe,
                      selected: z,
                      tableName: O,
                      onRowClick: k,
                    })
                  )
                )
              : o.a.createElement(
                  p.b,
                  Object.assign({ className: N, themed: [K], height: D }, R),
                  o.a.createElement(h, { items: X })
                )
          )
        })
      'undefined' !== typeof ae &&
        ae &&
        ae === Object(ae) &&
        Object.isExtensible(ae) &&
        Object.defineProperty(ae, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      var ce = o.a.memo(function(e) {
          var t = e.selected,
            n = e.handleDeleteSelected
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(ne, null, t, ' selected '),
            o.a.createElement(R, {
              alt: 'delete',
              onClick: n,
              title: 'Delete Collection',
            })
          )
        }),
        oe = o.a.memo(function(e) {
          var t = e.baseRoute,
            n = e.items,
            a = e.onDeleteSelected,
            l = e.onSwitchView,
            i = e.selectToolbar,
            r = e.currentView,
            s = e.data,
            u = e.onAdd,
            b = e.onCopy,
            d = e.onDelete,
            m = e.onDownload,
            f = e.onEdit,
            p = e.onExecute,
            h = e.title,
            j = e.toolbar,
            O = function(e) {
              switch (e) {
                case 'add':
                  return o.a.createElement(D, {
                    alt: 'add',
                    key: 'add',
                    onClick: u,
                    href: '/'.concat(t, '/new'),
                  })
                case 'copy':
                  return o.a.createElement(M, {
                    alt: 'copy',
                    key: 'copy',
                    data: s,
                    onClick: b,
                  })
                case 'edit':
                  return o.a.createElement(G, {
                    alt: 'edit',
                    key: 'edit',
                    onClick: f,
                    href: '/'.concat(t, '/edit'),
                  })
                case 'delete':
                  return o.a.createElement(R, {
                    alt: 'delete',
                    key: 'delete',
                    onClick: d,
                    title: 'Delete',
                  })
                case 'download':
                  return o.a.createElement(L, {
                    alt: 'download',
                    key: 'download',
                    data: s,
                    onClick: m,
                    fileName: h
                      ? 'guru_download_'.concat(h, '.json')
                      : 'guru_download.json',
                  })
                case 'execute':
                  return o.a.createElement(F, {
                    alt: 'execute',
                    key: 'execute',
                    onClick: p,
                    title: 'Execute',
                  })
                case 'views':
                  return o.a.createElement($, {
                    key: 'views',
                    onClick: l,
                    currentView: r,
                  })
                default:
                  return null
              }
            },
            y = Object(c.useMemo)(
              function() {
                return o.a.createElement(
                  c.Fragment,
                  null,
                  j.map(function(e) {
                    return 'function' === typeof e
                      ? e({ onSwitchView: l, currentView: r, onAdd: u })
                      : O(e)
                  })
                )
              },
              [O, r, u, l, j]
            )
          return o.a.createElement(
            S.a,
            {
              baseRoute: t,
              items: n,
              onDeleteSelected: a,
              onSwitchView: l,
              selectToolbar: i,
              borderBottom: 'thin',
              paddingBottom: 2,
            },
            y
          )
        })
      'undefined' !== typeof ae &&
        ae &&
        ae === Object(ae) &&
        Object.isExtensible(ae) &&
        Object.defineProperty(ae, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      var le = n('./src/reusable/collectionHash/index.ts'),
        ie = Object(m.a)(new Array(100))
      function re() {
        var e = {
            uid: 'id',
            items: ie.map(function(e, t) {
              return {
                id: 'id_'.concat(t),
                name: 'Project '.concat(t),
                endpoint: 'http://project'.concat(t, '.com'),
              }
            }),
          },
          t = Object(le.useCollectionHashReducer)(e),
          n = Object(b.a)(t, 2),
          a = n[0],
          o = n[1]
        return Object(c.useMemo)(
          function() {
            return Object(d.a)({}, a, {
              dispatch: o,
              itemsToArray: function() {
                return Object(le.itemsToArray)(a.items)
              },
            })
          },
          [a, o]
        )
      }
      re &&
        re === Object(re) &&
        Object.isExtensible(re) &&
        Object.defineProperty(re, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'useTable', filename: 'src/Table/table.example.tsx' },
        })
      var se = n('./src/Checkbox/index.ts'),
        ue = function(e) {
          var t = e.handleChange,
            n = e.id,
            l = e.checked,
            i = void 0 !== l && l,
            r = Object(a.a)(e, ['handleChange', 'id', 'checked']),
            s = Object(c.useState)(i),
            u = Object(b.a)(s, 2),
            d = u[0],
            m = u[1]
          Object(c.useEffect)(
            function() {
              i !== d && m(i)
            },
            [i]
          )
          return o.a.createElement(
            'td',
            { style: { width: '48px' } },
            o.a.createElement(
              se.Checkbox,
              Object.assign(
                {
                  checked: d,
                  onChange: function(e) {
                    m(!d), t && t(e)
                  },
                  name: n,
                },
                r
              )
            )
          )
        }
      'undefined' !== typeof ue &&
        ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      'undefined' !== typeof ue &&
        ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      var be = o.a.memo(function(e) {
        var t = e.onChange,
          n = e.checked,
          a = void 0 !== n && n
        return o.a.createElement(se.Checkbox, {
          name: 'allSelected',
          checked: a,
          onChange: t,
        })
      })
      'undefined' !== typeof be &&
        be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        })
      'undefined' !== typeof be &&
        be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        }),
        n.d(t, 'default', function() {
          return pe
        })
      de = 'Edit'
      var de,
        me = {},
        fe = 'wrapper'
      function pe(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components'])
        return Object(l.b)(
          fe,
          Object.assign({}, me, n, { components: t, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'table' }, 'Table'),
          Object(l.b)('h2', { id: 'properties' }, 'Properties'),
          Object(l.b)(i.d, { of: ae, mdxType: 'Props' }),
          Object(l.b)('h2', { id: 'default' }, 'Default'),
          Object(l.b)(
            i.c,
            {
              __position: 1,
              __code:
                "<ThemeProvider>\n  <Table\n    height=\"250px\"\n    name=\"TableDeafult\"\n    caption=\"Table caption\"\n    headings={['', 'ID', 'Name', 'Endpoint', '']}\n    baseRoute=\"/table/#\"\n    hook={useTable}\n    rows={items =>\n      items.map(({ id, name, endpoint }, index) => ({\n        column: [\n          {\n            key: 'index',\n            component: ({ handleChange, selected }) => <td>{index}</td>,\n          },\n          {\n            key: 'id',\n            component: () => <td>{id}</td>,\n          },\n          {\n            key: 'name',\n            component: () => <td>{name}</td>,\n          },\n          {\n            key: 'endpoint',\n            component: () => (\n              <td>\n                <a href=\"#\">{endpoint}</a>\n              </td>\n            ),\n          },\n          {\n            key: 'actions',\n            component: ({ Edit }) => (\n              <td style={{ textAlign: 'right' }}>\n                <Edit appearance=\"tertiary\" uid={name} />\n              </td>\n            ),\n          },\n        ],\n      }))\n    }\n  />\n</ThemeProvider>",
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: ae,
                useTable: re,
                TableRowSelect: ue,
                AllSelectedHeading: be,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(ae, {
                height: '250px',
                name: 'TableDeafult',
                caption: 'Table caption',
                headings: ['', 'ID', 'Name', 'Endpoint', ''],
                baseRoute: '/table/#',
                hook: re,
                rows: function(e) {
                  return e.map(function(e, t) {
                    var n = e.id,
                      a = e.name,
                      c = e.endpoint
                    return {
                      column: [
                        {
                          key: 'index',
                          component: function(e) {
                            e.handleChange, e.selected
                            return Object(l.b)('td', null, t)
                          },
                        },
                        {
                          key: 'id',
                          component: function() {
                            return Object(l.b)('td', null, n)
                          },
                        },
                        {
                          key: 'name',
                          component: function() {
                            return Object(l.b)('td', null, a)
                          },
                        },
                        {
                          key: 'endpoint',
                          component: function() {
                            return Object(l.b)(
                              'td',
                              null,
                              Object(l.b)('a', { href: '#' }, c)
                            )
                          },
                        },
                        {
                          key: 'actions',
                          component: function(e) {
                            var t = e.Edit
                            return Object(l.b)(
                              'td',
                              { style: { textAlign: 'right' } },
                              Object(l.b)(t, {
                                appearance: 'tertiary',
                                uid: a,
                                mdxType: 'Edit',
                              })
                            )
                          },
                        },
                      ],
                    }
                  })
                },
                mdxType: 'Table',
              })
            )
          ),
          Object(l.b)('h2', { id: 'selectable' }, 'Selectable'),
          Object(l.b)(
            i.c,
            {
              __position: 2,
              __code:
                "<ThemeProvider>\n  <Table\n    height=\"250px\"\n    name=\"TableSelect\"\n    selectable\n    headings={['', 'ID', 'Name', 'Endpoint']}\n    hook={useTable}\n    rows={items =>\n      items.map(({ id, name, endpoint }) => ({\n        column: [\n          {\n            key: 'select',\n            component: ({ handleChange, selected }) => (\n              <TableRowSelect\n                id={id}\n                handleChange={handleChange}\n                selected={selected}\n              />\n            ),\n          },\n          {\n            key: 'id',\n            component: () => <td>{id}</td>,\n          },\n          {\n            key: 'name',\n            component: () => <td>{name}</td>,\n          },\n          {\n            key: 'endpoint',\n            component: () => (\n              <td>\n                <a href=\"#\">{endpoint}</a>\n              </td>\n            ),\n          },\n        ],\n      }))\n    }\n  />\n</ThemeProvider>",
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: ae,
                useTable: re,
                TableRowSelect: ue,
                AllSelectedHeading: be,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(ae, {
                height: '250px',
                name: 'TableSelect',
                selectable: !0,
                headings: ['', 'ID', 'Name', 'Endpoint'],
                hook: re,
                rows: function(e) {
                  return e.map(function(e) {
                    var t = e.id,
                      n = e.name,
                      a = e.endpoint
                    return {
                      column: [
                        {
                          key: 'select',
                          component: function(e) {
                            var n = e.handleChange,
                              a = e.selected
                            return Object(l.b)(ue, {
                              id: t,
                              handleChange: n,
                              selected: a,
                              mdxType: 'TableRowSelect',
                            })
                          },
                        },
                        {
                          key: 'id',
                          component: function() {
                            return Object(l.b)('td', null, t)
                          },
                        },
                        {
                          key: 'name',
                          component: function() {
                            return Object(l.b)('td', null, n)
                          },
                        },
                        {
                          key: 'endpoint',
                          component: function() {
                            return Object(l.b)(
                              'td',
                              null,
                              Object(l.b)('a', { href: '#' }, a)
                            )
                          },
                        },
                      ],
                    }
                  })
                },
                mdxType: 'Table',
              })
            )
          ),
          Object(l.b)('h2', { id: 'hover' }, 'Hover'),
          Object(l.b)(
            i.c,
            {
              __position: 3,
              __code:
                "<ThemeProvider>\n  <Table\n    height=\"250px\"\n    name=\"TableHover\"\n    hover\n    headings={['ID', 'Name', 'Endpoint']}\n    hook={useTable}\n    rows={items =>\n      items.map(({ id, name, endpoint }) => ({\n        column: [\n          {\n            key: 'id',\n            component: () => <td>{id}</td>,\n          },\n          {\n            key: 'name',\n            component: () => <td>{name}</td>,\n          },\n          {\n            key: 'endpoint',\n            component: () => (\n              <td>\n                <a href=\"#\">{endpoint}</a>\n              </td>\n            ),\n          },\n        ],\n      }))\n    }\n  />\n</ThemeProvider>",
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: ae,
                useTable: re,
                TableRowSelect: ue,
                AllSelectedHeading: be,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(ae, {
                height: '250px',
                name: 'TableHover',
                hover: !0,
                headings: ['ID', 'Name', 'Endpoint'],
                hook: re,
                rows: function(e) {
                  return e.map(function(e) {
                    var t = e.id,
                      n = e.name,
                      a = e.endpoint
                    return {
                      column: [
                        {
                          key: 'id',
                          component: function() {
                            return Object(l.b)('td', null, t)
                          },
                        },
                        {
                          key: 'name',
                          component: function() {
                            return Object(l.b)('td', null, n)
                          },
                        },
                        {
                          key: 'endpoint',
                          component: function() {
                            return Object(l.b)(
                              'td',
                              null,
                              Object(l.b)('a', { href: '#' }, a)
                            )
                          },
                        },
                      ],
                    }
                  })
                },
                mdxType: 'Table',
              })
            )
          ),
          Object(l.b)('h2', { id: 'condensed' }, 'Condensed'),
          Object(l.b)(
            i.c,
            {
              __position: 4,
              __code:
                "<ThemeProvider>\n  <Table\n    height=\"250px\"\n    name=\"TableCondensed\"\n    condensed\n    headings={['ID', 'Name', 'Endpoint']}\n    hook={useTable}\n    rows={items =>\n      items.map(({ id, name, endpoint }) => ({\n        column: [\n          {\n            key: 'id',\n            component: () => <td>{id}</td>,\n          },\n          {\n            key: 'name',\n            component: () => <td>{name}</td>,\n          },\n          {\n            key: 'endpoint',\n            component: () => (\n              <td>\n                <a href=\"#\">{endpoint}</a>\n              </td>\n            ),\n          },\n        ],\n      }))\n    }\n  />\n</ThemeProvider>",
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: ae,
                useTable: re,
                TableRowSelect: ue,
                AllSelectedHeading: be,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(ae, {
                height: '250px',
                name: 'TableCondensed',
                condensed: !0,
                headings: ['ID', 'Name', 'Endpoint'],
                hook: re,
                rows: function(e) {
                  return e.map(function(e) {
                    var t = e.id,
                      n = e.name,
                      a = e.endpoint
                    return {
                      column: [
                        {
                          key: 'id',
                          component: function() {
                            return Object(l.b)('td', null, t)
                          },
                        },
                        {
                          key: 'name',
                          component: function() {
                            return Object(l.b)('td', null, n)
                          },
                        },
                        {
                          key: 'endpoint',
                          component: function() {
                            return Object(l.b)(
                              'td',
                              null,
                              Object(l.b)('a', { href: '#' }, a)
                            )
                          },
                        },
                      ],
                    }
                  })
                },
                mdxType: 'Table',
              })
            )
          ),
          Object(l.b)('h2', { id: 'toolbar' }, 'Toolbar'),
          Object(l.b)(
            i.c,
            {
              __position: 5,
              __code:
                "<ThemeProvider>\n  <Table\n    height=\"250px\"\n    baseRoute=\"/table/#\"\n    name=\"TableToolbar\"\n    caption=\"Table caption\"\n    headings={[\n      ({ handleSelectHeadingChange }) => (\n        <AllSelectedHeading onChange={handleSelectHeadingChange} />\n      ),\n      'ID',\n      'Name',\n      'Endpoint',\n    ]}\n    hook={useTable}\n    toolbar={['add', 'copy', 'download', 'views']}\n    rows={items =>\n      items.map(({ id, name, endpoint }, index) => ({\n        column: [\n          {\n            key: 'select',\n            component: ({ handleChange, allSelected }) => (\n              <TableRowSelect\n                id={id}\n                handleChange={handleChange}\n                checked={allSelected}\n              />\n            ),\n          },\n          {\n            key: 'id',\n            component: () => <td>{id}</td>,\n          },\n          {\n            key: 'name',\n            component: () => <td>{name}</td>,\n          },\n          {\n            key: 'endpoint',\n            component: () => (\n              <td>\n                <a href=\"#\">{endpoint}</a>\n              </td>\n            ),\n          },\n        ],\n      }))\n    }\n  />\n</ThemeProvider>",
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: ae,
                useTable: re,
                TableRowSelect: ue,
                AllSelectedHeading: be,
              },
              mdxType: 'Playground',
            },
            Object(l.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(l.b)(ae, {
                height: '250px',
                baseRoute: '/table/#',
                name: 'TableToolbar',
                caption: 'Table caption',
                headings: [
                  function(e) {
                    var t = e.handleSelectHeadingChange
                    return Object(l.b)(be, {
                      onChange: t,
                      mdxType: 'AllSelectedHeading',
                    })
                  },
                  'ID',
                  'Name',
                  'Endpoint',
                ],
                hook: re,
                toolbar: ['add', 'copy', 'download', 'views'],
                rows: function(e) {
                  return e.map(function(e, t) {
                    var n = e.id,
                      a = e.name,
                      c = e.endpoint
                    return {
                      column: [
                        {
                          key: 'select',
                          component: function(e) {
                            var t = e.handleChange,
                              a = e.allSelected
                            return Object(l.b)(ue, {
                              id: n,
                              handleChange: t,
                              checked: a,
                              mdxType: 'TableRowSelect',
                            })
                          },
                        },
                        {
                          key: 'id',
                          component: function() {
                            return Object(l.b)('td', null, n)
                          },
                        },
                        {
                          key: 'name',
                          component: function() {
                            return Object(l.b)('td', null, a)
                          },
                        },
                        {
                          key: 'endpoint',
                          component: function() {
                            return Object(l.b)(
                              'td',
                              null,
                              Object(l.b)('a', { href: '#' }, c)
                            )
                          },
                        },
                      ],
                    }
                  })
                },
                mdxType: 'Table',
              })
            )
          )
        )
      }
      pe &&
        pe === Object(pe) &&
        Object.isExtensible(pe) &&
        Object.defineProperty(pe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Table/table.mdx' },
        }),
        (pe.isMDXComponent = !0)
    },
    './src/reusable/collectionHash/collectionHash.hooks.ts': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        c = n('./node_modules/react/index.js')
      function o(e) {
        var t = e(),
          n = t.items,
          o = t.itemsToArray,
          l = Object(c.useState)([]),
          i = Object(a.a)(l, 2),
          r = i[0],
          s = i[1]
        return (
          Object(c.useEffect)(
            function() {
              s(o(n))
            },
            [n]
          ),
          Object(c.useMemo)(
            function() {
              return r
            },
            [r]
          )
        )
      }
      function l(e, t) {
        var n = Object(c.useState)(t),
          o = Object(a.a)(n, 2),
          l = o[0],
          i = o[1],
          r = e(),
          s = r.active,
          u = r.items
        return (
          Object(c.useEffect)(
            function() {
              u && u[s] && i(u[s])
            },
            [s, u]
          ),
          Object(c.useMemo)(
            function() {
              return l
            },
            [l]
          )
        )
      }
      function i(e) {
        var t = e(),
          n = t.active,
          a = t.dispatch
        Object(c.useEffect)(function() {
          '' !== n && a({ type: 'SET_ACTIVE', active: '' })
        }, [])
      }
      function r(e, t) {
        var n = e(),
          a = n.active,
          o = n.dispatch
        Object(c.useEffect)(
          function() {
            a !== t && o({ type: 'SET_ACTIVE', active: t })
          },
          [a, t]
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useGetItems',
            filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
          },
        }),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useGetActiveItem',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useResetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        r &&
          r === Object(r) &&
          Object.isExtensible(r) &&
          Object.defineProperty(r, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useSetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHash.types.ts': function(e, t) {
      'undefined' !== typeof CollectionHashType &&
        CollectionHashType &&
        CollectionHashType === Object(CollectionHashType) &&
        Object.isExtensible(CollectionHashType) &&
        Object.defineProperty(CollectionHashType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CollectionHashType',
            filename: 'src/reusable/collectionHash/collectionHash.types.ts',
          },
        }),
        'undefined' !== typeof CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface ===
            Object(CollectionHashInitialValueInterface) &&
          Object.isExtensible(CollectionHashInitialValueInterface) &&
          Object.defineProperty(
            CollectionHashInitialValueInterface,
            '__filemeta',
            {
              enumerable: !0,
              configurable: !0,
              value: {
                name: 'CollectionHashInitialValueInterface',
                filename: 'src/reusable/collectionHash/collectionHash.types.ts',
              },
            }
          ),
        'undefined' !== typeof CollectionHashStateInterface &&
          CollectionHashStateInterface &&
          CollectionHashStateInterface ===
            Object(CollectionHashStateInterface) &&
          Object.isExtensible(CollectionHashStateInterface) &&
          Object.defineProperty(CollectionHashStateInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashStateInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof BuildInitialValueType &&
          BuildInitialValueType &&
          BuildInitialValueType === Object(BuildInitialValueType) &&
          Object.isExtensible(BuildInitialValueType) &&
          Object.defineProperty(BuildInitialValueType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'BuildInitialValueType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CreateInitialStateType &&
          CreateInitialStateType &&
          CreateInitialStateType === Object(CreateInitialStateType) &&
          Object.isExtensible(CreateInitialStateType) &&
          Object.defineProperty(CreateInitialStateType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CreateInitialStateType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ReducerType &&
          ReducerType &&
          ReducerType === Object(ReducerType) &&
          Object.isExtensible(ReducerType) &&
          Object.defineProperty(ReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashActionInterface &&
          CollectionHashActionInterface &&
          CollectionHashActionInterface ===
            Object(CollectionHashActionInterface) &&
          Object.isExtensible(CollectionHashActionInterface) &&
          Object.defineProperty(CollectionHashActionInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashActionInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashReducerType &&
          CollectionHashReducerType &&
          CollectionHashReducerType === Object(CollectionHashReducerType) &&
          Object.isExtensible(CollectionHashReducerType) &&
          Object.defineProperty(CollectionHashReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ItemsToArrayType &&
          ItemsToArrayType &&
          ItemsToArrayType === Object(ItemsToArrayType) &&
          Object.isExtensible(ItemsToArrayType) &&
          Object.defineProperty(ItemsToArrayType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ItemsToArrayType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHashConstants.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return a
      })
      var a = { active: '', items: [], loading: !1, selected: [], uid: 'id' }
      'undefined' !== typeof a &&
        a &&
        a === Object(a) &&
        Object.isExtensible(a) &&
        Object.defineProperty(a, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'COLLECTION_HASH_INITIAL_STATE',
            filename: 'src/reusable/collectionHash/collectionHashConstants.ts',
          },
        })
    },
    './src/reusable/collectionHash/collectionHashReducer.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      }),
        n.d(t, 'b', function() {
          return b
        })
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        l = n('./node_modules/react/index.js'),
        i = n('./src/reusable/collectionHash/collectionHashConstants.ts'),
        r = function(e) {
          return Object(o.a)({}, i.a, e)
        },
        s = function(e) {
          return r(e)
        }
      s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'createInitialState',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var u = function(e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'itemsToArray',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var b = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function(e) {
                  return e
                },
          n = r(e)
        function i(e, t) {
          var n = {}
          for (var a in e) t.includes(a) || (n[a] = e[a])
          return n
        }
        function s(e) {
          if (Array.isArray(e)) {
            return e.reduce(function(e, t) {
              return Object(o.a)({}, e, Object(c.a)({}, t[n.uid], t))
            }, {})
          }
        }
        function u(e, t, n, l) {
          var r
          switch (t.type) {
            case 'INSERT_ITEMS':
              var u = Array.isArray(t.items)
                ? s(t.items)
                : Object(c.a)({}, t.items[n.uid], t.items)
              return Object(o.a)({}, e, { items: Object(o.a)({}, e.items, u) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (r = t.remove),
                Array.isArray(r)
                  ? Object(o.a)({}, e, {
                      active: t.remove.includes(e.active) ? '' : e.active,
                      selected: e.selected.filter(function(e) {
                        return !t.remove.includes(e)
                      }),
                      items: i(e.items, t.remove),
                    })
                  : e
              )
            case 'REPLACE_ITEMS':
              var b = s(t.items)
              return Object(o.a)({}, e, { items: b })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(o.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(o.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(o.a)({}, e, { selected: t.selected })
            case 'TOGGLE_SELECTED_ITEMS':
              var d = Object(a.a)(e.selected),
                m = !0,
                f = !1,
                p = void 0
              try {
                for (
                  var h, j = t.selected[Symbol.iterator]();
                  !(m = (h = j.next()).done);
                  m = !0
                ) {
                  var O = h.value,
                    y = d.indexOf(O),
                    x = O.trim()
                  e.items[y]
                    ? (d =
                        0 === y
                          ? d.slice(1)
                          : y === d.length - 1
                          ? d.slice(0, d.length - 1)
                          : [].concat(
                              Object(a.a)(d.slice(0, y)),
                              Object(a.a)(d.slice(y + 1))
                            ))
                    : d.push(x)
                }
              } catch (g) {
                ;(f = !0), (p = g)
              } finally {
                try {
                  m || null == j.return || j.return()
                } finally {
                  if (f) throw p
                }
              }
              return Object(o.a)({}, e, { selected: d })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var v = Object(c.a)(
                  {},
                  t.item.name || t.select,
                  Object(o.a)({}, e.items[t.select], t.item)
                ),
                T = t.item[n.uid]
                  ? Object(o.a)({}, i(e.items, [t.select]), v)
                  : Object(o.a)({}, e.items, v)
              return Object(o.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, c, o) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(c)
                        return 0 === e
                          ? [o].concat(Object(a.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(a.a)(n.slice(0, n.length - 1)), [
                              o,
                            ])
                          : [].concat(
                              Object(a.a)(n.slice(0, e)),
                              [o],
                              Object(a.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: T,
              })
            default:
              return l ? l(e, t) : e
          }
        }
        function b(e, a) {
          return u(e, a, n, t)
        }
        return Object(l.useReducer)(b, n)
      }
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useCollectionHashReducer',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
    },
    './src/reusable/collectionHash/index.ts': function(e, t, n) {
      'use strict'
      n('./src/reusable/collectionHash/collectionHashConstants.ts')
      var a = n('./src/reusable/collectionHash/collectionHashReducer.ts')
      n.d(t, 'itemsToArray', function() {
        return a.a
      }),
        n.d(t, 'useCollectionHashReducer', function() {
          return a.b
        })
      n('./src/reusable/collectionHash/collectionHash.hooks.ts'),
        n('./src/reusable/collectionHash/collectionHash.types.ts')
    },
  },
])
//# sourceMappingURL=src-table-table.108be86d081ef13588d8.js.map
