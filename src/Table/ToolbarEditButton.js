import React, { useMemo } from 'react'

import { Edit } from '../MaterialIcons/Edit'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarEditButton = React.memo(function ToolbarEditButton({
  hasViews,
  onClick,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const icon = useMemo(() => Edit, [Edit])

  return (
    <ButtonIcon uid="edit" onClick={handleClick} icon={icon} {...propsRest} />
  )
})

export default ToolbarEditButton
