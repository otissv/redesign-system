import React, { useMemo } from 'react'

import { Brush } from '../MaterialIcons/Brush'
import { parse, print } from 'graphql'

import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarPrettifyButton = React.memo(function ToolbarPrettifyButton({
  onClick,
  value,
  ...propsRest
}) {
  function handleClick(e) {
    e.preventDefault()

    const ast = parse(value)
    const printValue = print(ast)
    onClick && onClick(printValue)
  }

  const icon = useMemo(() => Brush, [Brush])

  return (
    <ButtonIcon
      uid="prettify"
      onClick={handleClick}
      icon={icon}
      {...propsRest}
    />
  )
})

export default ToolbarPrettifyButton
