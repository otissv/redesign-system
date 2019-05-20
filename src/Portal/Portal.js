import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export const Portal = ({ children, rootRef }) => {
  const elementRef = useRef(document.createElement('div'))

  useLayoutEffect(() => {
    rootRef.current && rootRef.current.appendChild(elementRef.current)

    return () => {
      rootRef.current && rootRef.current.removeChild(elementRef.current)
    }
  }, [rootRef.current, elementRef.current])

  return createPortal(children, rootRef.current)
}

export default Portal
