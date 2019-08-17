import React, { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { PortalInterface } from './portal.types'

export const Portal = React.memo(function Portal({
  children,
  selector = 'body',
}: PortalInterface) {
  const rootRef = useRef(document.querySelector(selector))

  const elementRef = useRef(document.createElement('div'))

  useLayoutEffect(() => {
    rootRef.current && rootRef.current.appendChild(elementRef.current)

    return () => {
      rootRef.current && rootRef.current.removeChild(elementRef.current)
    }
  }, [rootRef.current, elementRef.current])

  return createPortal(children, rootRef.current)
})

export default Portal
