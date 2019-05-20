import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FormValueControl } from './FormValueControl'
import { FormCheckedControl } from './FormCheckedControl'
import { FormTextareaControl } from './FormTextareaControl'

export function FormControl(props) {
  const type = {
    text: 'text',
    checkbox: 'boolean',
    radio: 'boolean',
    number: 'text',
    textarea: 'textarea',
  }[props.attributes.type || 'text']

  return {
    text: () => <FormValueControl {...props} />,
    boolean: () => <FormCheckedControl {...props} />,
    textarea: () => <FormTextareaControl {...props} />,
  }[type]()
}

FormControl.protoType = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  parent: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.object,
}

export default FormControl
