import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeConsumer } from '../ThemeContext'
import Icon from '../Icon/Icon'

export function PlayCircle(props) {
  return (
    <Icon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </Icon>
  )
}
