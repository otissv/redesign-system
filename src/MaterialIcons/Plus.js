import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeConsumer } from '../ThemeContext'
import Icon from '../Icon/Icon'

export function Plus(props) {
  return (
    <Icon {...props}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Icon>
  )
}
