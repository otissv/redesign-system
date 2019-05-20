import React, { Fragment, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AccordionProvider } from './AccordionContext'
import Base from '../Base/Base'
import AccordionButton from './AccordionButton'
import AccordionContent from './AccordionContent'
import AccordionItem from './AccordionItem'
import { accordionTheme } from './accordion.theme'
import { useTheme } from '../ThemeContext'

export function Accordion({
  active,
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Accordion ${className || ''}`

  const themed = useMemo(() => [accordionTheme, ...propsThemed], [
    accordionTheme,
    propsThemed,
  ])

  return (
    <AccordionProvider value={active}>
      <Base className={classNames} themed={themed} {...propsRest}>
        {children}
      </Base>
    </AccordionProvider>
  )
}

Accordion.defaultProps = {
  items: [],
  themed: [],
}

Accordion.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node,
  item: PropTypes.object,
  theme: PropTypes.object,
}
export default Accordion
