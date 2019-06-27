/// <reference types="react" />
import { FormInterface, FormFieldsType } from './form.types';
declare function Form({ className, children, initialState, onChange, onBlur, onSubmit, name, themed, ...propRest }: FormInterface): JSX.Element;
declare namespace Form {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default Form;
export declare const Fields: FormFieldsType;
export default Form;
