import React, { useCallback, useMemo } from 'react'

import { Plus } from '../MaterialIcons/Plus'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { TableToolbarButtonInterface } from './table.types'

export const ToolbarAddButton = function ToolbarAddButton({
  onClick,
  ...propsRest
}: TableToolbarButtonInterface) {
  const handleClick = useCallback(
    function handleClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      onClick && onClick(e)
    },
    [onClick]
  )

  const icon = useMemo(() => Plus, [Plus])

  return (
    <ButtonIcon
      as="a"
      alt="add"
      appearance="active"
      uid="add"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Add
    </ButtonIcon>
  )
}

export default ToolbarAddButton
