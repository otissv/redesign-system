import React from 'react'

export const AllSelectedHeading = React.memo(function AllSelectedHeading({
  onChange,
}: {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      name="allSelected"
      type="checkbox"
      onChange={onChange}
      style={{ cursor: 'pointer' }}
    />
  )
})

export default AllSelectedHeading
