import React, { useMemo } from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

import { PlayCircle } from '../MaterialIcons/PlayCircle'

export const ToolbarExecuteButton = React.memo(function ToolbarExecuteButton({
  onClick,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const icon = useMemo(() => PlayCircle, [PlayCircle])

  return (
    <ButtonIcon
      uid="execute"
      onClick={handleClick}
      icon={icon}
      {...propsRest}
    />
  )
})

export default ToolbarExecuteButton
