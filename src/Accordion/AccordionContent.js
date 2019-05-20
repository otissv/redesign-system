import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Base from '../Base/Base'
import { accordionContentTheme } from './accordion.theme'
import { setTheme, sharedStyles } from '../utils'
import { useAccordion } from './AccordionContext'
import { useAccordionItem } from './AccordionItem'
import { useTheme } from '../ThemeContext'

const AccordionContentStyled = styled.div`
  ${accordionContentTheme}
  ${sharedStyles};
  ${props => props.styled};
`

export function AccordionContent({
  children,
  className,
  theme: propsTheme,
  ...propsRest
}) {
  const classNames = `AccordionContent ${className || ''}`

  const { theme } = useTheme()
  const { active, animate } = useAccordion()
  const { uid } = useAccordionItem()
  const themeContext = setTheme(propsTheme, theme)

  const _animate = useMemo(() => {
    return (
      animate || {
        open: { height: 'auto' },
        close: { height: 0 },
      }
    )
  }, [animate])

  // styled={active === uid ? 'display:block;' : ''}

  return (
    <AccordionContentStyled
      className={classNames}
      theme={themeContext}
      {...propsRest}>
      <Base
        className={classNames}
        animate={_animate}
        state={active === uid ? 'open' : 'close'}
        {...propsRest}>
        {children}
      </Base>
    </AccordionContentStyled>
  )
}

AccordionContent.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.object,
}

export default AccordionContent
