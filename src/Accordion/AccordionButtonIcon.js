import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { accordionButtonIconTheme } from './accordion.theme'
import { ChevronRight } from '../MaterialIcons/ChevronRight'

export function AccordionButtonIcon({
  children,
  className,
  onFocus,
  handleOnClick,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `AccordionButtonIcon ${className || ''}`
  const themed = useMemo(() => [accordionButtonIconTheme, ...propsThemed], [
    accordionButtonIconTheme,
    ...propsThemed,
  ])

  return (
    <Icon
      className={classNames}
      themed={themed}
      {...propsRest}
      icon={ChevronRight}>
      {children}
    </Icon>
  )
}

AccordionButtonIcon.defaultProps = {
  themed: [],
}

AccordionButtonIcon.propTypes = {
  theme: PropTypes.object,
}

export default AccordionButtonIcon
