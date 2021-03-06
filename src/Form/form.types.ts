import React from 'react';

import { AppearanceType } from '../theme';
import { BaseInterface } from '../Base';

export interface FormInterface extends BaseInterface {
  initialState: FormModelInterface;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onSubmit: FormSubmitType;
  name?: string;
  parent?: string;
  heading?: React.ReactNode;
}

export type FormFieldsType = ({
  handleBlur,
  handleChange,
  handleFocus,
  model,
}: {
  handleBlur?: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.MouseEvent<HTMLInputElement>) => void;
  model?: FormModelInterface;
}) => any;

export interface FormAttributes {
  appearance?: AppearanceType;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  checked?: boolean;
  [key: string]: any;
}

export interface FormFieldInterface extends BaseInterface {
  attributes?: {
    appearance?: AppearanceType;
    // children?: FormFieldInterface;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value?: string;
    checked?: boolean;
    [key: string]: any;
  };
  children?: FormFieldInterface[];
  component?: any;
  heading?: string;
  id: string;
  label?: string;
  labelProps?: FormLabelInterface;
  model?: FormModelInterface;
  onBlur?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void;
  parent?: string;
  validate?: (
    field: FormFieldInterface,
    model: FormModelInterface
  ) => string | null;
}

export interface FormValidationInterface {
  attributes?: {
    appearance?: AppearanceType;
    name?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value?: string;
    checked?: boolean;
    [key: string]: any;
  };
  field: FormFieldInterface;
  model: FormModelInterface;
}

export interface FormControlInterface extends FormFieldInterface {}

export interface FormModelInterface {
  fields: FormFieldInterface[];
}

export type FormModelDefaultsType = ({
  dirty,
  id,
  isValid,
  parent,
  touched,
}: {
  dirty?: boolean;
  id?: string;
  isValid?: boolean;
  parent?: {
    id: string;
  };
  touched?: boolean;
}) => {
  dirty: boolean;
  id: string;
  isValid: boolean;
  parent: {
    id: string;
  };
  touched: boolean;
};

export interface FormErrorMessageInterface extends BaseInterface {
  message?: string;
}

export interface FormLabelInterface extends BaseInterface {
  id: string;
  children?: React.ReactNode;
}

export type FormValidateType = (
  field?: FormFieldInterface,
  model?: FormModelInterface
) => string | null;

export type FormSubmitType = (
  { values, errors }: { values: any; errors: any },
  model: FormModelInterface
) => Promise<any> | void;
