/// <reference types="react" />
import { FormControlInterface } from '../Form';
export declare function CheckBox({ valid, ...props }: {
    valid: false;
    [key: string]: any;
}): JSX.Element;
declare function FormCheckedControl({ attributes, className, field, id, label, labelProps, model, parent, themed, ...propsRest }: FormControlInterface): JSX.Element;
declare namespace FormCheckedControl {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default FormCheckedControl;
export default FormCheckedControl;
