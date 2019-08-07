import React, { useMemo } from 'react'

import { iconTheme, iconAppearanceTheme } from './icon.theme'

import Base from '../Base/Base'
import { IconInterface } from './icon.types'

export const Icon = React.memo(function Icon({
  children,
  className = '',
  height = '24px',
  themed = [],
  title,
  viewBox = '0 0 24 24',
  width = '24px',
  ...propsRest
}: IconInterface) {
  const classNames = useMemo(() => `Icon ${className}`, [className])
  const _themed = useMemo(() => [iconTheme, iconAppearanceTheme, ...themed], [
    iconTheme,
    iconAppearanceTheme,
    themed,
  ])

  const props = {
    height,
    viewBox,
    width,
    ...propsRest,
  }

  return (
    <Base
      as="svg"
      className={classNames}
      themed={_themed}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </Base>
  )
})

export default Icon
