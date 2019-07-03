import { useCallback, useMemo, useReducer, useRef } from 'react';
import cuid from 'cuid';
import { useNotEqualEffect } from '../useNotEqualEffect';
import isEmpty from 'lodash/isEmpty';
import { FormModelDefaultsType } from './useForm.types';

//TODO: add hide boolean / function

const modelDefaults: FormModelDefaultsType = function modelDefaults({
  id,
  isValid,
  parent,
  touched,
} = {}) {
  return {
    dirty: touched || false,
    id: id || cuid(),
    isValid: isValid || true,
    parent: parent && parent.id,
    touched: touched || false,
  };
};

export function useForm({
  initialState = { fields: [] },
  onBlur,
  onChange,
  onSubmit,
}) {
  const reducer = useCallback(
    function reducer(state, payload) {
      const parent = payload.parent ? payload.parent.split('-') : [];
      return updateState(state, { ...payload, parent });
    },
    [updateState]
  );

  const initialStateRef = useRef<{ fields: any[] }>();

  const mapInitialState = {
    ...modelDefaults(),
    fields: buildModel({
      fields: initialState.fields,
      parent: {},
    }),
  };

  const [model, dispatch] = useReducer(reducer, mapInitialState);

  useNotEqualEffect(() => {
    dispatch({
      type: 'FORM_REPLACE',
      model: {
        ...initialState,
        fields: buildModel({
          fields: initialState.fields,
          parent: {},
        }),
      },
    });
    initialStateRef.current = initialState;
  }, [initialState, initialStateRef.current]);

  function handleBlur(e: React.MouseEvent<HTMLInputElement>) {
    const {
      id,
      dataset: { parent },
    } = e.currentTarget;

    const field = getField(result => result)({
      id,
      parent,
      fields: model.fields,
    });

    field.data.attributes && validator({ id, parent, model, dispatch });

    onBlur && onBlur(e, { field, model, dispatch });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      id,
      dataset: { parent },
    } = e.target;
    const field = getField(id);

    const data = {
      text: {
        value: e.target.value,
      },
      checkbox: {
        checked: e.target.checked,
      },
      radio: {
        value: e.target.value,
      },
    }[e.target.type] || { value: e.target.value };

    onChange && onChange(e, { field, model, dispatch });

    dispatch({
      type: 'FORM_UPDATE',
      attributes: data,
      id,
      parent,
    });
  }

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    let errors = [];

    const reduceValues = (previous, field) => {
      const {
        attributes: { checked, name, value },
        children,
        id,
        parent,
      } = field;
      const currentValue = () =>
        typeof checked !== 'undefined' ? checked : value;

      const isValid = validator({
        id,
        parent,
        model,
        dispatch,
      });

      if (!isValid) {
        errors.push({ name, id });
      }

      return name
        ? {
            ...previous,
            [name]: children
              ? { ...previous[name], ...getValues(children) }
              : currentValue(),
          }
        : previous;
    };

    const getValues = fields => {
      return fields.reduce(reduceValues, {});
    };

    const result = {
      errors,
      values: getValues(model.fields),
    };

    onSubmit(result, model);
  }

  return useMemo(
    () => ({ dispatch, model, handleChange, handleBlur, handleSubmit }),
    [dispatch, model, handleChange, handleBlur, handleSubmit]
  );
}

export function buildModel({ fields, parent }) {
  return fields.map(field => {
    const { attributes, id, isValid, name, touched } = field;

    const obj = {
      ...field,
      attributes: {
        ...attributes,
        name: name || (attributes && attributes.name) || parent.name,
      },
      ...modelDefaults({ id, isValid, parent, touched }),
    };

    return field.children
      ? {
          ...obj,
          children: buildModel({
            fields: field.children,
            parent: field,
          }),
        }
      : obj;
  });
}

const getField = function getField(cb) {
  return ({ fields, id, parent }) => {
    let parentArray;

    if (Array.isArray(parent)) {
      parentArray = [];
    } else if (typeof parent === 'string') {
      parentArray = parent.split('-');
    } else {
      parentArray = [];
    }

    const parentId = parent && parentArray[0].trim() !== '' && parentArray[0];
    const field = fields.filter(item => item.id === (parentId || id))[0] || {};
    const index = fields.findIndex(item => item.id === (parentId || id));

    return field.children
      ? getField(cb)({
          fields: field.children,
          parent: parentArray.splice(1, parent.length),
          id,
        })
      : cb({ data: field, index });
  };
};

function updateState({ fields, ...state }, payload) {
  const { type, attributes, id, model, parent, ...dataRest } = payload;

  switch (type) {
    case 'FORM_REPLACE':
      return model;
    case 'FORM_UPDATE': {
      const parentId =
        parent.length > 0 && parent[0].trim() !== '' && parent[0];
      const field = fields.filter(item => item.id === (parentId || id))[0];
      const index = fields.findIndex(item => item.id === (parentId || id));

      const parentData = () => {
        const buildFieldChildren = children => {
          return children.map(child => {
            const childUpdate =
              child.id === id
                ? {
                    ...dataRest,
                    attributes: {
                      ...child.attributes,
                      ...attributes,
                    },
                  }
                : {
                    ...(child.children
                      ? { children: buildFieldChildren(child.children) }
                      : {}),
                  };

            return {
              ...child,
              dirty: true,
              touched: true,
              ...childUpdate,
            };
          });
        };

        return {
          ...field,
          ...dataRest,
          attributes: {
            ...field.attributes,
            ...attributes,
            dirty: true,
            touched: true,
          },
          ...(field.children
            ? { children: buildFieldChildren(field.children) }
            : {}),
        };
      };

      const fieldData = () => {
        return {
          ...field,
          ...dataRest,
          attributes: {
            ...field.attributes,
            ...attributes,
          },
          dirty: true,
          touched: true,
        };
      };

      const data = parent.length > 0 ? parentData() : fieldData();

      const isUndefined = value => typeof value === 'undefined';

      return {
        ...state,
        dirty: isUndefined(dataRest.dirty) ? state.dirty : true,
        touched: isUndefined(dataRest.touched) ? state.touched : true,
        isValid: isUndefined(dataRest.isValid)
          ? state.isValid
          : dataRest.isValid,
        fields:
          index === 0
            ? [data, ...fields.slice(1, fields.length)]
            : index === state.length - 1
            ? [...fields.slice(0, fields.length - 1), data]
            : [
                ...fields.slice(0, index),
                data,
                ...fields.slice(index + 1, fields.length),
              ],
      };
    }
    default:
      return state;
  }
}

export function validator({ dispatch, id, model, parent }) {
  //TODO: fix for children. Not getting errors
  const _field =
    //field ||
    getField(({ data }) => data)({
      id,
      parent,
      fields: model.fields,
    });

  if (!_field) return false;

  const { isValid, validate: fieldValidation } = _field;
  const { value = '', required = null, checked = null } =
    _field.attributes || {};

  const payload = { id: id, parent };
  const hasChecked = checked == null;
  const hasValue = value || value.trim() !== '';

  const notValid =
    (required && hasChecked && !hasValue) ||
    (fieldValidation && fieldValidation(_field, model, dispatch));

  if (!notValid !== isValid && !isEmpty(_field)) {
    dispatch({
      type: 'FORM_UPDATE',
      ...payload,
      isValid: !notValid,
    });
  }

  return !notValid;
}
