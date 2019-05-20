import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { setTheme, sharedStyles } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { formControlTheme } from './form-control.theme'
import { Input } from '../Input'
import { FormLabel } from './FormLabel'
import { Typography } from '../Typography'
import { FormErrorMessage } from './FormErrorMessage'

const FormValueControlStyled = styled.div`
  ${formControlTheme};
  ${sharedStyles};
  ${props => props.styled};
`

export function FormValueControl(props) {
  const { theme } = useContext(ThemeContext)
  const { id, label, parent, field, attributes, model, ...propsRest } = props
  const { description, validate, isValid, touched } = field
  const { value, ...attributesRest } = attributes

  const themeContext = setTheme(props.theme, theme)

  const labelComponent = label ? (
    <FormLabel key={props.id} htmlFor={id} theme={themeContext}>
      {label}
    </FormLabel>
  ) : null

  return (
    <FormValueControlStyled theme={themeContext}>
      {labelComponent}
      <Input
        id={id}
        data-parent={parent}
        value={value || ''}
        {...attributesRest}
        {...propsRest}
        appearance={!isValid ? 'error' : null}
        valid={isValid}
      />

      {description && (
        <Typography marginTop={1} styled="color: #a0a0a0;">
          {description}
        </Typography>
      )}
      {!isValid && validate && (
        <FormErrorMessage message={validate({ ...field, attributes }, model)} />
      )}
    </FormValueControlStyled>
  )
}

FormValueControl.protoType = {
  type: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.object,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  theme: PropTypes.object,
}

export default FormValueControl
