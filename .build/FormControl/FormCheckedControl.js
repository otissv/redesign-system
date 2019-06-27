import * as tslib_1 from "tslib";
import React from 'react';
import { formControlTheme } from './form-control.theme';
import { FormLabel } from './FormLabel';
import { Typography } from '../Typography';
import { Base } from '../Base';
import { FormValidation } from './FormValidation';
export function CheckBox(_a) {
    var valid = _a.valid, props = tslib_1.__rest(_a, ["valid"]);
    return React.createElement("input", tslib_1.__assign({}, props));
}
export function FormCheckedControl(_a) {
    var attributes = _a.attributes, className = _a.className, field = _a.field, id = _a.id, label = _a.label, labelProps = _a.labelProps, model = _a.model, parent = _a.parent, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["attributes", "className", "field", "id", "label", "labelProps", "model", "parent", "themed"]);
    var classNames = "FormCheckedControl " + className;
    var _themed = React.useMemo(function () { return [formControlTheme].concat(themed); }, [
        formControlTheme,
        themed,
    ]);
    var description = field.description, isValid = field.isValid;
    var appearance = attributes.appearance, checked = attributes.checked, attributesRest = tslib_1.__rest(attributes, ["appearance", "checked"]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest),
        React.createElement(FormLabel, tslib_1.__assign({ id: id }, labelProps),
            React.createElement(CheckBox, tslib_1.__assign({ id: id, "data-parent": parent, checked: checked || false }, attributesRest, propsRest, { appearance: !isValid ? 'error' : appearance, valid: isValid })),
            label),
        description && (React.createElement(Typography, { marginTop: 1, styled: "color: #a0a0a0;" }, description)),
        React.createElement(FormValidation, { attributes: attributes, field: field, model: model })));
}
FormCheckedControl.defaultProps = {
    className: '',
    themed: [],
};
export default FormCheckedControl;
//# sourceMappingURL=FormCheckedControl.js.map