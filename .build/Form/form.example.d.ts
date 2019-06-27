/// <reference types="react" />
import { FormFieldInterface } from './form.types';
export declare const model: {
    fields: ({
        label: string;
        attributes: {
            name: string;
            value: string;
            required: boolean;
            placeholder: string;
            appearance: string;
            type?: undefined;
        };
        validate(field: FormFieldInterface): "Please fill in this field." | "Must be at least 2 words separated by a space.";
        component?: undefined;
    } | {
        label: string;
        attributes: {
            name: string;
            value: string;
            required: boolean;
            placeholder: string;
            type: string;
            appearance?: undefined;
        };
        component?: undefined;
    } | {
        label: string;
        attributes: {
            name: string;
            value: string;
            placeholder: string;
            type: string;
            required?: undefined;
            appearance?: undefined;
        };
        component?: undefined;
    } | {
        label: string;
        attributes: {
            name: string;
            value: string;
            appearance: string;
            required?: undefined;
            placeholder?: undefined;
            type?: undefined;
        };
        validate(field: FormFieldInterface): "" | "Format must be '23:59' or '23:59:59'";
        component: ({ attributes, handleChange, id, label, }: FormFieldInterface) => JSX.Element;
    } | {
        label: string;
        attributes: {
            name: string;
            value: string;
            appearance: string;
            type: string;
            required: boolean;
            placeholder?: undefined;
        };
        component?: undefined;
    })[];
};
