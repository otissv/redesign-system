import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { setTheme, sharedStyles } from '../utils'
import { ThemeContext } from '../ThemeContext'

import { formLabelTheme } from './form-label.theme'

const FormLabelStyled = styled.label`
  ${formLabelTheme};
  ${sharedStyles}
  ${props => props.styled};
`

export function FormLabel(props) {
  const { theme } = useContext(ThemeContext)
  const { children, id, ...propsRest } = props
  const themeContext = setTheme(props.theme, theme)

  return (
    <FormLabelStyled
      key={props.id}
      htmlFor={id}
      {...propsRest}
      theme={themeContext}>
      {children}
    </FormLabelStyled>
  )
}

FormLabel.protoType = {
  id: PropTypes.string,
  children: PropTypes.string,
  theme: PropTypes.object,
  styled: PropTypes.string,
}

export default FormLabel
