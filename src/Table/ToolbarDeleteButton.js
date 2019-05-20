import React, { useMemo } from 'react'

import { Delete } from '../MaterialIcons/Delete'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarDeleteButton = React.memo(function ToolbarDeleteButton({
  hasViews,
  onClick,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const icon = useMemo(() => Delete, [Delete])

  return (
    <ButtonIcon uid="delete" onClick={handleClick} icon={icon} {...propsRest} />
  )
})

export default ToolbarDeleteButton
