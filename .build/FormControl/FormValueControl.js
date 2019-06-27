import * as tslib_1 from "tslib";
import React from 'react';
import { formControlTheme } from './form-control.theme';
import { Input } from '../Input';
import { FormLabel } from './FormLabel';
import { Typography } from '../Typography';
import { Base } from '../Base';
import { FormValidation } from './FormValidation';
export function FormValueControl(_a) {
    var className = _a.className, attributes = _a.attributes, field = _a.field, id = _a.id, label = _a.label, labelProps = _a.labelProps, parent = _a.parent, model = _a.model, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["className", "attributes", "field", "id", "label", "labelProps", "parent", "model", "themed"]);
    var classNames = "FormValueControl " + className;
    var _themed = React.useMemo(function () { return [formControlTheme].concat(themed); }, [
        formControlTheme,
        themed,
    ]);
    var appearance = attributes.appearance, value = attributes.value, attributesRest = tslib_1.__rest(attributes, ["appearance", "value"]);
    var description = field.description, isValid = field.isValid;
    var labelComponent = label ? (React.createElement(FormLabel, tslib_1.__assign({}, labelProps, { id: id }), label)) : null;
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        labelComponent,
        React.createElement(Input, tslib_1.__assign({ id: id, "data-parent": parent, value: value || '' }, attributesRest, propsRest, { appearance: !isValid ? 'error' : appearance, valid: isValid })),
        description && (React.createElement(Typography, { marginTop: 1, styled: "color: #a0a0a0;" }, description)),
        React.createElement(FormValidation, { attributes: attributes, field: field, model: model })));
}
FormValueControl.defaultProps = {
    className: '',
    themed: [],
    attributes: {},
};
export default FormValueControl;
//# sourceMappingURL=FormValueControl.js.map