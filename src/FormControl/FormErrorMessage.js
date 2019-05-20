import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Typography } from '../Typography'

export function FormErrorMessage({ message }) {
  return (
    <Typography appearance="danger" marginTop={1}>
      {message}
    </Typography>
  )
}

FormErrorMessage.protoType = {
  message: PropTypes.string,
}

export default FormErrorMessage
