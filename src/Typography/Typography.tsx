import React, { useMemo } from 'react'

import { Base } from '../Base'
import { TypographyInterface } from './typography.types'

import {
  typographyAppearanceTheme,
  typographyTheme,
  typographyModifyTheme,
  typographyWrapTheme,
  typographyTextAlignTheme,
  typographyTransformTheme,
} from './typography.theme'

export const Typography = React.memo(function Typography({
  as: el = 'p',
  children,
  className = '',
  themed = [],
  ...propsRest
}: TypographyInterface) {
  const classNames = useMemo(() => `Typography ${className}`, [className])
  const _themed = useMemo(
    () => [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      ...themed,
    ],
    [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      themed,
    ]
  )

  const attributes = useMemo(
    () => ({
      ...(el === 'hr'
        ? {
            role: 'separator',
            'aria-orientation': 'horizontal',
          }
        : {}),
    }),
    []
  )

  return (
    <Base
      className={classNames}
      themed={_themed}
      {...attributes}
      as={el}
      {...propsRest}
    >
      {children}
    </Base>
  )
})

export default Typography
