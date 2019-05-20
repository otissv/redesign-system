import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeConsumer } from '../ThemeContext'
import Icon from '../Icon/Icon'

export function Play(props) {
  return (
    <Icon {...props}>
      <path d="M8 5v14l11-7z" />
    </Icon>
  )
}
