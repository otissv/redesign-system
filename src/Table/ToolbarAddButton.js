import React, { useMemo } from 'react'

import { Plus } from '../MaterialIcons/Plus'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarAddButton = React.memo(function ToolbarAddButton({
  hasViews,
  onClick,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const icon = useMemo(() => Plus, [Plus])

  return (
    <ButtonIcon
      uid="add"
      onClick={handleClick}
      icon={icon}
      title={title}
      {...propsRest}
    />
  )
})

export default ToolbarAddButton
