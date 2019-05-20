import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { accordionItemTheme } from './accordion.theme'
import { setTheme, sharedStyles } from '../utils'
import { useTheme } from '../ThemeContext'

export const AccordionItemContext = React.createContext('')

export function useAccordionItem() {
  return useContext(AccordionItemContext)
}

export function AccordionItem({
  children,
  className,
  uid,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `AccordionItem ${className || ''}`
  const themed = useMemo(() => [accordionItemTheme, ...propsThemed], [
    accordionItemTheme,
    propsThemed,
  ])

  const state = useState(uid)
  const { theme } = useTheme()
  const themeContext = setTheme(propsRest.theme, theme)

  const context = useMemo(
    () => ({
      uid: state[0],
    }),
    [uid]
  )

  return (
    <AccordionItemContext.Provider value={context}>
      <Base className={classNames} themed={themed} {...propsRest}>
        {children}
      </Base>
    </AccordionItemContext.Provider>
  )
}

AccordionItem.defaultProps = {
  themed: [],
}

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  themed: PropTypes.array,
  uid: PropTypes.string,
}

export default AccordionItem
