import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { DropdownInterface } from './dropdown.types'
import { CaretDown } from '../MaterialIcons/CaretDown'
import { Portal } from '../Portal'
import { usePositionOffset } from '../reusable/positionOffset'
import { useScrollPosition } from '../reusable/scrollPosition'

import {
  dropdownTheme,
  dropdownContainerTheme,
  dropdownContentTheme,
} from './dropdown.theme'
import { Button } from '../Button/Button'
import Base from '../Base/Base'

export const Dropdown = React.memo(function Dropdown({
  children,
  className = '',
  label,
  animate,
  themed = [],
  stretch = false,
  position = 'bottom-left',
  hover = false,
  noFlip = false,
  justify = false,
  opened: isOpened = false,
  ...propsRest
}: DropdownInterface) {
  const [opened, setOpened] = useState(isOpened)
  const classNames = useMemo(() => `Dropdown ${className}`, [className])
  const { offset } = usePositionOffset()
  const buttonContainerRef = useRef<any>()
  const dropdownContentRef = useRef<any>()
  const [contentPosition, setContentPosition] = useState({
    top: 0,
    left: 0,
  })
  const contentOffsetRef = useRef({})
  const scroll = useScrollPosition()

  // const contentOffset = offset({
  //   element,
  //   target: dropdownContentRef.current,
  // })(contentPosition)

  const themedDropdownContainer = useMemo(() => [dropdownContainerTheme], [
    dropdownContainerTheme,
  ])
  const themedContent = useMemo(
    () => [dropdownTheme, dropdownContentTheme, ...themed],
    [dropdownTheme, dropdownContentTheme, themed]
  )

  const handleClick = useCallback(
    function handleClick(e) {
      e.preventDefault
      setOpened(!opened)

      const element =
        buttonContainerRef.current && buttonContainerRef.current.children[0]

      const { top: scrollTop, left: scrollLeft } = scroll()

      if (element) {
        const contentOffset = offset({
          element,
          target: dropdownContentRef.current,
        })(position)
        contentOffsetRef.current = {
          top: scrollTop + contentOffset.top,
          left: scrollLeft + contentOffset.left,
        }
      }
    },
    [
      buttonContainerRef,
      contentOffsetRef,
      dropdownContentRef,
      offset,
      position,
      setContentPosition,
      setOpened,
      scroll,
    ]
  )

  const _animate = useMemo(() => {
    return (
      animate || {
        opened: {
          applyAtStart: { display: 'block' },
          opacity: 1,
        },
        closed: {
          applyAtEnd: { display: 'none' },
          opacity: 0,
        },
      }
    )
  }, [animate])

  return (
    <Base
      className="DropdownContainer"
      themed={themedDropdownContainer}
      stretch={stretch}
    >
      <div ref={buttonContainerRef}>
        <Button
          className={classNames}
          onClick={handleClick}
          stretch={stretch}
          {...propsRest}
        >
          {label} <CaretDown alt="dropdown arrow" />
        </Button>
      </div>

      <Portal>
        <Base
          className={classNames}
          themed={themedContent}
          state={opened ? 'opened' : 'closed'}
          {...propsRest}
          animate={_animate}
          style={contentOffsetRef.current}
        >
          <div ref={dropdownContentRef}>{children}</div>
        </Base>
      </Portal>
    </Base>
  )
})

export default Dropdown
