import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FormLabel } from './FormLabel'
import { ThemeContext } from '../ThemeContext'
import { formControlTheme } from './form-control.theme'
import { setTheme, sharedStyles } from '../utils'
import { Textarea } from '../Textarea'
import { FormErrorMessage } from './FormErrorMessage'
import { Typography } from '../Typography'

const FormTextareaControlStyled = styled.div`
  ${formControlTheme};
  ${sharedStyles};
  ${props => props.styled};
`

export function FormTextareaControl(props) {
  const { theme } = useContext(ThemeContext)
  const { id, label, parent, field, attributes, model, ...propsRest } = props
  const { description, validate, isValid, touched } = field
  const { value, ...attributesRest } = attributes

  const themeContext = setTheme(props.theme, theme)

  return (
    <FormTextareaControlStyled theme={themeContext}>
      <FormLabel key={props.id} htmlFor={id} theme={themeContext}>
        {label}
      </FormLabel>
      <Textarea
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
    </FormTextareaControlStyled>
  )
}

FormTextareaControl.protoType = {
  type: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  theme: PropTypes.object,
}

export default FormTextareaControl
