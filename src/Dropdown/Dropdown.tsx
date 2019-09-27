import React, { Fragment, useCallback, useMemo, useState, useRef } from 'react'
import styled from 'styled-components'

import { DropdownInterface } from './dropdown.types'
import { CaretDown } from '../MaterialIcons/CaretDown'
import { Portal } from '../Portal'
import { usePositionOffset } from '../reusable/positionOffset'
import { useScrollPosition } from '../reusable/scrollPosition'

import { dropdownTheme, dropdownContentTheme } from './dropdown.theme'
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
  flip = true,
  justify = false,
  height,
  opened: isOpened = false,
  ...propsRest
}: DropdownInterface) {
  const [opened, setOpened] = useState(isOpened)
  const classNames = useMemo(() => `Dropdown ${className}`, [className])
  const { offset } = usePositionOffset()
  const buttonContainerRef = useRef<any>()
  const dropdownContentRef = useRef<any>()
  const contentOffsetRef = useRef({})
  const scroll = useScrollPosition()

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
          flip,
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
      setOpened,
      scroll,
    ]
  )

  const _animate = useMemo(() => {
    return (
      animate || {
        opened: {
          height,
          opacity: 1,
        },
        closed: {
          height: 0,
          opacity: 0,
        },
      }
    )
  }, [animate])

  return (
    <Fragment>
      <DropdownContainer
        stretch={stretch}
        className="DropdownContainer"
        ref={buttonContainerRef}
      >
        <Button
          className={classNames}
          onClick={handleClick}
          stretch={stretch}
          {...propsRest}
        >
          {label} <CaretDown alt="dropdown arrow" />
        </Button>
      </DropdownContainer>

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
    </Fragment>
  )
})

const DropdownContainer = styled.div<any>`
  ${({ stretch }) => `
    display: inline-block;
    width: ${stretch ? '100%' : 'auto'};
  `}
`

export default Dropdown
