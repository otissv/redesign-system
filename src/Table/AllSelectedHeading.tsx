import React, { useCallback } from 'react'

import { Checkbox } from '../Checkbox'
import { useTableHeading } from './TableHeadingsContext'
import { BaseInterface } from 'Base'

export const AllSelectedHeading = React.memo(function AllSelectedHeading({
  className = '',
  ...propsRest
}: BaseInterface) {
  const classNames = `AllSelectedHeading ${className}`
  const { allSelected, onAllSelectedChange } = useTableHeading()

  const handleChange = useCallback(
    function(e: React.ChangeEvent<HTMLInputElement>) {
      onAllSelectedChange && onAllSelectedChange(e)
    },
    [onAllSelectedChange]
  )

  return (
    <Checkbox
      className={classNames}
      checked={allSelected}
      name="allSelected"
      onChange={handleChange}
      {...propsRest}
    />
  )
})

export default AllSelectedHeading
