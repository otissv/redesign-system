import React, { useMemo } from 'react'

import { ContainerInterface } from './container.types'
import { Base } from '../Base'
import { containerAppearanceTheme } from './container.theme'

export const Container = React.memo(function Container({
  children,
  className = '',
  themed = [],
  ...propsRest
}: ContainerInterface) {
  const classNames = useMemo(() => `Container ${className}`, [className])
  const _themed = useMemo(() => [containerAppearanceTheme, ...themed], [
    containerAppearanceTheme,
    themed,
  ])

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
})

export default Container
