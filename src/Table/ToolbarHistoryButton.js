import React, { useMemo } from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

import { TimeRestore } from '../MaterialIcons/TimeRestore'

export const ToolbarHistoryButton = React.memo(function ToolbarHistoryButton({
  onClick,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const icon = useMemo(() => TimeRestore, [TimeRestore])

  return (
    <ButtonIcon
      uid="history"
      onClick={handleClick}
      icon={icon}
      {...propsRest}
    />
  )
})

export default ToolbarHistoryButton
