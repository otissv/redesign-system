import React from 'react'

import { TableRowSelectInterface } from './table.types'
import { Checkbox } from '../Checkbox'
import { useTableColumn } from './TableColumnContext'

export const TableRowSelect = function TableRowSelect({
  className = '',
  ...propsRest
}: TableRowSelectInterface) {
  const classNames = `TableRowSelect ${className}`
  const {
    checked,
    data: { id },
    onChange,
    setChecked,
  } = useTableColumn()

  const handleChange = function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setChecked(e.currentTarget.checked)
    onChange && onChange(e)
  }

  return (
    <td className={classNames}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        name={id}
        {...propsRest}
      />
    </td>
  )
}

export default TableRowSelect
