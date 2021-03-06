import React, { useCallback, useMemo } from 'react'

import { Delete } from '../MaterialIcons/Delete'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { TableToolbarButtonInterface } from './table.types'

export const ToolbarDeleteButton = function ToolbarDeleteButton({
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

  const icon = useMemo(() => Delete, [Delete])

  return (
    <ButtonIcon
      alt="delete"
      appearance="active"
      uid="delete"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Delete
    </ButtonIcon>
  )
}

export default ToolbarDeleteButton
