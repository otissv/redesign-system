import React, { Fragment } from 'react'
import { TableRowInterface } from './table.types'

export function TableRow({ children, data }: TableRowInterface) {
  return (
    <Fragment>
      {typeof children === 'function' ? children({ data }) : children}
    </Fragment>
  )
}
