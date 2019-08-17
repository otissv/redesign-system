import React, { useMemo } from 'react'

import { useTableColumn } from './TableColumnContext'
import { TableRowDetailInterface } from './table.types'

export function TableRowDetail({
  children,
  ...propsRest
}: TableRowDetailInterface) {
  const { data, index } = useTableColumn()

  const component = React.cloneElement(children, {
    data,
    ...propsRest,
    index,
  })

  const _children = useMemo(
    () =>
      typeof children === 'function'
        ? children({ data, ...propsRest, index })
        : component,
    [children, component, data, index, propsRest]
  )

  return _children
}
