import React from 'react';
import { FormFieldInterface } from './form.types';
import { Tabs } from '../Tabs';
import { TabListButton } from '../Tabs/TabListButton';
import { TabList } from '../Tabs/TabList';
import { TabPanel } from '../Tabs/TabPanel';
import { FormControl } from '../FormControl';

export function stringIsJson(value: string) {
  if (typeof value !== 'string') {
    return false;
  }

  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

export function validateJSON(field: FormFieldInterface) {
  return !stringIsJson(field.attributes.value) && 'Invalid JSON';
}

export const model = {
  fields: [
    {
      id: 'name',
      label: 'Project Name',
      attributes: {
        value: '',
        required: true,
      },
      description: 'The name of the project to create.',
      validate(field: FormFieldInterface) {
        const attributes = field.attributes || {
          attributes: {
            value: '',
            required: false,
          },
        };

        switch (true) {
          case attributes.value.trim() === '' && attributes.required:
            return 'Please fill in this field';
          case attributes.value.length <= 1:
          case attributes.value.length > 256:
            return 'Project Name must be between 2 and 50 characters';
          default:
            return null;
        }
      },
    },
    {
      id: 'endpoint',
      label: 'Endpoint',
      attributes: {
        value: '',
        required: true,
      },
      description: 'Graphql endpoint to connect to.',
      validate(field: FormFieldInterface) {
        const attributes = field.attributes || {
          attributes: {
            value: '',
            required: false,
          },
        };

        switch (true) {
          case attributes.value.trim() === '' && attributes.required:
            return 'Please fill in this field';
          case attributes.value.length <= 1:
          case attributes.value.length > 256:
            return 'Project Name must be between 2 and 50 characters';
          default:
            return null;
        }
      },
    },
    {
      component: () => 'Optional',
    },
    {
      id: 'group',
      component: ({
        children,
        handleBlur,
        handleChange,
        handleFocus,
        parent,
      }) => (
        <Tabs css="height: 200px">
          <TabList active="headers" stretch>
            {children.map(({ label, id: uid }) => (
              <TabListButton key={uid} uid={uid} title={label}>
                {label}
              </TabListButton>
            ))}
          </TabList>

          {children.map(({ children: fields = [], id: uid }) => (
            <TabPanel key={uid} uid={uid} marginTop={5}>
              {fields.map(({ attributes, id, label, ...fieldRest }) => {
                return (
                  <FormControl
                    key={id}
                    attributes={attributes}
                    id={id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    label={label}
                    field={fieldRest}
                    parent={`${parent}-${uid}`}
                  />
                );
              })}
            </TabPanel>
          ))}
        </Tabs>
      ),

      children: [
        {
          id: 'pramas',
          label: 'Params',
          children: [
            {
              id: 'pramas',
              label: 'Params',
              description: '',
            },
          ],
        },
        {
          id: 'headers',
          label: 'Headers',
          children: [
            {
              id: 'headers',
              label: 'Headers',
              attributes: {
                type: 'textarea',
                value: `{
}`,
              },
              description: '',
              validate: validateJSON,
            },
          ],
        },
      ],
    },
  ],
};
