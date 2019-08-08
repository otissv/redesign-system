import React from 'react'

import { Checkbox } from '../Checkbox'

export const AllSelectedHeading = React.memo(function AllSelectedHeading({
  onChange,
  checked = false,
}: {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return <Checkbox name="allSelected" checked={checked} onChange={onChange} />
})

export default AllSelectedHeading
