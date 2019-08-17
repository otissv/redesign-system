import React, { useMemo } from 'react'
import { Base } from '../Base'
import { useTableColumn } from './TableColumnContext'
import { TableColumnInterface } from './table.types'

export function TableColumn({
  children,
  prop,
  ...propsRest
}: TableColumnInterface) {
  const { data, index } = useTableColumn()

  const _children = useMemo(
    () =>
      typeof children === 'function'
        ? children({ data, prop, ...propsRest, index })
        : children,
    [children, data, index, prop, propsRest]
  )

  return (
    <>
      {_children || (
        <Base as="td" {...propsRest}>
          {prop === '__index' ? index : data[prop]}
        </Base>
      )}
    </>
  )
}
