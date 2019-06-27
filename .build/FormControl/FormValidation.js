import * as tslib_1 from "tslib";
import React from 'react';
import { FormErrorMessage } from './FormErrorMessage';
export function FormValidation(_a) {
    var attributes = _a.attributes, field = _a.field, model = _a.model;
    var validate = field.validate, isValid = field.isValid;
    switch (true) {
        case !isValid && !!validate: {
            return (React.createElement(FormErrorMessage, { message: validate(tslib_1.__assign({}, field, { attributes: attributes }), model) }));
        }
        case !isValid && !validate && attributes.required: {
            return React.createElement(FormErrorMessage, { message: "Please fill in this field." });
        }
        default:
            return null;
    }
}
export default FormValidation;
//# sourceMappingURL=FormValidation.js.map