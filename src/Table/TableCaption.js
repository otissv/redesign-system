import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Base from '../Base/Base'
import { tableCaptionTheme } from './table.theme'

export function TableCaption({ children, className, ...propsRest }) {
  const classNames = `TableCaption ${className || ''}`
  const themed = useMemo(() => [tableCaptionTheme], [tableCaptionTheme])

  return (
    <Base el="caption" className={classNames} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
}

TableCaption.propTypes = {
  condensed: PropTypes.bool,
}

export default TableCaption
