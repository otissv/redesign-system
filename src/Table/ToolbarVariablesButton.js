import React, { useMemo } from 'react'

import { Search } from '../MaterialIcons/Search'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export const ToolbarVariablesButton = React.memo(
  function ToolbarVariablesButton({ title, hasViews, onClick, ...propsRest }) {
    function handleClick(e) {
      e.preventDefault()
      onClick && onClick(e)
    }

    const Component = useMemo(() => Search, [Search])

    return (
      <ButtonIcon
        uid="variables"
        onClick={handleClick}
        Component={Component}
        {...propsRest}
      />
    )
  }
)

export default ToolbarVariablesButton
