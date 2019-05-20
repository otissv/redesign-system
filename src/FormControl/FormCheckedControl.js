import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { setTheme, sharedStyles } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { formControlTheme } from './form-control.theme'
import { FormLabel } from './FormLabel'
import { FormErrorMessage } from './FormErrorMessage'
import { Typography } from '../Typography'

const FormCheckedControlStyled = styled.div`
  ${formControlTheme};
  ${sharedStyles};
  ${props => props.styled};
`

export function CheckBox({ valid, ...props }) {
  return <input {...props} />
}

export function FormCheckedControl(props) {
  const { theme } = useContext(ThemeContext)

  const { id, label, parent, field, attributes, model, ...propsRest } = props
  const { description, validate, isValid, touched } = field
  const { checked, ...attributesRest } = attributes

  const themeContext = setTheme(props.theme, theme)

  return (
    <FormCheckedControlStyled theme={themeContext}>
      <FormLabel key={props.id} htmlFor={id} theme={themeContext}>
        <CheckBox
          id={id}
          data-parent={parent}
          checked={checked || false}
          {...attributesRest}
          {...propsRest}
          appearance={!isValid ? 'error' : null}
          valid={isValid}
        />
        {label}
      </FormLabel>

      {description && (
        <Typography marginTop={1} styled="color: #a0a0a0;">
          {description}
        </Typography>
      )}

      {!isValid && touched && validate && (
        <FormErrorMessage message={validate({ ...field, attributes }, model)} />
      )}
    </FormCheckedControlStyled>
  )
}

FormCheckedControl.protoType = {
  type: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  theme: PropTypes.object,
}

export default FormCheckedControl
