import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { ListAlt } from '../MaterialIcons/ListAlt'
import { Code } from '../MaterialIcons/Code'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

const ToolbarViewsContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const ToolbarViewsButton = React.memo(function ToolbarViewsButton({
  currentView,
  onClick,
}) {
  function handleClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  const selectedStyle = useCallback(
    view => (currentView === view ? 'border-bottom: 1px solid #fff;' : ''),
    [currentView]
  )

  const ComponentListAlt = useMemo(() => ListAlt, [ListAlt])
  const ComponentCode = useMemo(() => Code, [Code])

  return (
    <ToolbarViewsContainer>
      <ButtonIcon
        icon={ComponentListAlt}
        onClick={handleClick}
        styled={selectedStyle('table')}
        title="Table"
        uid="table"
      />
      <ButtonIcon
        icon={ComponentCode}
        onClick={handleClick}
        styled={selectedStyle('json')}
        title="JSON"
        uid="json"
      />
    </ToolbarViewsContainer>
  )
})

export default ToolbarViewsButton
