import React, { useCallback, useMemo, useState } from 'react'
import { DropdownInterface } from './dropdown.types'
import { CaretDown } from '../MaterialIcons/CaretDown'

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
  ...propsRest
}: DropdownInterface) {
  const [opened, setOpened] = useState(false)
  const classNames = useMemo(() => `Dropdown ${className}`, [className])

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
    },
    [setOpened]
  )

  const _animate = useMemo(() => {
    return (
      animate || {
        opened: {
          opacity: 1,
        },
        closed: {
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
      <Button
        className={classNames}
        onClick={handleClick}
        {...propsRest}
        stretch={stretch}
      >
        {label} <CaretDown alt="dropdown arrow" />
      </Button>

      <Base
        className={classNames}
        as="ul"
        themed={themedContent}
        state={opened ? 'opened' : 'closed'}
        {...propsRest}
        animate={_animate}
      >
        {children}
      </Base>
    </Base>
  )
})

export default Dropdown
