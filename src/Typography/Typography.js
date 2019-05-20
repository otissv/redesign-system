import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'

import {
  typographyContextTheme,
  typographyElementTheme,
  typographyTheme,
  typographyModifyTheme,
  typographyWrapTheme,
  typographyTextAlignTheme,
  typographyTransformTheme,
} from './typography.theme'

export const Typography = React.memo(function Typography({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Typography ${className || ''}`
  const themed = useMemo(
    () => [
      typographyContextTheme,
      typographyElementTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      ...propsThemed,
    ],
    [
      typographyContextTheme,
      typographyElementTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      propsThemed,
    ]
  )

  const attributes = {
    ...(propsRest.as === 'hr'
      ? {
          'aria-role': 'separator',
          'aria-orientation': 'horizontal',
        }
      : {}),
  }

  return (
    <Base className={classNames} themed={themed} {...attributes} {...propsRest}>
      {children}
    </Base>
  )
})

Typography.defaultProps = {
  as: 'p',
  themed: [],
}

Typography.propTypes = {
  context: PropTypes.oneOf([
    'accent',
    'action',
    'danger',
    'disabled',
    'success',
    'warning',
  ]),
  href: PropTypes.string,
  textWrap: PropTypes.oneOf(['truncate', 'break', 'nowrap']),
  element: PropTypes.oneOf([
    'a',
    'abbr',
    'code',
    'del',
    'dfn',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'ins',
    'mark',
    'q',
    'p',
    'span',
    'strong',
  ]),
  textAlign: PropTypes.oneOf([
    'left',
    'leftSmall',
    'leftMedium',
    'leftLarge',
    'right',
    'rightSmall',
    'rightMedium',
    'rightLarge',
    'center',
    'centerSmall',
    'centerMedium',
    'centerLarge',
    'justify',
  ]),

  theme: PropTypes.object,
}

export default Typography
// textVertical='top'	Aligns text to the top.
// textVertical='middle'	Centers text vertically.
// textVertical='bottom'	Aligns text to the bottom.
//   }
// }
