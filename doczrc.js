import { css } from 'docz-plugin-css'

export default {
  title: 'Redesign',
  themeConfig: {
    mode: 'dark',
  },
  codeSandbox: false,
  typescript: true,
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
}
