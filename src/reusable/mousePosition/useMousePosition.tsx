import { useCallback, useEffect, useState } from 'react'

export const useMousePosition = () => {
  //TODO offset position
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const setFromEvent = useCallback(
    function setFromEvent(e: MouseEvent) {
      return setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    },
    [setPosition]
  )

  useEffect(() => {
    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}
