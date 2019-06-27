import * as tslib_1 from "tslib";
import React, { Fragment, useMemo } from 'react';
import { useReducerDevtools } from '../reusable/devtools';
import { useForm } from '../reusable/form';
import { FormControl } from '../FormControl';
import { Base } from '../Base';
import { formTheme } from './form.theme';
//TODO: add hide boolean / function
//TODO: add error component
export function Form(_a) {
    var className = _a.className, children = _a.children, initialState = _a.initialState, onChange = _a.onChange, onBlur = _a.onBlur, onSubmit = _a.onSubmit, name = _a.name, themed = _a.themed, propRest = tslib_1.__rest(_a, ["className", "children", "initialState", "onChange", "onBlur", "onSubmit", "name", "themed"]);
    var classNames = "Form " + className;
    var _themed = useMemo(function () { return [formTheme].concat(themed); }, [formTheme, themed]);
    var _b = useForm({
        initialState: initialState,
        onSubmit: onSubmit,
        onChange: onChange,
        onBlur: onBlur,
    }), modelState = _b.model, formDispatch = _b.dispatch, handleSubmit = _b.handleSubmit, formRest = tslib_1.__rest(_b, ["model", "dispatch", "handleSubmit"]);
    var _c = useReducerDevtools([modelState, formDispatch], initialState, name || 'Form'), model = _c[0], dispatch = _c[1];
    var render = typeof children === 'function'
        ? children(tslib_1.__assign({ dispatch: dispatch, model: model, handleSubmit: handleSubmit }, formRest))
        : children;
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, noValidate: true, onSubmit: handleSubmit, themed: _themed }, propRest),
        React.createElement(Fields, tslib_1.__assign({ model: model }, formRest)),
        render));
}
export var Fields = function Fields(_a) {
    var handleBlur = _a.handleBlur, handleChange = _a.handleChange, handleFocus = _a.handleFocus, model = _a.model;
    return model.fields.map(function (_a) {
        var label = _a.label, _b = _a.attributes, attributes = _b === void 0 ? {} : _b, children = _a.children, component = _a.component, heading = _a.heading, id = _a.id, fieldRest = tslib_1.__rest(_a, ["label", "attributes", "children", "component", "heading", "id"]);
        var value = attributes.value, name = attributes.name, checked = attributes.checked, attributesRest = tslib_1.__rest(attributes, ["value", "name", "checked"]);
        var fieldProps = {
            handleBlur: handleBlur,
            handleChange: handleChange,
            handleFocus: handleFocus,
            label: label,
            id: id,
            model: { fields: children },
            parent: id,
        };
        var render = component ? (component(tslib_1.__assign({ attributes: attributes,
            children: children }, fieldProps))) : children ? (React.createElement("div", tslib_1.__assign({}, attributesRest), Fields(fieldProps))) : (React.createElement(FormControl, { attributes: attributes, id: id, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, label: label, field: fieldRest, model: model }));
        return React.createElement(Fragment, { key: id }, render);
    });
};
Form.defaultProps = {
    className: '',
    themed: [],
};
export default Form;
//# sourceMappingURL=Form.js.map