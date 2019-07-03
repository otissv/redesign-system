import React, { Fragment, useMemo } from 'react';
import { useReducerDevtools } from '../reusable/devtools';
import { useForm } from '../reusable/form';

import { FormControl } from '../FormControl';
import {
  FormInterface,
  FormFieldsType,
  FormFieldInterface,
} from './form.types';
import { Base } from '../Base';
import { formTheme } from './form.theme';
//TODO: add hide boolean / function
//TODO: add error component

export const Form = function Form({
  className,
  children,
  initialState,
  onChange,
  onBlur,
  onSubmit,
  name,
  themed,
  ...propRest
}: FormInterface) {
  const classNames = `Form ${className}`;
  const _themed = useMemo(() => [formTheme, ...themed], [formTheme, themed]);

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
  });

  const [model, dispatch] = useReducerDevtools(
    [modelState, formDispatch],
    initialState,
    name || 'Form'
  );

  const render =
    typeof children === 'function'
      ? children({ dispatch, model, handleSubmit, ...formRest })
      : children;

  return (
    <Base
      className={classNames}
      noValidate
      onSubmit={handleSubmit}
      themed={_themed}
      {...propRest}
    >
      <Fields model={model} {...formRest} />
      {render}
    </Base>
  );
};

export const Fields: FormFieldsType = function Fields({
  handleBlur,
  handleChange,
  handleFocus,
  model,
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
      const { value, name, checked, ...attributesRest } = attributes;

      const fieldProps: FormFieldInterface = {
        handleBlur,
        handleChange,
        handleFocus,
        label,
        id,
        model: { fields: children },
        parent: id,
      };

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
      );

      return <Fragment key={id}>{render}</Fragment>;
    }
  );
};

Form.defaultProps = {
  className: '',
  themed: [],
};

export default Form;
