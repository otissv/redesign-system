import React, { useMemo } from 'react'
import { BadgeInterface } from './badge.types'

import Base from '../Base/Base'
import { badgeTheme, badgeAppearanceTheme, badgePillTheme } from './badge.theme'

export const Badge = React.memo(function Badge({
  children,
  className = '',
  themed = [],
  ...propsRest
}: BadgeInterface) {
  const classNames = useMemo(() => `Badge ${className}`, [className])
  const _themed = useMemo(
    () => [badgeTheme, badgeAppearanceTheme, badgePillTheme, ...themed],
    [badgeTheme, badgeAppearanceTheme, badgePillTheme, themed]
  )

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
})

export default Badge
