import React, { useMemo } from 'react'
import Base from '../Base/Base'
import { tableCaptionTheme } from './table.theme'
import { TableCaptionInterface } from './table.types'

export const TableCaption = function TableCaption({
  children,
  className,
  themed,
  ...propsRest
}: TableCaptionInterface) {
  const classNames = useMemo(() => `TableCaption ${className}`, [className])
  const _themed = useMemo(() => [tableCaptionTheme, ...themed], [
    tableCaptionTheme,
    themed,
  ])

  return (
    <Base as="caption" className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
}

TableCaption.defaultProps = {
  className: '',
  themed: [],
}

export default TableCaption
