import React, { Fragment } from 'react'
import { TableRowsInterface } from './table.types'

export function TableRows({ children, data }: TableRowsInterface) {
  return (
    <Fragment>
      {typeof children === 'function' ? children({ data }) : children}
    </Fragment>
  )
}
