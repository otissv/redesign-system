import React from 'react';
import { FormFieldInterface } from './form.types';

export const model = {
  fields: [
    {
      label: 'Full Name',
      attributes: {
        name: 'fullName',
        value: '',
        required: true,
        placeholder: 'Enter your full name',
        appearance: 'primary-accent',
      },
      validate(field: FormFieldInterface) {
        switch (true) {
          case field.attributes.value.trim() === '' &&
            field.attributes.required:
            return 'Please fill in this field.';
          case field.attributes.value.split(/(\s+)/).length < 2:
            return 'Must be at least 2 words separated by a space.';
          default:
            return null;
        }
      },
    },
    {
      label: 'Email',
      attributes: {
        name: 'email',
        value: '',
        required: true,
        placeholder: 'you@domain.com',
        type: 'email',
      },
    },
    {
      label: 'Phone Number (optional)',
      attributes: {
        name: 'phone',
        value: '',
        placeholder: 'Enter your phone number',
        type: 'tel',
      },
    },
    {
      label: 'Preferred contact time (optional)',
      attributes: {
        name: 'contact_time',
        value: '',
        appearance: 'primary',
      },
      validate(field: FormFieldInterface) {
        switch (true) {
          case field.attributes.value.trim() !== '' &&
            !/^\d\d:\d\d(:\d\d)?$/.test(field.attributes.value.trim()):
            return "Format must be '23:59' or '23:59:59'";
          default:
            return '';
        }
      },
      component: ({
        attributes,
        handleChange,
        id,
        label,
      }: FormFieldInterface) => {
        return (
          <label htmlFor={id}>
            {label}
            <select id={id} onChange={handleChange} {...attributes}>
              <option value={attributes.value}>Please choose</option>

              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
            </select>
          </label>
        );
      },
    },
    {
      label: 'notes',
      attributes: {
        name: 'notes',
        value: '',
        appearance: 'primary',
        type: 'textarea',
        required: true,
      },
    },
  ],
};
