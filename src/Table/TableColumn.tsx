import React, { useMemo } from 'react'
import { Base } from '../Base'
import { useTableColumn } from './TableColumnContext'
import { TableColumnInterface } from './table.types'

export function TableColumn({
  children,
  prop,
  uid,
  ...propsRest
}: TableColumnInterface) {
  const { data, index } = useTableColumn()

  const _children = useMemo(
    () =>
      typeof children === 'function' ? (
        <td data-uid={uid}>
          {children({ data, prop, uid, ...propsRest, index })}
        </td>
      ) : (
        children
      ),
    [children, data, index, prop, uid, propsRest]
  )

  return (
    <>
      {_children || (
        <Base as="td" uid={uid} {...propsRest}>
          {prop === '__index' ? index + 1 : data[prop]}
        </Base>
      )}
    </>
  )
}
