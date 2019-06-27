export type FormModelField = {
  id?: string;
  isValid?: boolean;
  parent?: FormModelField;
  touched?: boolean;
};

export type FormModelDefaultsType = ({
  id,
  isValid,
  parent,
  touched,
}?: FormModelField) => {
  dirty: boolean;
  id: string;
  isValid: boolean;
  parent: string;
  touched: boolean;
};
