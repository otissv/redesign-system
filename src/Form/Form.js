import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { useReducerDevtools, useForm } from '../reusable'

import { FormControl } from '../FormControl'
import { ThemeContext } from '../ThemeContext'
import { setTheme, sharedStyles } from '../utils'

const FormStyled = styled.form`
  ${sharedStyles};
  ${props => props.styled};
`

//TODO: add hide boolean / function
//TODO: add error component

export const Form = React.memo(function Form(props) {
  const { theme } = useContext(ThemeContext)

  const {
    children,
    initialState,
    onChange,
    onBlur,
    onFocus,
    onSubmit,
    name,
    ...propRest
  } = props

  const {
    model: modelState,
    dispatch: formDispatch,
    handleSubmit,
    ...formRest
  } = useForm({
    initialState,
    onSubmit,
    onChange,
    onBlur,
    onFocus,
  })

  const [model, dispatch] = useReducerDevtools(
    [modelState, formDispatch],
    initialState,
    name || 'Form'
  )

  const render =
    typeof children === 'function'
      ? children({ dispatch, model, handleSubmit, ...formRest })
      : children

  const themeContext = setTheme(props.theme, theme)

  return (
    <FormStyled
      noValidate
      onSubmit={handleSubmit}
      theme={themeContext}
      {...propRest}>
      <Fields model={model} {...formRest} />
      {render}
    </FormStyled>
  )
})

export const Fields = React.memo(function Fields({
  handleBlur,
  handleChange,
  handleFocus,
  model,
  parent,
}) {
  return model.fields.map(
    ({
      label,
      attributes = {},
      children,
      component,
      heading,
      id,
      ...fieldRest
    }) => {
      const { value, name, checked, ...attributesRest } = attributes

      const fieldProps = {
        handleBlur,
        handleChange,
        handleFocus,
        label,
        id,
        model: { fields: children },
        parent: id,
      }

      const render = component ? (
        component({
          attributes,
          children,
          ...fieldProps,
        })
      ) : children ? (
        <div {...attributesRest}>{Fields(fieldProps)}</div>
      ) : (
        <FormControl
          attributes={attributes}
          id={id}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          label={label}
          field={fieldRest}
          model={model}
        />
      )

      return <Fragment key={id}>{render}</Fragment>
    }
  )
})

export default Form
