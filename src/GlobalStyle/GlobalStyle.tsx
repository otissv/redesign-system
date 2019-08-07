import React from 'react'
import { createGlobalStyle } from 'styled-components'
import normalizeStyled from 'styled-normalize'

import { useTheme } from '../ThemeContext'

export const GlobalStyle = React.memo(function GlobalStyle() {
  const {
    theme,
    theme: { border, color, font, scrollbar, unit },
  } = useTheme()

  const Global = createGlobalStyle`
    ${normalizeStyled}

    html {
      line-height: ${font.lineHeight.default};
      text-rendering: optimizeLegibility;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
        box-sizing: border-box;
        // overflow-y: scroll;
      
    }
    
    html,
    body {
      height: 100%;
    }

    html,
    body,
    pre {
      background: ${color.background};
      color: ${color.foreground};
      letter-spacing: 1px !important;
    }

    body {
      margin: 0;
      padding: 0;
      font-weight: ${font.weight.default};
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    body,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    button {
      font-family: ${font.sans};
      ${font.smooth};
    }

    body,
    p,
    a,
    button {
      font-size: ${font.size.default};
    }
    
    * {
      box-sizing: inherit;
    }
    *:before {
      box-sizing: inherit;
    }
    *:after {
      box-sizing: inherit;
    }

    ::selection {
      background: ${color.active};
      color: #ffffff;
    }

    *::-webkit-scrollbar {
      width: ${scrollbar.width};
      height: ${scrollbar.height};
    }
    *::-webkit-scrollbar-corner {
      background-color: ${scrollbar.corner.backgroundColor};
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${scrollbar.thumb.backgroundColor};
      outline:  ${scrollbar.thumb.outline};
      transition:  ${scrollbar.thumb.transition}; 
    }

    *::-webkit-scrollbar-thumb:hover {
      background-color: ${scrollbar.thumb.hover.backgroundColor};
    }
    
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    a, area, button, input, label, select, summary, textarea {
      touch-action: manipulation;
    }
    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      text-decoration: none;
      color: ${color.link}
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: inherit;
      font-weight: bolder;
    }
    dfn {
      font-style: italic;
    }
    
    mark {
      background-color: #ff0;
      color: #000;
    }
    small {
      font-size: ${font.size[2]}
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-size: ${font.small};
      font-family: ${font.code};
      line-height: 1.3;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
      border: ${border.thin};
      margin: calc(${unit.default} - 1px) 0;
      textShadow: none;
      height: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    
    
    img {
      max-width: 100%;
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
      font-weight: bold;
      line-height: ${font.lineHeight[2]};
    }
    h1 {
      font-size: ${font.size[8]};
    }
    h2 {
      font-size: ${font.size[7]};
    }
    h3 {
      font-size: ${font.size[6]};
    }
    h4 {
      font-size: ${font.size[5]};
    }
    h5 {
      font-size: ${font.size[4]};
    }
    h6 {
      font-size: ${font.size[3]};
    }
    hgroup {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    ul {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    dd {
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    figure {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    pre {
      margin: 0  0 ${unit.default} 0;
      padding: ${unit.default};
      font-size: 0.85rem;
      line-height: ${font.lineHeight[2]};
      background: hsla(0, 0%, 0%, 0.04);
      overflow: auto;
      word-wrap: normal;
    }
    table {
      padding: 0;
      font-size: ${font.size.default};
      line-height: ${font.lineHeight[2]};
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    blockquote {
      margin-left: -1.75rem;
      margin-right: 1.75rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 1.42188rem;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.75rem;
      font-size: ${font.size[5]};
      line-height: ${font.lineHeight.default};
      color: ${color['grey-500']};
      font-style: italic;
      border-left: 0.32813rem solid ${color.foreground};
    }
    form {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    noscript {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    iframe {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    
    address {
      margin: 0  0 ${unit.default} 0;
      padding: 0;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(${unit.default} / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: ${unit.default};
      margin-bottom: calc(${unit.default} / 2);
      margin-top: calc(${unit.default} / 2);
    }
    li > ul {
      margin-left: ${unit.default};
      margin-bottom: calc(${unit.default} / 2);
      margin-top: calc(${unit.default} / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      // margin-bottom: 0;
    }
    p *:last-child {
      margin#root,
      .react-monaco-editor-container,
      .overflow-guard {
        height: 100vh !important;
      }
    }
    li > p {
      margin-bottom: calc(${unit.default} / 2);
    }
    q: {
      fontStyle: 'italic';
    }

    q:before {
      content: ' open-quote';
    }
    q:after {
      content: ' open-quote';
    }

    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
      font-feature-settings: 'tnum';
      -moz-font-feature-settings: 'tnum';
      -ms-font-feature-settings: 'tnum';
      -webkit-font-feature-settings: 'tnum';
      padding-left: ${unit[3]};
      padding-right: ${unit[3]};
      padding-top: ${unit[3]};
      padding-bottom: ${unit[3]};
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: ${color['grey-200']};
      color: ${color.accent};
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
      padding: ${unit[1]} ${unit[2]};
    }
    pre code {
      background: none;
      line-height: ${font.lineHeight.default};
      color: ${color.foreground};
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -${unit[1]};
      content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: '';
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
  `

  return <Global theme={theme} />
})

export default GlobalStyle
