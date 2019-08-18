;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    './src/Container/Container.tsx': function(e, r, a) {
      'use strict'
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = a('./node_modules/react/index.js'),
        o = a.n(c),
        d = a('./src/Base/index.tsx')
      function i(e) {
        var r = e.appearance,
          a = e.theme,
          n = a.border,
          t = a.color,
          c = {
            color: t['accent-050'],
            backgroundColor: t['accent-500'],
            border: '1px solid '.concat(t['accent-500']),
          },
          o = {
            color: t['action-050'],
            backgroundColor: t['action-500'],
            border: '1px solid '.concat(t['action-500']),
          },
          d = {
            color: t['danger-050'],
            backgroundColor: t['danger-500'],
            border: '1px solid '.concat(t['danger-500']),
          },
          i = {
            color: t['success-050'],
            backgroundColor: t['success-500'],
            border: '1px solid '.concat(t['success-500']),
          },
          b = {
            color: t['warning-050'],
            backgroundColor: t['warning-500'],
            border: '1px solid '.concat(t['warning-500']),
          }
        switch (r) {
          case 'primary':
            return {
              color: t.foregroundInvert,
              backgroundColor: t.backgroundInvert,
              border: n.thinTransparent,
            }
          case 'secondary':
            return {
              color: t['grey-800'],
              backgroundColor: t['grey-100'],
              border: '1px solid '.concat(t['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: n.thin }
          case 'accent':
          case 'primary-accent':
            return c
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
            return o
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
            return d
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
            return i
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
            return b
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        a.d(r, 'a', function() {
          return b
        })
      var b = o.a.memo(function(e) {
        var r = e.children,
          a = e.className,
          b = void 0 === a ? '' : a,
          s = e.themed,
          l = void 0 === s ? [] : s,
          u = Object(t.a)(e, ['children', 'className', 'themed']),
          p = Object(c.useMemo)(
            function() {
              return 'Container '.concat(b)
            },
            [b]
          ),
          m = Object(c.useMemo)(
            function() {
              return [i].concat(Object(n.a)(l))
            },
            [i, l]
          )
        return o.a.createElement(
          d.Base,
          Object.assign({ className: p, themed: m }, u),
          r
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      r.b = b
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Textarea/Textarea.tsx': function(e, r, a) {
      'use strict'
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = a('./node_modules/react/index.js'),
        o = a.n(c),
        d = a('./src/Base/index.tsx')
      function i(e) {
        var r = e.theme,
          a = r.animation,
          n = r.border,
          t = r.color,
          c = r.font,
          o = r.unit
        return {
          border: n.thinSecondary,
          background: t['grey-600'],
          borderRadius: 0,
          color: t.foreground,
          lineHeight: c.lineHeight.default,
          maxWidth: 'calc(100% - 6px )',
          minHeight: 'calc('.concat(c.size.default, ' * 3.5)'),
          outline: 0,
          padding: o[2],
          verticalAlign: 'top',
          webkitAppearance: 'none',
          width: 'calc(100% - 6px )',
          transition: a.easeMedium(),
          '&::placeholder': { color: t['grey-200'] },
          '&:hover': { background: t['grey-500'], border: n.thinSecondary },
          '&:active': { background: t['grey-700'], border: n.thinSecondary },
          '&:focus': {
            background: t['grey-700'],
            border: n.thinSecondary,
            boxShadow: '0 0 0 0.2em '.concat(t.outline),
            zIndex: 2,
          },
        }
      }
      function b(e) {
        var r = e.appearance,
          a = e.theme,
          n = a.border,
          t = a.color,
          c = {
            background: 'none',
            border: n.thinSecondary,
            '&:hover': { background: t['grey-500'], border: n.thinSecondary },
            '&:active': { background: t['grey-700'], border: n.thinSecondary },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinSecondary,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          o = {
            border: n.thinGrey500,
            '&:hover': { background: t['grey-500'], border: n.thinAccent2 },
            '&:active': { background: t['grey-700'], border: n.thinAccent2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinAccent2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          d = {
            background: 'none',
            border: n.thinAccent,
            '&:hover': { background: t['grey-500'], border: n.thinAccent2 },
            '&:active': { background: t['grey-700'], border: n.thinAccent2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinAccent2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          i = {
            background: t['grey-700'],
            border: n.thinActive2,
            '&:hover': { background: t['grey-500'], border: n.thinAction2 },
            '&:active': { background: t['grey-700'], border: n.thinActive2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinAction2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          b = {
            background: t['grey-700'],
            border: n.thinActive2,
            '&:hover': { background: t['grey-500'], border: n.thinActive2 },
            '&:active': { background: t['grey-700'], border: n.thinActive2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinActive2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          s = {
            border: n.thinGrey500,
            '&:hover': { background: t['grey-500'], border: n.thinAction2 },
            '&:active': { background: t['grey-700'], border: n.thinAction2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinAction2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          l = {
            background: 'none',
            border: n.thinAction,
            '&:hover': { background: t['grey-500'], border: n.thinAction2 },
            '&:active': { background: t['grey-700'], border: n.thinAction2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinAction2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          u = {
            border: n.thinGrey500,
            '&:hover': { background: t['grey-500'], border: n.thinDanger2 },
            '&:active': { background: t['grey-700'], border: n.thinDanger2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinDanger2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          p = {
            background: 'none',
            border: n.thinDanger,
            '&:hover': { background: t['grey-500'], border: n.thinDanger2 },
            '&:active': { background: t['grey-700'], border: n.thinDanger2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinDanger2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          m = {
            border: n.thinGrey500,
            '&:hover': { background: t['grey-500'], border: n.thinSuccess2 },
            '&:active': { background: t['grey-700'], border: n.thinSuccess2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinSuccess2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          g = {
            background: 'none',
            border: n.thinSuccess,
            '&:hover': { background: t['grey-500'], border: n.thinSuccess2 },
            '&:active': { background: t['grey-700'], border: n.thinSuccess2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinSuccess2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          h = {
            border: n.thinGrey500,
            '&:hover': { background: t['grey-500'], border: n.thinWarning2 },
            '&:active': { background: t['grey-700'], border: n.thinWarning2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinWarning2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          y = {
            background: 'none',
            border: n.thinWarning,
            '&:hover': { background: t['grey-500'], border: n.thinWarning2 },
            '&:active': { background: t['grey-700'], border: n.thinWarning2 },
            '&:focus': {
              background: t['grey-700'],
              border: n.thinWarning2,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          x = {
            color: t.disabled,
            border: n.thinDisabled,
            backgroundColor: t.disabled,
            '&::placeholder': { color: t['grey-900'] },
            '&:hover': { backgroundColor: t.disabled, border: n.thinDisabled },
            '&:active': { backgroundColor: t.disabled, border: n.thinDisabled },
            '&:focus': {
              backgroundColor: t.disabled,
              border: n.thinDisabled,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          },
          j = {
            color: t.disabled,
            border: n.thinDisabled,
            backgroundColor: t.disabled,
            '&::placeholder': { color: t['grey-900'] },
            '&:hover': { backgroundColor: t.disabled, border: n.thinDisabled },
            '&:active': { backgroundColor: t.disabled, border: n.thinDisabled },
            '&:focus': {
              backgroundColor: t.disabled,
              border: n.thinDisabled,
              boxShadow: '0 0 0 0.2em '.concat(t.outline),
              zIndex: 2,
            },
          }
        switch (r) {
          case 'secondary':
          case 'tertiary':
            return c
          case 'accent':
          case 'primary-accent':
            return o
          case 'secondary-accent':
            return d
          case 'active':
          case 'primary-active':
            return i
          case 'secondary-active':
            return b
          case 'action':
          case 'primary-action':
            return s
          case 'secondary-action':
            return l
          case 'danger':
          case 'primary-danger':
            return u
          case 'secondary-danger':
            return p
          case 'error':
          case 'primary-error':
            return u
          case 'secondary-error':
            return p
          case 'success':
          case 'primary-success':
            return m
          case 'secondary-success':
            return g
          case 'warning':
          case 'primary-warning':
            return h
          case 'secondary-warning':
            return y
          case 'disabled':
          case 'primary-disabled':
            return x
          case 'secondary-disabled':
            return j
          default:
            return {}
        }
      }
      function s(e) {
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'textareaTheme',
            filename: 'src/Textarea/textarea.theme.ts',
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
              name: 'textareaAppearanceTheme',
              filename: 'src/Textarea/textarea.theme.ts',
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
              name: 'textareaWidthsTheme',
              filename: 'src/Textarea/textarea.theme.ts',
            },
          }),
        a.d(r, 'a', function() {
          return l
        })
      var l = o.a.memo(function(e) {
        var r = e.children,
          a = e.className,
          l = void 0 === a ? '' : a,
          u = e.themed,
          p = void 0 === u ? [] : u,
          m = Object(t.a)(e, ['children', 'className', 'themed']),
          g = Object(c.useMemo)(
            function() {
              return 'Textarea '.concat(l)
            },
            [l]
          ),
          h = Object(c.useMemo)(
            function() {
              return [i, b, s].concat(Object(n.a)(p))
            },
            [i, b, s, p]
          )
        return o.a.createElement(
          d.Base,
          Object.assign(
            {
              as: 'textarea',
              className: g,
              themed: h,
              disabled: 'disabled' === m.appearance,
            },
            m
          ),
          r
        )
      })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Textarea', filename: 'src/Textarea/Textarea.tsx' },
        })
      r.b = l
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Textarea', filename: 'src/Textarea/Textarea.tsx' },
        })
    },
    './src/Textarea/textarea.mdx': function(e, r, a) {
      'use strict'
      a.r(r),
        a.d(r, 'default', function() {
          return u
        })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        t =
          (a('./node_modules/react/index.js'),
          a('./node_modules/@mdx-js/react/dist/index.es.js')),
        c = a('./node_modules/docz/dist/index.esm.js'),
        o = a(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        d = a('./src/Textarea/Textarea.tsx'),
        i = a('./src/Container/Container.tsx'),
        b = a('./src/ThemeContext/ThemeProvider.tsx'),
        s = {},
        l = 'wrapper'
      function u(e) {
        var r = e.components,
          a = Object(n.a)(e, ['components'])
        return Object(t.b)(
          l,
          Object.assign({}, s, a, { components: r, mdxType: 'MDXLayout' }),
          Object(t.b)('h1', { id: 'textarea' }, 'Textarea'),
          Object(t.b)(c.d, { of: d.b, mdxType: 'Props' }),
          Object(t.b)('h2', { id: 'appearnace' }, 'Appearnace'),
          Object(t.b)(
            c.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Textarea marginBottom={3} placeholder="Primary" appearance="primary" />\n  <Textarea marginBottom={3} placeholder="Secondary" appearance="secondary" />\n\n  <h3>Accent</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-accent"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-accent"\n  />\n\n  <h3>Active</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-active"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-active"\n  />\n\n  <h3>Action</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-action"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-action"\n  />\n\n  <h3>Danger</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-danger"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-danger"\n  />\n\n  <h3>Success</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-success"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-success"\n  />\n\n  <h3>Warning</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="primary-warning"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-warning"\n  />\n\n  <h3>Disabled</h3>\n  <Textarea\n    marginBottom={3}\n    placeholder="Primary"\n    appearance="secondary-disabled"\n  />\n  <Textarea\n    marginBottom={3}\n    placeholder="Secondary"\n    appearance="secondary-disabled"\n  />\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Playground: c.c,
                Props: c.d,
                styled: o.default,
                Textarea: d.b,
                Container: i.a,
                ThemeProvider: b.a,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              b.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Accent'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-accent',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-accent',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Active'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-active',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-active',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Action'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-action',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-action',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Danger'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-danger',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-danger',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Success'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-success',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-success',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Warning'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'primary-warning',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-warning',
                mdxType: 'Textarea',
              }),
              Object(t.b)('h3', null, 'Disabled'),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Primary',
                appearance: 'secondary-disabled',
                mdxType: 'Textarea',
              }),
              Object(t.b)(d.b, {
                marginBottom: 3,
                placeholder: 'Secondary',
                appearance: 'secondary-disabled',
                mdxType: 'Textarea',
              })
            )
          ),
          Object(t.b)('h2', { id: 'widths' }, 'Widths'),
          Object(t.b)(
            b.a,
            { mdxType: 'ThemeProvider' },
            Object(t.b)(
              'table',
              null,
              Object(t.b)(
                'thead',
                null,
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('th', null, 'Prop'),
                  Object(t.b)('th', null, 'Example')
                )
              ),
              Object(t.b)(
                'tbody',
                null,
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '1'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 1,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '2'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 2,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '3'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 3,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '4'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 4,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '5'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 5,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '6'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 6,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '7'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 7,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '8'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 8,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '9'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 9,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                ),
                Object(t.b)(
                  'tr',
                  null,
                  Object(t.b)('td', null, '10'),
                  Object(t.b)(
                    'td',
                    null,
                    Object(t.b)(d.b, {
                      widths: 10,
                      appearance: 'primary',
                      mdxType: 'Textarea',
                    })
                  )
                )
              )
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
          value: { name: 'MDXContent', filename: 'src/Textarea/textarea.mdx' },
        }),
        (u.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-textarea-textarea.30387d098bf5891c84b1.js.map
