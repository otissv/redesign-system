import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../Button/Button'
import { ChevronRight } from '../MaterialIcons/ChevronRight'

import { icon } from '../Icon'
import { useAccordion } from './AccordionContext'
import { useAccordionItem } from './AccordionItem'
import {
  accordionButtonTheme,
  accordionButtonIconTheme,
} from './accordion.theme'

export function AccordionButton({
  children,
  className,
  onFocus,
  handleOnClick,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `AccordionButton ${className || ''}`
  const { active, setActiveItem } = useAccordion()
  const { uid } = useAccordionItem()

  function handleClick(e) {
    e.preventDefault()
    handleOnClick ? handleOnClick(e) : setActiveItem(e.target.dataset.uid)
  }

  function handleFocus(e) {
    e.preventDefault()
    onFocus ? onFocus(e) : setActiveItem(e.target.dataset.uid)
  }

  const themed = useMemo(() => [accordionButtonTheme, ...propsThemed], [
    accordionButtonTheme,
    ...propsThemed,
  ])

  const iconThemed = useMemo(() => [accordionButtonIconTheme, ...propsThemed], [
    accordionButtonIconTheme,
    ...propsThemed,
  ])

  return (
    <Button
      className={classNames}
      onClick={handleClick}
      data-uid={uid}
      onFocus={handleFocus}
      stretch
      themed={themed}
      {...propsRest}>
      {children}
      <ChevronRight
        data-uid={uid}
        className="AccordionButtonIcon"
        active={active === uid}
        css="padding: 0;"
        themed={iconThemed}
      />
    </Button>
  )
}

AccordionButton.defaultProps = {
  themed: [],
}

AccordionButton.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'accent',
    'action',
    'danger',
    'success',
    'warning',
    'disabled',
  ]),
  size: PropTypes.oneOf(['small', 'large']),
  stretch: PropTypes.bool,
  themed: PropTypes.array,
  theme: PropTypes.array,
}

export default AccordionButton
