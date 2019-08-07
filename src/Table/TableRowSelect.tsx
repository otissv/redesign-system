import React, { useEffect, useState } from 'react'
import { TableRowSelectInterface } from './table.types'

export const TableRowSelect = function TableRowSelect({
  handleChange,
  id,
  checked = false,
  ...propsRest
}: TableRowSelectInterface) {
  const [isChecked, setChecked] = useState(checked)

  useEffect(() => {
    if (checked !== isChecked) {
      setChecked(checked)
    }
  }, [checked])

  const changed = function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(!isChecked)
    handleChange && handleChange(e)
  }

  return (
    <td style={{ width: '48px' }}>
      <input
        checked={isChecked}
        onChange={changed}
        name={id}
        style={{ cursor: 'pointer' }}
        type="checkbox"
        {...propsRest}
      />
    </td>
  )
}

export default TableRowSelect
