import * as tslib_1 from "tslib";
import React from 'react';
import { FormValueControl } from './FormValueControl';
import { FormCheckedControl } from './FormCheckedControl';
import { FormTextareaControl } from './FormTextareaControl';
export function FormControl(props) {
    function getType(type) {
        switch (type) {
            case 'text':
                return 'text';
            case 'checkbox':
                return 'boolean';
            case 'radio':
                return 'boolean';
            case 'number':
                return 'text';
            case 'textarea':
                return 'textarea';
            case 'textarea':
                return 'textarea';
            default:
                return 'text';
        }
    }
    var type = getType(props.attributes.type);
    return {
        text: function () { return React.createElement(FormValueControl, tslib_1.__assign({}, props)); },
        boolean: function () { return React.createElement(FormCheckedControl, tslib_1.__assign({}, props)); },
        textarea: function () { return React.createElement(FormTextareaControl, tslib_1.__assign({}, props)); },
    }[type]();
}
FormControl.defaultProps = {
    themed: [],
};
export default FormControl;
//# sourceMappingURL=FormControl.js.map