import React, { useMemo } from 'react'

import { buttonIconTheme } from './buttonIcon.theme'
import Button from '../Button/Button'
import { ButtonIconInterface } from './buttonIcon.types'

export const ButtonIcon = React.memo(function ButtonIcon({
  alt,
  children,
  className = '',
  height = '24px',
  icon: Component,
  iconProps,
  onClick,
  themed = [],
  title,
  uid,
  viewBox = '0 0 24 24',
  width = '24px',
  ...propsRest
}: ButtonIconInterface) {
  const classNames = useMemo(() => `ButtonIcon ${className}`, [className])
  const _themed = useMemo(() => [buttonIconTheme, ...themed], [
    buttonIconTheme,
    themed,
  ])

  return (
    <Button
      className={classNames}
      data-uid={uid}
      onClick={onClick}
      themed={_themed}
      width={width}
      height={height}
      viewBox={viewBox}
      {...propsRest}
    >
      <Component alt={alt} {...iconProps} />
      {children ? <span className="ButtonIconContent">{children}</span> : null}
    </Button>
  )
})

export default ButtonIcon
