import * as tslib_1 from "tslib";
import React from 'react';
import { FormLabel } from './FormLabel';
import { formControlTheme } from './form-control.theme';
import { Textarea } from '../Textarea';
import { Typography } from '../Typography';
import { Base } from '../Base';
import { FormValidation } from './FormValidation';
export function FormTextareaControl(_a) {
    var className = _a.className, id = _a.id, label = _a.label, parent = _a.parent, field = _a.field, attributes = _a.attributes, model = _a.model, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["className", "id", "label", "parent", "field", "attributes", "model", "themed"]);
    var classNames = "FormTextareaControl " + className;
    var _themed = React.useMemo(function () { return [formControlTheme].concat(themed); }, [
        formControlTheme,
        themed,
    ]);
    var description = field.description, isValid = field.isValid;
    var appearance = attributes.appearance, value = attributes.value, attributesRest = tslib_1.__rest(attributes, ["appearance", "value"]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(FormLabel, { key: id, id: id }, label),
        React.createElement(Textarea, tslib_1.__assign({ id: id, "data-parent": parent, value: value }, attributesRest, propsRest, { appearance: !isValid ? 'error' : appearance, valid: isValid })),
        description && (React.createElement(Typography, { marginTop: 1, styled: "color: #a0a0a0;" }, description)),
        React.createElement(FormValidation, { attributes: attributes, field: field, model: model })));
}
FormTextareaControl.defaultProps = {
    className: '',
    themed: [],
    value: '',
};
export default FormTextareaControl;
//# sourceMappingURL=FormTextareaControl.js.map