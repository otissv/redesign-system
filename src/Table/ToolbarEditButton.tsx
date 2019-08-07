import React, { useCallback, useMemo } from 'react'

import { Edit } from '../MaterialIcons/Edit'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { TableToolbarButtonInterface } from './table.types'

export const ToolbarEditButton = function ToolbarEditButton({
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

  const icon = useMemo(() => Edit, [Edit])

  return (
    <ButtonIcon
      as="a"
      alt="edit"
      appearance="active"
      uid="edit"
      onClick={handleClick}
      icon={icon}
      css={`
        svg.Icon {
          padding-right: 5px;
        }
      `}
      {...propsRest}
    >
      Edit
    </ButtonIcon>
  )
}

export default ToolbarEditButton
