import React, { useMemo, useState } from 'react'

export const ToggleContainer = React.memo(function ToggleContainer({
  children,
}) {
  const toggle = useState(false)

  function handleClick() {
    const [value, setToggle] = toggle
    setToggle(!value)
  }

  const context = useMemo(() => toggle, [toggle])

  return children(context)
})
