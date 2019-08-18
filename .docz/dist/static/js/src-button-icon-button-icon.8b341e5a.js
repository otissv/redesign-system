;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    './src/Button/Button.tsx': function(e, n, t) {
      'use strict'
      var o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        c = t.n(a),
        i = t('./src/Base/index.tsx')
      function d(e) {
        var n = e.theme,
          t = n.animation,
          o = n.color,
          r = n.border,
          a = n.font,
          c = n.unit,
          i = { background: o.default, borderBottom: r.thinDefault }
        return {
          color: o.white,
          background: o.default,
          border: r.thinDefault,
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
          transition: t.easeMedium(),
          verticalAlign: 'middle',
          outline: 0,
          position: 'relative',
          '&:hover': { background: o.default2, borderBottom: r.thinDefault2 },
          '&:focus': { boxShadow: '0 0 0 0.2em '.concat(o.outline), zIndex: 2 },
          '&:active': i,
        }
      }
      function s(e) {
        var n = e.appearance,
          t = e.theme,
          o = t.color,
          r = t.border,
          a = {
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
          c = {
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
          i = {
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
          d = {
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
          s = {
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
          u = {
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
          b = {
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
        switch (n) {
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
            return a
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
            return c
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
            return i
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
            return d
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
            return s
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
            return u
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
            return b
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
      function u(e) {
        var n = e.size,
          t = e.theme,
          o = t.font,
          r = t.unit
        switch (n) {
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
      function b(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonTheme',
            filename: 'src/Button/button.theme.ts',
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
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchTheme',
              filename: 'src/Button/button.theme.ts',
            },
          }),
        t.d(n, 'a', function() {
          return l
        })
      var l = c.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          l = void 0 === t ? '' : t,
          m = e.onClick,
          p = e.as,
          g = void 0 === p ? 'button' : p,
          h = e.themed,
          y = void 0 === h ? [] : h,
          f = Object(r.a)(e, [
            'children',
            'className',
            'onClick',
            'as',
            'themed',
          ]),
          x = Object(a.useMemo)(
            function() {
              return 'Button '.concat(l)
            },
            [l]
          ),
          v = f.disabled,
          O = f.appearance,
          I = Object(a.useMemo)(
            function() {
              return [d, s, u, b].concat(Object(o.a)(y))
            },
            [d, s, u, b, y]
          ),
          j = Object(a.useCallback)(
            function(e) {
              e.preventDefault(), m && m(e)
            },
            [m]
          )
        return c.a.createElement(
          i.Base,
          Object.assign(
            {
              as: g,
              className: x,
              themed: I,
              onClick: j,
              role: 'button',
              tabIndex: 0,
            },
            v ||
              'disabled' === O ||
              'primary-disabled' === O ||
              'secondary-disabled' === O ||
              'tertiary-disabled' === O
              ? { disabled: !0 }
              : {},
            f
          ),
          n
        )
      })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
      n.b = l
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/Button/Button.tsx' },
        })
    },
    './src/ButtonIcon/ButtonIcon.tsx': function(e, n, t) {
      'use strict'
      var o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        c = t.n(a),
        i = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        )
      function d(e) {
        var n = e.dimension,
          t = e.theme,
          o = t.animation,
          r = t.unit
        return Object(i.a)(
          {
            position: 'relative',
            whiteSpace: 'nowrap',
            transition: o.easeFast(),
            lineHeight: 'inherit',
          },
          n ? { height: n, width: n, padding: 0 } : {},
          {
            '>svg.Icon': Object(i.a)(
              {},
              n ? { height: n, width: n } : { transform: 'translateY(4px)' }
            ),
            '>span.ButtonIconContent': {
              display: 'inline-block',
              paddingLeft: r[2],
            },
          }
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
            name: 'buttonIconTheme',
            filename: 'src/ButtonIcon/buttonIcon.theme.ts',
          },
        })
      var s = t('./src/Button/Button.tsx')
      t.d(n, 'a', function() {
        return u
      })
      var u = c.a.memo(function(e) {
        var n = e.alt,
          t = e.children,
          i = e.className,
          u = void 0 === i ? '' : i,
          b = e.height,
          l = void 0 === b ? '24px' : b,
          m = e.icon,
          p = e.iconProps,
          g = e.onClick,
          h = e.themed,
          y = void 0 === h ? [] : h,
          f = (e.title, e.uid),
          x = e.viewBox,
          v = void 0 === x ? '0 0 24 24' : x,
          O = e.width,
          I = void 0 === O ? '24px' : O,
          j = Object(r.a)(e, [
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
          B = Object(a.useMemo)(
            function() {
              return 'ButtonIcon '.concat(u)
            },
            [u]
          ),
          w = Object(a.useMemo)(
            function() {
              return [d].concat(Object(o.a)(y))
            },
            [d, y]
          )
        return c.a.createElement(
          s.b,
          Object.assign(
            {
              className: B,
              'data-uid': f,
              onClick: g,
              themed: w,
              width: I,
              height: l,
              viewBox: v,
            },
            j
          ),
          c.a.createElement(m, Object.assign({ alt: n }, p)),
          t
            ? c.a.createElement('span', { className: 'ButtonIconContent' }, t)
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
      n.b = u
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
    './src/ButtonIcon/buttonIcon.mdx': function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function() {
          return l
        })
      var o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r =
          (t('./node_modules/react/index.js'),
          t('./node_modules/@mdx-js/react/dist/index.es.js')),
        a = t('./node_modules/docz/dist/index.esm.js'),
        c = t('./src/ThemeContext/ThemeProvider.tsx'),
        i = t('./src/ButtonIcon/ButtonIcon.tsx'),
        d = t('./src/MaterialIcons/Home.tsx'),
        s = t('./src/Container/index.tsx'),
        u = {},
        b = 'wrapper'
      function l(e) {
        var n = e.components,
          t = Object(o.a)(e, ['components'])
        return Object(r.b)(
          b,
          Object.assign({}, u, t, { components: n, mdxType: 'MDXLayout' }),
          Object(r.b)(a.d, { of: i.b, mdxType: 'Props' }),
          Object(r.b)('h2', { id: 'default' }, 'Default'),
          Object(r.b)(
            a.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Container as="section" marginBottom={5}>\n    <h3>Default</h3>\n    <ButtonIcon\n      appearance="primary"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n  <Container as="section" marginBottom={5}>\n    <h3>Accent</h3>\n    <ButtonIcon\n      appearance="primary-accent"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-accent"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-accent" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Active</h3>\n    <ButtonIcon\n      appearance="primary-active"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-active"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-active" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Action</h3>\n    <ButtonIcon\n      appearance="primary-action"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-action"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-action" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Danger</h3>\n    <ButtonIcon\n      appearance="primary-danger"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-danger"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-danger" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Danger</h3>\n    <ButtonIcon\n      appearance="primary-danger"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-danger"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-danger" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Success</h3>\n    <ButtonIcon\n      appearance="primary-success"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-success"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-success" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Warning</h3>\n    <ButtonIcon\n      appearance="primary-warning"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-warning"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-warning" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n\n  <Container as="section" marginBottom={5}>\n    <h3>Disabled</h3>\n    <ButtonIcon\n      appearance="primary-disabled"\n      icon={Home}\n      title="Table"\n      marginRight={3}\n    >\n      Primary\n    </ButtonIcon>\n    <ButtonIcon\n      appearance="secondary-disabled"\n      icon={Home}\n      title="JSON"\n      marginRight={3}\n    >\n      Secondary\n    </ButtonIcon>\n    <ButtonIcon appearance="tertiary-disabled" icon={Home} title="JSON">\n      Tertiary\n    </ButtonIcon>\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: a.c,
                Props: a.d,
                ThemeProvider: c.a,
                ButtonIcon: i.b,
                Home: d.a,
                Container: s.Container,
              },
              mdxType: 'Playground',
            },
            Object(r.b)(
              c.a,
              { mdxType: 'ThemeProvider' },
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Default'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Accent'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-accent',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-accent',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-accent',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Active'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-active',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-active',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-active',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Action'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-action',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-action',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-action',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Danger'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-danger',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-danger',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-danger',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Danger'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-danger',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-danger',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-danger',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Success'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-success',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-success',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-success',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Warning'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-warning',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-warning',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-warning',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              ),
              Object(r.b)(
                s.Container,
                { as: 'section', marginBottom: 5, mdxType: 'Container' },
                Object(r.b)('h3', null, 'Disabled'),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'primary-disabled',
                    icon: d.a,
                    title: 'Table',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Primary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'secondary-disabled',
                    icon: d.a,
                    title: 'JSON',
                    marginRight: 3,
                    mdxType: 'ButtonIcon',
                  },
                  'Secondary'
                ),
                Object(r.b)(
                  i.b,
                  {
                    appearance: 'tertiary-disabled',
                    icon: d.a,
                    title: 'JSON',
                    mdxType: 'ButtonIcon',
                  },
                  'Tertiary'
                )
              )
            )
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
            name: 'MDXContent',
            filename: 'src/ButtonIcon/buttonIcon.mdx',
          },
        }),
        (l.isMDXComponent = !0)
    },
    './src/Container/Container.tsx': function(e, n, t) {
      'use strict'
      var o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        c = t.n(a),
        i = t('./src/Base/index.tsx')
      function d(e) {
        var n = e.appearance,
          t = e.theme,
          o = t.border,
          r = t.color,
          a = {
            color: r['accent-050'],
            backgroundColor: r['accent-500'],
            border: '1px solid '.concat(r['accent-500']),
          },
          c = {
            color: r['action-050'],
            backgroundColor: r['action-500'],
            border: '1px solid '.concat(r['action-500']),
          },
          i = {
            color: r['danger-050'],
            backgroundColor: r['danger-500'],
            border: '1px solid '.concat(r['danger-500']),
          },
          d = {
            color: r['success-050'],
            backgroundColor: r['success-500'],
            border: '1px solid '.concat(r['success-500']),
          },
          s = {
            color: r['warning-050'],
            backgroundColor: r['warning-500'],
            border: '1px solid '.concat(r['warning-500']),
          }
        switch (n) {
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
            return a
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
            return c
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
            return i
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
            return d
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
            return s
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
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        t.d(n, 'a', function() {
          return s
        })
      var s = c.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          s = void 0 === t ? '' : t,
          u = e.themed,
          b = void 0 === u ? [] : u,
          l = Object(r.a)(e, ['children', 'className', 'themed']),
          m = Object(a.useMemo)(
            function() {
              return 'Container '.concat(s)
            },
            [s]
          ),
          p = Object(a.useMemo)(
            function() {
              return [d].concat(Object(o.a)(b))
            },
            [d, b]
          )
        return c.a.createElement(
          i.Base,
          Object.assign({ className: m, themed: p }, l),
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
    './src/Container/index.tsx': function(e, n, t) {
      'use strict'
      var o = t('./src/Container/Container.tsx')
      t.d(n, 'Container', function() {
        return o.a
      })
      t('./src/Container/container.types.ts')
    },
    './src/Icon/Icon.tsx': function(e, n, t) {
      'use strict'
      var o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = t('./node_modules/react/index.js'),
        i = t.n(c)
      function d(e) {
        var n = e.hoverColor
        return Object(o.a)(
          {
            display: 'inline-block',
            color: 'inherit',
            fill: 'currentcolor',
            height: 'auto',
            position: 'relative',
          },
          n && { '&:hover': { color: n } }
        )
      }
      function s(e) {
        var n = e.appearance,
          t = e.theme.color
        switch (n) {
          case 'accent':
            return { color: t.accent, '&:hover': { color: t.accent2 } }
          case 'action':
            return { color: t.action, '&:hover': { color: t.action2 } }
          case 'active':
            return { color: t.active, '&:hover': { color: t.active2 } }
          case 'danger':
          case 'error':
            return { color: t.danger, '&:hover': { color: t.danger2 } }
          case 'success':
            return { color: t.success, '&:hover': { color: t.success2 } }
          case 'warning':
            return { color: t.warning, '&:hover': { color: t.warning2 } }
          case 'disabled':
            return { color: t.disabled, '&:hover': { color: t.disabled2 } }
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
          value: { name: 'iconTheme', filename: 'src/Icon/icon.theme.ts' },
        }),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'iconAppearanceTheme',
              filename: 'src/Icon/icon.theme.ts',
            },
          })
      var u = t('./src/Base/Base.tsx')
      t.d(n, 'a', function() {
        return b
      })
      var b = i.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          b = void 0 === t ? '' : t,
          l = e.height,
          m = void 0 === l ? '24px' : l,
          p = e.themed,
          g = void 0 === p ? [] : p,
          h = e.title,
          y = e.viewBox,
          f = void 0 === y ? '0 0 24 24' : y,
          x = e.width,
          v = void 0 === x ? '24px' : x,
          O = Object(a.a)(e, [
            'children',
            'className',
            'height',
            'themed',
            'title',
            'viewBox',
            'width',
          ]),
          I = Object(c.useMemo)(
            function() {
              return 'Icon '.concat(b)
            },
            [b]
          ),
          j = Object(c.useMemo)(
            function() {
              return [d, s].concat(Object(r.a)(g))
            },
            [d, s, g]
          ),
          B = Object(o.a)({ height: m, viewBox: f, width: v }, O)
        return i.a.createElement(
          u.b,
          Object.assign(
            {
              as: 'svg',
              className: I,
              themed: j,
              xmlns: 'http://www.w3.org/2000/svg',
            },
            B
          ),
          h ? i.a.createElement('title', null, h) : null,
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
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Icon', filename: 'src/Icon/Icon.tsx' },
        })
    },
    './src/Icon/icon.types.ts': function(e, n) {
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
    './src/Icon/index.ts': function(e, n, t) {
      'use strict'
      var o = t('./src/Icon/Icon.tsx')
      t.d(n, 'Icon', function() {
        return o.a
      })
      t('./src/Icon/icon.types.ts')
    },
    './src/MaterialIcons/Home.tsx': function(e, n, t) {
      'use strict'
      t.d(n, 'a', function() {
        return c
      })
      var o = t('./node_modules/react/index.js'),
        r = t.n(o),
        a = t('./src/Icon/index.ts')
      function c(e) {
        return r.a.createElement(
          a.Icon,
          e,
          r.a.createElement('path', {
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Home', filename: 'src/MaterialIcons/Home.tsx' },
        }),
        (n.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Home', filename: 'src/MaterialIcons/Home.tsx' },
          })
    },
  },
])
//# sourceMappingURL=src-button-icon-button-icon.f4a8dc8592ab79dd24fe.js.map
