import React, { useCallback, useMemo } from 'react'

import { AccordionButtonInterface } from './accordion.types'

import { Button } from '../Button/Button'
import { ChevronRight } from '../MaterialIcons/ChevronRight'

import { useAccordion } from './AccordionContext'
import { useAccordionItem } from './AccordionItem'
import { accordionButtonTheme, accordionIconTheme } from './accordion.theme'

export const AccordionButton = React.memo(function AccordionButton({
  children,
  className = '',
  onFocus,
  handleOnClick,
  themed = [],
  ...propsRest
}: AccordionButtonInterface) {
  const classNames = useMemo(() => `AccordionButton ${className}`, [className])
  const { active, setActiveItem } = useAccordion()
  const { uid } = useAccordionItem()

  const handleClick = useCallback(
    function handleClick(e) {
      e.preventDefault()

      const activeItem =
        active == e.target.dataset.uid ? null : e.target.dataset.uid

      handleOnClick ? handleOnClick(e) : setActiveItem(activeItem)
    },
    [handleOnClick, setActiveItem, active]
  )

  const handleFocus = useCallback(
    function handleFocus(e) {
      e.preventDefault()

      onFocus ? onFocus(e) : setActiveItem(active)
    },
    [onFocus, setActiveItem, active]
  )

  const _themed = useMemo(() => [accordionButtonTheme, ...themed], [
    accordionButtonTheme,
    ...themed,
  ])

  const iconThemed = useMemo(() => [accordionIconTheme, ...themed], [
    accordionIconTheme,
    ...themed,
  ])

  return (
    <Button
      className={classNames}
      onClick={handleClick}
      data-uid={uid}
      onFocus={handleFocus}
      stretch
      themed={_themed}
      {...propsRest}
    >
      {children}
      <ChevronRight
        data-uid={uid}
        className="AccordionIcon"
        active={active === uid}
        css="padding: 0;"
        themed={iconThemed}
        alt={active === uid ? 'Expand' : 'Collapse'}
      />
    </Button>
  )
})

export default AccordionButton
