import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { sharedStyles } from '../utils'

import {
  floatLabelLabelActiveTheme,
  floatLabelLabelContextTheme,
  floatLabelLabelFloatingTheme,
  floatLabelLabelTheme,
} from './floatLabel.theme'

const LabelStyled = styled.label`
  ${floatLabelLabelTheme};
  ${floatLabelLabelFloatingTheme};
  ${floatLabelLabelActiveTheme};
  ${floatLabelLabelContextTheme} ${sharedStyles};
  ${props => props.styled};
`

export function FloatLabelLabel(props) {
  return <LabelStyled {...props} />
}

FloatLabelLabel.propTypes = {
  children: PropTypes.node,
  context: PropTypes.oneOf([
    'accent',
    'blank',
    'danger',
    'primary',
    'success',
    'warning',
    'disabled',
  ]),
  floating: PropTypes.bool,
  theme: PropTypes.object,
  styled: PropTypes.string,
}
FloatLabelLabel.defaultProps = {
  floating: false,
}

export default FloatLabelLabel
