import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeConsumer } from '../ThemeContext'
import Icon from '../Icon/Icon'

export function CaretLeft(props) {
  return (
    <Icon {...props} viewBox="0 0 480 480">
      <path id="path4" d="M 190,340 290,240 190,140 Z" />
    </Icon>
  )
}
